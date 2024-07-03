package com.guvi.hospitalManagementSystem.repoTest;

import com.guvi.hospitalManagementSystem.entity.Doctor;
import com.guvi.hospitalManagementSystem.repository.DoctorRepo;
import jakarta.persistence.Column;
import org.junit.jupiter.api.BeforeEach;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
public class DoctorRepoTest {

    @Autowired
    private DoctorRepo doctorRepo;
    private Doctor doctor;

    @BeforeEach
    public void setUp() {
        doctor = Doctor.builder()
                .doctorName("Sruthi")
                .specialist("Cardiologist")
                .qualification("MBBS")
                .experience(10)
                .age(35)
                .contactNo(7654321789L)
                .build();


    }

    @DisplayName("Test whether the passenger get saved in DB")
    @Test
    public void givenEmployee_whenSave_thenReturnSavedEmployee() {
        Doctor savedDoctor = doctorRepo.save(doctor);
        assertThat(savedDoctor).isNotNull();
        assertThat(savedDoctor.getId()).isGreaterThan(0);


    }

    @Test
    public void givenDoctorList_whenFindAll_thenDoctorList() {
        Doctor employee1 = Doctor.builder()
                .doctorName("Sruthi")
                .specialist("Cardiologist")
                .qualification("MBBS")
                .experience(10)
                .age(35)
                .contactNo(7654321789L)
                .build();


        doctorRepo.save(doctor);
        doctorRepo.save(employee1);

        List<Doctor> passengerList = doctorRepo.findAll();
        assertThat(passengerList).isNotNull();
        assertThat(passengerList.size()).isEqualTo(2);

    }

    @Test
    public void givenDoctor_whenDoctor_thenReturnDoctor() {
        doctorRepo.save(doctor);
        Optional<Doctor> passengerDb = Optional.of(doctorRepo.findById(doctor.getId()).get());
        assertThat(passengerDb).isNotNull();

    }


    @Test
    public void givenDoctor_whenDelete_thenRemoveDoctor() {
        doctorRepo.save(doctor);
        doctorRepo.deleteById(doctor.getId());
        Optional<Doctor> passenger1 = doctorRepo.findById(doctor.getId());
        assertThat(passenger1).isEmpty();

    }
}
