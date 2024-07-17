package com.guvi.assignment.dto;

import lombok.*;

//For First Login Page
@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginDto {
    private String username;
    private String password;
}
