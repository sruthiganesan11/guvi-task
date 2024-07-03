package com.guvi.onlineBusTicketBooking.services;

import com.guvi.onlineBusTicketBooking.dto.JwtAuthResponse;
import com.guvi.onlineBusTicketBooking.dto.LoginDto;
import com.guvi.onlineBusTicketBooking.dto.RegisterDto;
import com.guvi.onlineBusTicketBooking.exception.UserApiException;

public interface AuthService {
    String register(RegisterDto registerDto) throws UserApiException;
    JwtAuthResponse login(LoginDto loginDto);
}
