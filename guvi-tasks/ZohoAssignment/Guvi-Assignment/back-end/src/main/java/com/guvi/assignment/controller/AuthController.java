package com.guvi.assignment.controller;


import com.guvi.assignment.dto.JwtAuthResponse;
import com.guvi.assignment.dto.LoginDto;
import com.guvi.assignment.dto.RegisterDto;
import com.guvi.assignment.exception.UserApiException;
import com.guvi.assignment.service.AuthService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
@CrossOrigin("*")
@RequestMapping("api/auth")
public class AuthController {

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
