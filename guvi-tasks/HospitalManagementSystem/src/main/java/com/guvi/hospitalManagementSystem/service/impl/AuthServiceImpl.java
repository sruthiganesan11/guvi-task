package com.guvi.hospitalManagementSystem.service.impl;

import com.guvi.hospitalManagementSystem.dto.JwtAuthResponse;
import com.guvi.hospitalManagementSystem.dto.LoginDto;
import com.guvi.hospitalManagementSystem.dto.RegisterDto;
import com.guvi.hospitalManagementSystem.entity.Role;
import com.guvi.hospitalManagementSystem.entity.User;
import com.guvi.hospitalManagementSystem.exception.UserApiException;
import com.guvi.hospitalManagementSystem.repository.RoleRepo;
import com.guvi.hospitalManagementSystem.repository.UserRepo;
import com.guvi.hospitalManagementSystem.security.JwtUtil;
import com.guvi.hospitalManagementSystem.service.AuthService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
@AllArgsConstructor
public class AuthServiceImpl implements AuthService {

    @Autowired
    UserRepo userRepo;
    @Autowired
    RoleRepo roleRepo;

    private PasswordEncoder passwordEncoder;
    private AuthenticationManager authenticationManager;
    private JwtUtil jwtUtil;

    @Override
    public String register(RegisterDto registerDto) throws UserApiException {
        if (userRepo.existsByUsername(registerDto.getUsername())) {
            throw new UserApiException(HttpStatus.BAD_REQUEST, "User name Already exists");
        }
        if (userRepo.existsByEmail(registerDto.getEmail())) {
            throw new UserApiException(HttpStatus.BAD_REQUEST, "Email Already exists");
        }
        User user = new User();
        user.setName(registerDto.getName());
        user.setUsername(registerDto.getUsername());
        user.setPassword(passwordEncoder.encode(registerDto.getPassword()));
        user.setEmail(registerDto.getEmail());
        Set<Role> roles = new HashSet<>();
        Role userrole = roleRepo.findByName("ROLE_USER");
        roles.add(userrole);
        user.setRoleSet(roles);
        userRepo.save(user);
        return "User Registered Successfully";
    }

    @Override
    public JwtAuthResponse login(LoginDto loginDto) {
        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(
                        loginDto.getUsername(),
                        loginDto.getPassword()
                ));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = jwtUtil.generate(loginDto.getUsername());
        Optional<User> user = userRepo
                .findByUsernameOrEmail(loginDto.getUsername(), loginDto.getUsername());
        String role = null;
        if (user.isPresent()) {
            User loggedInUser = user.get();
            List<Role> roleList = loggedInUser.getRoleSet().stream()
                    .filter(_role -> _role.getName()
                            .equalsIgnoreCase("ROLE_ADMIN"))
                    .toList();
            if (!roleList.isEmpty()) {
                Role dbrole = roleList.get(0);
                role = dbrole.getName();

            } else {
                Role userRole = loggedInUser.getRoleSet().stream().findFirst().get();
                role = userRole.getName();
            }
        }
        JwtAuthResponse jwtAuthResponse = new JwtAuthResponse();
        jwtAuthResponse.setRole(role);
        jwtAuthResponse.setAccessToken(token);
        return jwtAuthResponse;
    }
}
