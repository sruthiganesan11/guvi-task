package com.guvi.onlineBusTicketBooking.services.impl;

import com.guvi.onlineBusTicketBooking.entities.UserSecurity;
import com.guvi.onlineBusTicketBooking.exception.ResourceNotFoundNameException;
import com.guvi.onlineBusTicketBooking.repos.UserSecurityRepo;
import com.guvi.onlineBusTicketBooking.services.UserSecurityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserSecurityService {

    @Autowired
    UserSecurityRepo userSecurityRepo;
    @Autowired
    PasswordEncoder passwordEncoder;

    @Override
    public UserSecurity getUser(String name) {
        UserSecurity userSecurity = userSecurityRepo.findByUsername(name)
                .orElseThrow(() -> new ResourceNotFoundNameException("User", "name", name));
        ;
        return userSecurity;
    }

    @Override
    public boolean oldPasswordIsValid(UserSecurity userSecurity, String oldPassword) {
        return passwordEncoder.matches(oldPassword, userSecurity.getPassword());
    }

    @Override
    public void changePassword(UserSecurity userSecurity, String newPassword) {
        userSecurity.setPassword(passwordEncoder.encode(newPassword));
        userSecurityRepo.save(userSecurity);
    }
}
