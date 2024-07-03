package com.guvi.hospitalManagementSystem.mapper;

import com.guvi.hospitalManagementSystem.dto.DoctorDto;
import com.guvi.hospitalManagementSystem.entity.Doctor;

public class DoctorMapper {
    public static DoctorDto mapToDoctorDto(Doctor doctor) {
        return new DoctorDto(

                doctor.getId(),
                doctor.getDoctorName(),
                doctor.getSpecialist(),
                doctor.getQualification(),
                doctor.getExperience(),
                doctor.getAge(),
                doctor.getContactNo()
        );
    }

    public static Doctor mapToDoctor(DoctorDto doctorDto) {
        return new Doctor(
                doctorDto.getId(),
                doctorDto.getDoctorName(),
                doctorDto.getSpecialist(),
                doctorDto.getQualification(),
                doctorDto.getExperience(),
                doctorDto.getAge(),
                doctorDto.getContactNo()
        );
    }
}