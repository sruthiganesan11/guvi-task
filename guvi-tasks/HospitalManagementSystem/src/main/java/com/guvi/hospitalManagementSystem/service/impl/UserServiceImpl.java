package com.guvi.hospitalManagementSystem.service.impl;

import com.guvi.hospitalManagementSystem.entity.User;
import com.guvi.hospitalManagementSystem.exception.ResourceNotFoundNameException;
import com.guvi.hospitalManagementSystem.repository.UserRepo;
import com.guvi.hospitalManagementSystem.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepo userRepo;
    @Autowired
    PasswordEncoder passwordEncoder;

    @Override
    public User getUser(String name) {
        User user = userRepo.findByUsername(name)
                .orElseThrow(() -> new ResourceNotFoundNameException("User", "name", name));
        ;
        return user;
    }

    @Override
    public boolean oldPasswordIsValid(User user, String oldPassword) {
        return passwordEncoder.matches(oldPassword, user.getPassword());
    }

    @Override
    public void changePassword(User user, String newPassword) {
        user.setPassword(passwordEncoder.encode(newPassword));
        userRepo.save(user);
    }
}
