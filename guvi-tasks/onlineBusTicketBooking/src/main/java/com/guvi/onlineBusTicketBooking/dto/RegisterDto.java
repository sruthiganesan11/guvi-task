package com.guvi.onlineBusTicketBooking.dto;

import jakarta.validation.constraints.NotEmpty;
import lombok.*;

//For Registration Form
@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegisterDto {
    @NotEmpty
    private String name;
    @NotEmpty
    private String username;
    @NotEmpty
    private String password;
    @NotEmpty
    private String email;
}
