package com.guvi.assignment.dto;


import lombok.*;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {

    private int id;

    private String name;

    private String gender;

    private int age;

    private String mobile;


    private LocalDate dob;
}
