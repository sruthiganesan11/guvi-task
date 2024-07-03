package com.guvi.hospitalManagementSystem.controller;

import com.guvi.hospitalManagementSystem.dto.AppointmentDto;
import com.guvi.hospitalManagementSystem.dto.DoctorDto;
import com.guvi.hospitalManagementSystem.dto.PatientDto;
import com.guvi.hospitalManagementSystem.repository.AppointmentRepo;
import com.guvi.hospitalManagementSystem.service.AppointmentService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin("*")
//End Point for doctor
@RequestMapping("/api/appointment")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;
    @Autowired
    private AppointmentRepo appointmentRepo;

    //Post Mapping is to call post endpoints that saves the request body
    @PostMapping
    public ResponseEntity<AppointmentDto> saveAppointment(@RequestBody AppointmentDto appointmentDto) {
        AppointmentDto savedAppointment = appointmentService.saveAppointment(appointmentDto);
        return new ResponseEntity<>(savedAppointment, HttpStatus.CREATED);
    }

    //Getmapping is to get  the appointment details based on id
    @GetMapping("/appointment/{id}")
    public ResponseEntity<AppointmentDto> getByAppointmentId(@PathVariable("id") Long id) {
        AppointmentDto appointmentDto = appointmentService.getAppointmentById(id);
        return ResponseEntity.ok(appointmentDto);
    }

    //Getmapping is to get all the appointment details
    @GetMapping
    public ResponseEntity<List<AppointmentDto>> getAllAppointments() {
        List<AppointmentDto> allAppointments = appointmentService.getAllAppointments();
        return ResponseEntity.ok(allAppointments);

    }

    //Getmapping is to get  the appointment details based on id
    @GetMapping("/patient/{id}")
    public ResponseEntity<AppointmentDto> getByPatientId(@PathVariable("id") Long id) {
        AppointmentDto appointmentDto = appointmentService.getByPatientId(id);
        return ResponseEntity.ok(appointmentDto);
    }

    //Putmapping is to update the appointment details when id is given
    @PutMapping("cancelAppointment/{id}")
    public ResponseEntity<AppointmentDto> cancelTicket(@PathVariable("id") Long id) {
        AppointmentDto updatedAppointment = appointmentService.cancelAppointment(id);
        return ResponseEntity.ok(updatedAppointment);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteAppointment(@PathVariable("id") Long appointmentId) {
        appointmentService.deleteAppointment(appointmentId);
        return ResponseEntity.ok("Appointment deleted Successfully");
    }

}
