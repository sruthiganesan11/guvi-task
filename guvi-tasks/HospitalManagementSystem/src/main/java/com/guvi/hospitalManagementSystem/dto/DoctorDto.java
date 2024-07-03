package com.guvi.hospitalManagementSystem.dto;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DoctorDto {

    private Long id;

    private String doctorName;

    private String specialist;

    private String qualification;

    private int experience;

    private int age;

    private Long contactNo;
}
