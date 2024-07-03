package com.guvi.hospitalManagementSystem.service;

import com.guvi.hospitalManagementSystem.dto.AppointmentDto;

import java.util.List;
public interface AppointmentService {

    AppointmentDto saveAppointment(AppointmentDto appointmentDto);

    AppointmentDto getAppointmentById(Long appointmentId);

    List<AppointmentDto> getAllAppointments();
    AppointmentDto getByPatientId(Long id);

    void deleteAppointment(Long appointmentId);

    AppointmentDto cancelAppointment(Long appointmentId);
}
