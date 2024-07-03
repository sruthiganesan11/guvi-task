package com.guvi.hospitalManagementSystem.controller;

import com.guvi.hospitalManagementSystem.dto.JwtAuthResponse;
import com.guvi.hospitalManagementSystem.dto.LoginDto;
import com.guvi.hospitalManagementSystem.dto.RegisterDto;
import com.guvi.hospitalManagementSystem.exception.UserApiException;
import com.guvi.hospitalManagementSystem.service.AuthService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
@CrossOrigin("*")
@RequestMapping("api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    //End Points to register User
    @PostMapping("/register")
    public String register(@RequestBody RegisterDto registerDto) throws UserApiException {
        String registerMessage = authService.register(registerDto);
        return registerMessage;
    }

    //Login Controller to get Login detail and Process it
    @PostMapping("/login")
    public ResponseEntity<JwtAuthResponse> login(@RequestBody LoginDto loginDto) {
        JwtAuthResponse jwtAuthResponse = authService.login(loginDto);
        return new ResponseEntity<>(jwtAuthResponse, HttpStatus.OK);
    }
}

