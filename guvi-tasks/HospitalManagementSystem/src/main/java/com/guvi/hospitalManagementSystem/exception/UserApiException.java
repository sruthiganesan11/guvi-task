package com.guvi.hospitalManagementSystem.exception;

import lombok.*;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
public class UserApiException extends Throwable {

    private HttpStatus httpStatus;
    private String message;
}

