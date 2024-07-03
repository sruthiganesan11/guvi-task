package com.guvi.hospitalManagementSystem.serviceTest;

import com.guvi.hospitalManagementSystem.dto.PatientDto;
import com.guvi.hospitalManagementSystem.entity.Patient;
import com.guvi.hospitalManagementSystem.repository.PatientRepo;
import com.guvi.hospitalManagementSystem.service.impl.PatientServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.BDDMockito.given;


@ExtendWith(MockitoExtension.class)
public class PatientServiceTest {

    @Mock
    private PatientRepo patientRepo;
    @InjectMocks
    private PatientServiceImpl patientService;

    private Patient patient;

    @BeforeEach
    public void setUp() {
        patient = patient.builder()
                .patientName("Sowmya")
                .email("sowmya@gmail.com")
                .problem("stomachache")
                .contactNo("9302938458")
                .age(45)
                .build();
    }

    @Test
    public void givenEmployeeList_whenGetAllEmployees_thenReturnEmployeeList() {
        Patient employee1 = Patient.builder()
                .patientName("Sowmya")
                .email("sowmya@gmail.com")
                .problem("stomachache")
                .contactNo("9302938458")
                .age(45)
                .build();


        given(patientRepo.findAll()).willReturn(List.of(patient,employee1));
        List<PatientDto> employeeDto = patientService.getAllPatients();
        assertThat(employeeDto).isNotNull();
        assertThat(employeeDto.size()).isEqualTo(2);

    }

    @Test
    public void givenEmployee_whenGetEmployeesById_thenReturnEmployee() {

        given(patientRepo.findById(patient.getId())).willReturn(Optional.of(patient));
        PatientDto buss = patientService.getPatientById(patient.getId());
        assertThat(buss).isNotNull();
    }
}
