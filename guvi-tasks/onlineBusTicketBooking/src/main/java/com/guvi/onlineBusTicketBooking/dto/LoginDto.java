package com.guvi.onlineBusTicketBooking.dto;

import lombok.*;

//For First Login Page
@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginDto {
    private String username;
    private String password;
}
