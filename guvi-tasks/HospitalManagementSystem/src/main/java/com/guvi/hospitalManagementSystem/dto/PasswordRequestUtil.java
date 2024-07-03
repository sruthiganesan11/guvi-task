package com.guvi.hospitalManagementSystem.dto;

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