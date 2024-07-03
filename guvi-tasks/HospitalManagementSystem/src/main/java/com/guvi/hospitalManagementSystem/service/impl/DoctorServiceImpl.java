package com.guvi.hospitalManagementSystem.service.impl;

import com.guvi.hospitalManagementSystem.dto.DoctorDto;
import com.guvi.hospitalManagementSystem.entity.Doctor;
import com.guvi.hospitalManagementSystem.exception.ResourceNotFoundException;
import com.guvi.hospitalManagementSystem.mapper.DoctorMapper;
import com.guvi.hospitalManagementSystem.repository.DoctorRepo;
import com.guvi.hospitalManagementSystem.service.DoctorService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
public class DoctorServiceImpl implements DoctorService {

    private DoctorRepo doctorRepo;


    @Override
    public DoctorDto saveDoctor(DoctorDto doctorDto) {
        Doctor doctor = DoctorMapper.mapToDoctor(doctorDto);
        Doctor savedDoctor = doctorRepo.save(doctor);

        return DoctorMapper.mapToDoctorDto(savedDoctor);
    }

    @Override
    public DoctorDto getDoctorById(Long doctorId) {
        Doctor doctor = doctorRepo.findById(doctorId)
                .orElseThrow(() -> new ResourceNotFoundException
                        ("Doctor", "id", doctorId));

        return DoctorMapper.mapToDoctorDto(doctor);
    }

    @Override
    public List<DoctorDto> getAllDoctors() {
        List<Doctor> doctorList = doctorRepo.findAll();
        return doctorList.stream()
                .map(DoctorMapper::mapToDoctorDto).collect(Collectors.toList());
    }

    @Override
    public DoctorDto updateDoctor(Long doctorId, DoctorDto updatedDoctor) {
        Doctor doctor = doctorRepo.findById(doctorId).get();

        doctor.setDoctorName(updatedDoctor.getDoctorName());
        doctor.setSpecialist(updatedDoctor.getSpecialist());
        doctor.setQualification(updatedDoctor.getQualification());
        doctor.setExperience(updatedDoctor.getExperience());
        doctor.setAge(updatedDoctor.getAge());
        doctor.setContactNo(updatedDoctor.getContactNo());

        Doctor updatedDoctorObj = doctorRepo.save(doctor);
        return DoctorMapper.mapToDoctorDto(updatedDoctorObj);
    }

    @Override
    public void deleteDoctor(Long doctorId) {
        Doctor doctor = doctorRepo.findById(doctorId).get();
        doctorRepo.delete(doctor);
    }
}
