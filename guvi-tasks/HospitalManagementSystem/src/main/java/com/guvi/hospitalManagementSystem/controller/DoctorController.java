package com.guvi.hospitalManagementSystem.controller;

import com.guvi.hospitalManagementSystem.dto.DoctorDto;
import com.guvi.hospitalManagementSystem.repository.DoctorRepo;
import com.guvi.hospitalManagementSystem.service.DoctorService;
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
@RequestMapping("/api/doctor")
public class DoctorController {

    @Autowired
    private DoctorService doctorService;
    @Autowired
    private DoctorRepo doctorRepo;

    //PostMapping is to add the new doctor details to database
    @PostMapping
    public ResponseEntity<DoctorDto> saveDoctor(@RequestBody DoctorDto doctorDto) {
        DoctorDto savedDoctor = doctorService.saveDoctor(doctorDto);
        return new ResponseEntity<>(savedDoctor, HttpStatus.CREATED);
    }

    //GetMapping is to get all the doctor details
    @GetMapping
    public ResponseEntity<List<DoctorDto>> getAllDoctors() {
        List<DoctorDto> allDoctor = doctorService.getAllDoctors();
        return ResponseEntity.ok(allDoctor);
    }


    @GetMapping("/{doctorId}") //get doctor by id
    public ResponseEntity<DoctorDto> getDoctorId(@PathVariable("doctorId") Long doctorId) {
        DoctorDto doctor = doctorService.getDoctorById(doctorId);
        return ResponseEntity.ok(doctor);
    }

    @PutMapping("/{id}")//update doctor details by id
    public ResponseEntity<DoctorDto> updateDoctor(@PathVariable("id") Long id
            , @RequestBody DoctorDto updatedDoctor) {
        DoctorDto updatedDoctorObj = doctorService.updateDoctor(id, updatedDoctor);
        return ResponseEntity.ok(updatedDoctorObj);
    }

    @DeleteMapping("/{id}") //delete doctor by id
    public ResponseEntity<String> deleteDoctor(@PathVariable("id") Long doctorId) {
        doctorService.deleteDoctor(doctorId);
        return ResponseEntity.ok("Doctor is deleted");
    }
}
