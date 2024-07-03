package com.guvi.hospitalManagementSystem.service.impl;

import com.guvi.hospitalManagementSystem.dto.AppointmentDto;
import com.guvi.hospitalManagementSystem.entity.Appointment;
import com.guvi.hospitalManagementSystem.entity.Patient;
import com.guvi.hospitalManagementSystem.exception.ResourceNotFoundException;
import com.guvi.hospitalManagementSystem.mapper.AppointmentMapper;
import com.guvi.hospitalManagementSystem.repository.AppointmentRepo;
import com.guvi.hospitalManagementSystem.service.AppointmentService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
@NoArgsConstructor
public class AppointmentServiceImpl implements AppointmentService {

    @Autowired
    private AppointmentRepo appointmentRepo;

    @Override
    public AppointmentDto saveAppointment(AppointmentDto appointmentDto) {
        Appointment appointment = AppointmentMapper.mapToAppointment(appointmentDto);
        Appointment savedAppointment = appointmentRepo.save(appointment);

        return AppointmentMapper.mapToAppointmentDto(savedAppointment);

    }


    @Override
    public AppointmentDto getAppointmentById(Long appointmentId) {
        Appointment appointment = appointmentRepo.findById(appointmentId)
                .orElseThrow(() -> new ResourceNotFoundException
                        ("Appointment", "id", appointmentId));
        return AppointmentMapper.mapToAppointmentDto(appointment);
    }

    @Override
    public List<AppointmentDto> getAllAppointments() {
        List<Appointment> appointments = appointmentRepo.findAll();
        return appointments.stream()
                .map(AppointmentMapper::mapToAppointmentDto)
                .collect(Collectors.toList());
    }

    @Override
    public AppointmentDto getByPatientId(Long id) {
        Appointment appointment = appointmentRepo.findByPatient_id(id);
        return AppointmentMapper.mapToAppointmentDto(appointment);
    }


    @Override
    public void deleteAppointment(Long appointmentId) {
        Appointment appointment = appointmentRepo.findById(appointmentId)
                .orElseThrow(() -> new ResourceNotFoundException
                        ("Appointment", "id", appointmentId));
        appointmentRepo.deleteById(appointmentId);
    }

    @Override
    public AppointmentDto cancelAppointment(Long appointmentId) {
        Appointment appointment = appointmentRepo.findById(appointmentId)
                .get();
        if (!appointment.getCancelStatus()) {
            appointment.setCancelStatus(Boolean.TRUE);
        }
        Appointment updatedAppointment = appointmentRepo.save(appointment);
        return AppointmentMapper.mapToAppointmentDto(updatedAppointment);
    }
}
