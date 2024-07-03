package com.guvi.hospitalManagementSystem.service.impl;

import com.guvi.hospitalManagementSystem.dto.MedicationDto;
import com.guvi.hospitalManagementSystem.entity.Medication;
import com.guvi.hospitalManagementSystem.mapper.MedicationMapper;
import com.guvi.hospitalManagementSystem.repository.MedicationRepo;
import com.guvi.hospitalManagementSystem.service.MedicationService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class MedicationServiceImpl implements MedicationService {

    private MedicationRepo medicationRepo;

    @Override
    public MedicationDto saveMedication(MedicationDto medicationDto) {
        Medication medication = MedicationMapper.mapToMedication(medicationDto);
        Medication savedMedication = medicationRepo.save(medication);

        return MedicationMapper.mapToMedicationDto(savedMedication);
    }

    @Override
    public List<MedicationDto> getAllMedications() {
        List<Medication> medicationList = medicationRepo.findAll();
        return medicationList.stream().map(MedicationMapper::mapToMedicationDto).collect(Collectors.toList());
    }

    @Override
    public List<MedicationDto> findByPatientName(String name) {
        List<Medication> medication = medicationRepo.findByPatientName(name);
        return medication.stream().map(MedicationMapper::mapToMedicationDto).collect(Collectors.toList());
    }
}
