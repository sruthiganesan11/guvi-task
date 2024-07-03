package com.guvi.hospitalManagementSystem.service;

import com.guvi.hospitalManagementSystem.entity.User;

public interface UserService {

    User getUser(String name);

    boolean oldPasswordIsValid(User user, String oldPassword);

    void changePassword(User user, String newPassword);
}
