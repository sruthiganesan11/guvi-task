package com.guvi.empManagementApp.service;

import com.guvi.empManagementApp.dto.JwtAuthResponse;
import com.guvi.empManagementApp.dto.LoginRequestDto;
import com.guvi.empManagementApp.dto.RegisterDto;

public interface AuthService {
    String register(RegisterDto registerDto);

    JwtAuthResponse login(LoginRequestDto loginRequestDto);
}
