package com.guvi.hospitalManagementSystem.dto;

import lombok.*;

//To Send JWTAuthResponse token and Role
@Data
@AllArgsConstructor
@NoArgsConstructor
public class JwtAuthResponse {
    private String accessToken;
    private String tokenType = "Bearer";
    private String role;
}
