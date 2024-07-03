package com.guvi.hospitalManagementSystem.service;

import com.guvi.hospitalManagementSystem.dto.DoctorDto;

import java.util.List;

public interface DoctorService {

    DoctorDto saveDoctor(DoctorDto doctorDto);

    DoctorDto getDoctorById(Long doctorId);

    List<DoctorDto> getAllDoctors();

    DoctorDto updateDoctor(Long doctorId, DoctorDto updatedDoctor);

    void deleteDoctor(Long doctorId);
}
