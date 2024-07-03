package com.guvi.hospitalManagementSystem.service;

import com.guvi.hospitalManagementSystem.dto.PatientDto;

import java.util.List;

public interface PatientService {
    PatientDto savePatient(PatientDto patientDto);

    PatientDto getPatientById(Long patientId);

    List<PatientDto> getAllPatients();

    PatientDto updatePatient(Long patientId, PatientDto updatedPatient);

    void deletePatient(Long patientId);

}
