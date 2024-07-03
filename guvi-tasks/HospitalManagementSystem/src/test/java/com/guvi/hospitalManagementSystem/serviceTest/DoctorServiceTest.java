package com.guvi.hospitalManagementSystem.serviceTest;

import com.guvi.hospitalManagementSystem.dto.DoctorDto;
import com.guvi.hospitalManagementSystem.entity.Doctor;
import com.guvi.hospitalManagementSystem.repository.DoctorRepo;
import com.guvi.hospitalManagementSystem.service.impl.DoctorServiceImpl;
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
public class DoctorServiceTest {

    @Mock
    private DoctorRepo doctorRepo;
    @InjectMocks
    private DoctorServiceImpl doctorService;

    private Doctor doctor;
    @BeforeEach
    public void setUp(){
        doctor=doctor.builder()
                .doctorName("Sruthi")
                .specialist("Cardiologist")
                .experience(10)
                .age(35)
                .contactNo(9302938458L)
                .build();

    }
    @Test
    public void givenEmployeeList_whenGetAllEmployees_thenReturnEmployeeList(){
        Doctor employee1=Doctor.builder()
                .doctorName("KUMAR")
                .specialist("Cardiologist")
                .experience(10)
                .age(35)
                .contactNo(9302938458L)
                .build();



        given(doctorRepo.findAll()).willReturn(List.of(doctor,employee1));
        List<DoctorDto> employeeDtos=doctorService.getAllDoctors();
        assertThat(employeeDtos).isNotNull();
        assertThat(employeeDtos.size()).isEqualTo(2);

    }
    @Test
    public void givenEmployee_whenGetEmployeesById_thenReturnEmployee(){

        given(doctorRepo.findById(doctor.getId())).willReturn(Optional.of(doctor));
        DoctorDto buss=doctorService.getDoctorById(doctor.getId());
        assertThat(buss).isNotNull();


    }
}
