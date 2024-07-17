package com.guvi.assignment.service;

import com.guvi.assignment.dto.JwtAuthResponse;
import com.guvi.assignment.dto.LoginDto;
import com.guvi.assignment.dto.RegisterDto;
import com.guvi.assignment.exception.UserApiException;

public interface AuthService {
    String register(RegisterDto registerDto) throws UserApiException;
    JwtAuthResponse login(LoginDto loginDto);
}
