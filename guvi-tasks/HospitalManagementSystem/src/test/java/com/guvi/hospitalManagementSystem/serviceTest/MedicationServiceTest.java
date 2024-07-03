package com.guvi.hospitalManagementSystem.serviceTest;

import com.guvi.hospitalManagementSystem.dto.MedicationDto;
import com.guvi.hospitalManagementSystem.entity.Medication;
import com.guvi.hospitalManagementSystem.repository.MedicationRepo;
import com.guvi.hospitalManagementSystem.service.impl.MedicationServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDate;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
public class MedicationServiceTest {

    @Mock
    private MedicationRepo medicationRepo;
    @InjectMocks
    private MedicationServiceImpl medicationService;

    private Medication medication;
    @BeforeEach
    public void setUp(){
        medication=medication.builder()
                .patientName("Ganesan")
                .appointmentDate(LocalDate.parse("2024-09-06"))
                .medicineName("Dolo")
                .morning(1)
                .afternoon(1)
                .night(1)
                .build();


    }
    @Test
    public void givenEmployeeList_whenGetAllEmployees_thenReturnEmployeeList(){
        Medication employee1=Medication.builder()
                .patientName("kissan")
                .appointmentDate(LocalDate.parse("2024-09-06"))
                .medicineName("Dolo")
                .morning(1)
                .afternoon(1)
                .night(1)
                .build();

        given(medicationRepo.findAll()).willReturn(List.of(medication,employee1));
        List<MedicationDto> employeeDtos=medicationService.getAllMedications();
        assertThat(employeeDtos).isNotNull();
        assertThat(employeeDtos.size()).isEqualTo(2);

    }

}
