package com.guvi.hospitalManagementSystem.mapper;

import com.guvi.hospitalManagementSystem.dto.AppointmentDto;
import com.guvi.hospitalManagementSystem.entity.Appointment;

public class AppointmentMapper {
    public static AppointmentDto mapToAppointmentDto(Appointment appointment) {
        return new AppointmentDto(

                appointment.getId(),
                appointment.getAppointmentId(),
                appointment.getDoctorName(),
                appointment.getPrescription(),
                appointment.getPatient(),
                appointment.getBookingDate(),
                appointment.getFee(),
                appointment.getCancelStatus()
        );
    }

    public static Appointment mapToAppointment(AppointmentDto AppointmentDto) {
        return new Appointment(
                AppointmentDto.getId(),
                AppointmentDto.getAppointmentId(),
                AppointmentDto.getDoctorName(),
                AppointmentDto.getPrescription(),
                AppointmentDto.getPatient(),
                AppointmentDto.getBookingDate(),
                AppointmentDto.getFee(),
                AppointmentDto.getCancelStatus()
        );
    }
}
