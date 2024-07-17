package com.guvi.assignment.service;

import com.guvi.assignment.entities.UserSecurity;

public interface UserSecurityService {
    UserSecurity getUser(String name);

    boolean oldPasswordIsValid(UserSecurity userSecurity, String oldPassword);

    void changePassword(UserSecurity userSecurity, String newPassword);
}
