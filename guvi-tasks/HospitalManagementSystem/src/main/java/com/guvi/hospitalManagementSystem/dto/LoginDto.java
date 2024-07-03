package com.guvi.hospitalManagementSystem.dto;

import lombok.*;

//For First Login Page
@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginDto {
    private String username;
    private String password;
}
