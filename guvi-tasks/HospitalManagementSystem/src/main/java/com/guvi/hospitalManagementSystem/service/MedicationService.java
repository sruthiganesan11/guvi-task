package com.guvi.hospitalManagementSystem.service;

import com.guvi.hospitalManagementSystem.dto.MedicationDto;

import java.util.List;

public interface MedicationService {

    MedicationDto saveMedication(MedicationDto medicationDto);

    List<MedicationDto> getAllMedications();
    List<MedicationDto> findByPatientName(String name);
}
