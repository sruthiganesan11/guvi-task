package com.guvi.onlineBusTicketBooking.services;

import com.guvi.onlineBusTicketBooking.entities.UserSecurity;

public interface UserSecurityService {
    UserSecurity getUser(String name);

    boolean oldPasswordIsValid(UserSecurity userSecurity, String oldPassword);

    void changePassword(UserSecurity userSecurity, String newPassword);
}
