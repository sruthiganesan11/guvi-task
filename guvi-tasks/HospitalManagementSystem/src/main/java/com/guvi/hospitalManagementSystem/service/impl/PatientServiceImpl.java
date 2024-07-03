package com.guvi.hospitalManagementSystem.service.impl;

import com.guvi.hospitalManagementSystem.dto.PatientDto;
import com.guvi.hospitalManagementSystem.entity.Patient;
import com.guvi.hospitalManagementSystem.exception.ResourceNotFoundException;
import com.guvi.hospitalManagementSystem.mapper.PatientMapper;
import com.guvi.hospitalManagementSystem.repository.PatientRepo;
import com.guvi.hospitalManagementSystem.service.PatientService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class PatientServiceImpl implements PatientService {

    private PatientRepo patientRepo;

    @Override
    public PatientDto savePatient(PatientDto patientDto) {
        Patient patient = PatientMapper.mapToPatient(patientDto);
        Patient savedPatient = patientRepo.save(patient);

        return PatientMapper.mapToPatientDto(savedPatient);
    }

    @Override
    public PatientDto getPatientById(Long patientId) {
        Patient patient = patientRepo.findById(patientId)
                .orElseThrow(() -> new ResourceNotFoundException
                        ("Patient", "id", patientId));
        return PatientMapper.mapToPatientDto(patient);
    }

    @Override
    public List<PatientDto> getAllPatients() {
        List<Patient> patients = patientRepo.findAll();
        return patients.stream().map(PatientMapper::mapToPatientDto).collect(Collectors.toList());
    }

    @Override
    public PatientDto updatePatient(Long patientId, PatientDto updatedPatient) {
        Patient patient = patientRepo.findById(patientId).get();

        patient.setPatientName(updatedPatient.getPatientName());
        patient.setContactNo(updatedPatient.getContactNo());
        patient.setEmail(updatedPatient.getEmail());
        patient.setAge(updatedPatient.getAge());
        patient.setProblem(updatedPatient.getProblem());

        Patient savedPatient = patientRepo.save(patient);
        return PatientMapper.mapToPatientDto(savedPatient);
    }

    @Override
    public void deletePatient(Long patientId) {
        Patient patient = patientRepo.findById(patientId)
                .orElseThrow(() -> new ResourceNotFoundException
                        ("Patient", "id", patientId));
        patientRepo.deleteById(patientId);
    }
}
