package com.guvi.onlineBusTicketBooking.services.impl;

import com.guvi.onlineBusTicketBooking.dto.JwtAuthResponse;
import com.guvi.onlineBusTicketBooking.dto.LoginDto;
import com.guvi.onlineBusTicketBooking.dto.RegisterDto;
import com.guvi.onlineBusTicketBooking.entities.Role;
import com.guvi.onlineBusTicketBooking.entities.UserSecurity;
import com.guvi.onlineBusTicketBooking.exception.UserApiException;
import com.guvi.onlineBusTicketBooking.repos.RoleSecurityRepo;
import com.guvi.onlineBusTicketBooking.repos.UserSecurityRepo;
import com.guvi.onlineBusTicketBooking.security.JwtUtil;
import com.guvi.onlineBusTicketBooking.services.AuthService;
import lombok.AllArgsConstructor;
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
    UserSecurityRepo userSecurityRepo;
    RoleSecurityRepo roleSecurityRepo;
    private PasswordEncoder passwordEncoder;
    private AuthenticationManager authenticationManager;
    private JwtUtil jwtUtil;

    @Override
    public String register(RegisterDto registerDto) throws UserApiException {
        if (userSecurityRepo.existsByUsername(registerDto.getUsername())) {
            throw new UserApiException(HttpStatus.BAD_REQUEST, "User name Already exists");
        }
        if (userSecurityRepo.existsByEmail(registerDto.getEmail())) {
            throw new UserApiException(HttpStatus.BAD_REQUEST, "Email Already exists");
        }
        UserSecurity userSecurity = new UserSecurity();
        userSecurity.setName(registerDto.getName());
        userSecurity.setUsername(registerDto.getUsername());
        userSecurity.setPassword(passwordEncoder.encode(registerDto.getPassword()));
        userSecurity.setEmail(registerDto.getEmail());
        Set<Role> roles = new HashSet<>();
        Role userrole = roleSecurityRepo.findByName("ROLE_USER");
        roles.add(userrole);
        userSecurity.setRoleSet(roles);
        userSecurityRepo.save(userSecurity);
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
        Optional<UserSecurity> user = userSecurityRepo
                .findByUsernameOrEmail(loginDto.getUsername(), loginDto.getUsername());
        String role = null;
        if (user.isPresent()) {
            UserSecurity loggedInUser = user.get();
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
