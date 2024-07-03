package com.guvi.hospitalManagementSystem.dto;

import com.guvi.hospitalManagementSystem.entity.Patient;
import lombok.*;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AppointmentDto {
    private Long Id;

    private String appointmentId;

    private String doctorName;

    private String prescription;

    private Patient patient;

    private LocalDate bookingDate;

    private int fee;

    private Boolean cancelStatus;
}
