package com.guvi.hospitalManagementSystem.service;

import com.guvi.hospitalManagementSystem.dto.JwtAuthResponse;
import com.guvi.hospitalManagementSystem.dto.LoginDto;
import com.guvi.hospitalManagementSystem.dto.RegisterDto;
import com.guvi.hospitalManagementSystem.exception.UserApiException;

public interface AuthService {

    String register(RegisterDto registerDto) throws UserApiException;
    JwtAuthResponse login(LoginDto loginDto);
}
