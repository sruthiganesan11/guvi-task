package com.guvi.hospitalManagementSystem.security;

import com.guvi.hospitalManagementSystem.entity.User;
import com.guvi.hospitalManagementSystem.repository.UserRepo;
import lombok.AllArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class CustomUserDetailService implements UserDetailsService {

    private UserRepo userRepo;

    @Override
    public UserDetails loadUserByUsername(String usernameEmail) throws UsernameNotFoundException {
        User user = userRepo.findByUsernameOrEmail(usernameEmail, usernameEmail)
                .orElseThrow(() -> new UsernameNotFoundException("User does not exist"));

        Set<GrantedAuthority> authority = user.getRoleSet().stream()
                .map(role -> new SimpleGrantedAuthority(role.getName()))
                .collect(Collectors.toSet());

        return new org.springframework.security.core.userdetails.User(
                usernameEmail, user.getPassword(), authority
        );
    }
}
