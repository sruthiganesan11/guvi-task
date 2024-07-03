package com.guvi.hospitalManagementSystem.repoTest;

import com.guvi.hospitalManagementSystem.entity.Patient;
import com.guvi.hospitalManagementSystem.mapper.PatientMapper;
import com.guvi.hospitalManagementSystem.repository.PatientRepo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@DataJpaTest
public class PatientTestRepo {

    @Autowired
    private PatientRepo patientRepo;

    private Patient patient;

    @BeforeEach
    public void setup() {

        patient = Patient.builder()
                .patientName("john")
                .email("john@gmail.com")
                .contactNo("987654321L")
                .problem("fever")
                .age(28)
                .build();

    }


    @DisplayName("Test whether the patient get saved in DB")
    @Test
    public void givenPatient_whenSave_thenReturnSavedPatient() {
        Patient savedDoctor = patientRepo.save(patient);
        assertThat(savedDoctor).isNotNull();
        assertThat(savedDoctor.getId()).isGreaterThan(0);

    }

    @Test
    public void givenPatientList_whenFindAll_thenPatientList() {
        Patient patient1 = Patient.builder()
                .patientName("sruthi")
                .email("sruthi@gmail.com")
                .problem("stomachache")
                .contactNo("8947484345")
                .age(45)
                .build();

        patientRepo.save(patient);
        patientRepo.save(patient1);

        List<Patient> patientList = patientRepo.findAll();
        assertThat(patientList).isNotNull();
        assertThat(patientList.size()).isEqualTo(2);

    }

    @Test
    public void givenPatientEmail_whenFindByEmail_thenReturnPatient() {
        patientRepo.save(patient);
        Optional<Patient> patientOptional = Optional.of(patientRepo.findById(patient.getId()).get());
        assertThat(patientOptional).isNotNull();

    }

    @Test
    public void givenPatient_whenUpdatePatient_thenReturnUpdatedPatient() {
        patientRepo.save(patient);
        Patient savedPatient = patientRepo.findById(patient.getId()).get();
        savedPatient.setEmail("kumar@gmail.com");
        Patient updatedPatient = patientRepo.save(savedPatient);
        assertThat(updatedPatient.getEmail()).isEqualTo("kumar@gmail.com");
    }

    @Test
    public void givenPatient_whenDelete_thenRemovePatient() {
        patientRepo.save(patient);
        patientRepo.deleteById(patient.getId());
        Optional<Patient> patient2 = patientRepo.findById(patient.getId());
        assertThat(patient2).isEmpty();

    }
}
