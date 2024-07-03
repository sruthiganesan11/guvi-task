package com.guvi.hospitalManagementSystem.controller;

import com.guvi.hospitalManagementSystem.dto.MedicationDto;
import com.guvi.hospitalManagementSystem.service.MedicationService;
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
//End Points to register Medication Detail
@RequestMapping("/api/medication")
public class MedicationController {

    @Autowired
    private MedicationService medicationService;

    @PostMapping
    public ResponseEntity<MedicationDto> saveMedication(@RequestBody MedicationDto medicationDto) {
        MedicationDto saveMedication = medicationService.saveMedication(medicationDto);
        return new ResponseEntity<>(saveMedication, HttpStatus.CREATED);
    }

    //Getmapping is to get all the medication details
    @GetMapping
    public ResponseEntity<List<MedicationDto>> getAllMedication() {
        List<MedicationDto> allMedications = medicationService.getAllMedications();
        return ResponseEntity.ok(allMedications);
    }

    //Getmapping is to get the medication details based on patients name
    @GetMapping("patient/{name}")
    public ResponseEntity<List<MedicationDto>> getPatientByName(@PathVariable String name) {
        List<MedicationDto> medicationDto = medicationService.findByPatientName(name);
        return ResponseEntity.ok(medicationDto);
    }
}
