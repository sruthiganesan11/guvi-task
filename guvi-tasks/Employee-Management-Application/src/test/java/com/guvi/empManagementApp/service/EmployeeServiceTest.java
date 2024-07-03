package com.guvi.empManagementApp.service;

import com.guvi.empManagementApp.entities.Employee;
import com.guvi.empManagementApp.repository.EmployeeRepo;
import com.guvi.empManagementApp.service.impl.EmployeeServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.BDDMockito.given;
import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;
import java.util.Optional;


@ExtendWith(MockitoExtension.class)
public class EmployeeServiceTest {

    private Employee employeeDto;
    @InjectMocks
    private EmployeeServiceImpl employeeServiceImpl;

    @Mock
    private EmployeeRepo employeeRepo;

    private EmployeeService employeeService;


    @BeforeEach
    public void setup() {
        employeeDto = Employee.builder()
                .firstName("john")
                .lastName("doe")
                .email("john@gmail.com")
                .build();
    }

    @Test
    public void givenEmployeeList_whenGetAllEmployee_thenReturnEmployeeList() {
        Employee employee1 = Employee.builder()
                .firstName("peter")
                .lastName("doe")
                .email("peter@gmail.com")
                .build();

        given(employeeRepo.findAll()).willReturn(List.of(employeeDto, employee1));
        List<com.guvi.empManagementApp.dto.EmployeeDto> employee = employeeServiceImpl.getAllEmployee();
        assertThat(employee).isNotNull();
        assertThat(employee.size()).isEqualTo(2);

    }

    @Test
    public void givenEmployee_whenGetEmployeesById_thenReturnEmployee() {

        given(employeeRepo.findById(employeeDto.getId())).willReturn(Optional.of(employeeDto));
        com.guvi.empManagementApp.dto.EmployeeDto employees = employeeServiceImpl.getEmployeeById(employeeDto.getId());
        assertThat(employees).isNotNull();

    }



}
