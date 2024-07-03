package com.guvi.empManagementApp.exception;

import lombok.*;
import org.springframework.http.HttpStatus;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserApiException extends RuntimeException {
    private HttpStatus status;
    private String message;

}