package com.guvi.hospitalManagementSystem.controller;

import com.guvi.hospitalManagementSystem.dto.PatientDto;
import com.guvi.hospitalManagementSystem.service.PatientService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin("*")
@RequestMapping("/api/patient")
public class PatientController {

    @Autowired
    private PatientService patientService;


    @PostMapping
    public ResponseEntity<PatientDto> savePatient(@RequestBody PatientDto patientDto) {
        PatientDto savedPatient = patientService.savePatient(patientDto);
        return new ResponseEntity<>(savedPatient, HttpStatus.CREATED);
    }

    //To get Single Patience Based on id
    @GetMapping("/{id}")
    public ResponseEntity<PatientDto> getPatientById(@PathVariable("id") Long id) {

        PatientDto patientDto = patientService.getPatientById(id);
        return ResponseEntity.ok(patientDto);
    }

    //To get All the Patience
    @GetMapping
    public ResponseEntity<List<PatientDto>> getAllPatients() {
        List<PatientDto> allPatient = patientService.getAllPatients();
        return ResponseEntity.ok(allPatient);
    }

    //To Change Patient detail based on id
    @PutMapping("/{id}")
    public ResponseEntity<PatientDto> updatePatient(@PathVariable("id") Long id,
                                                    @RequestBody PatientDto updatePatient) {
        PatientDto patientDto = patientService.updatePatient(id, updatePatient);
        return ResponseEntity.ok(patientDto);
    }

    //To delete Patient based on id
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deletePatient(@PathVariable("id") Long patientId) {
        patientService.deletePatient(patientId);
        return ResponseEntity.ok("Patient deleted Successfully!");
    }


}
