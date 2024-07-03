package com.guvi.onlineBusTicketBooking.dto;

import lombok.*;

//For Change Password
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PasswordRequestUtil {
    private String username;
    private String oldPassword;
    private String newPassword;
}