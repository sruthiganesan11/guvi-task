package com.guvi.empManagementApp.service.impl;


import com.guvi.empManagementApp.dto.EmployeeDto;
import com.guvi.empManagementApp.entities.Employee;
import com.guvi.empManagementApp.exception.EmailAlreadyExistException;
import com.guvi.empManagementApp.exception.ResourceNotFoundException;
import com.guvi.empManagementApp.mapper.EmployeeMapper;
import com.guvi.empManagementApp.repository.EmployeeRepo;
import com.guvi.empManagementApp.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepo employeeRepo;

    @Override
    public EmployeeDto saveEmployee(EmployeeDto employeeDto) {

        Optional<Employee> optionalEmployee = employeeRepo.findByEmail(employeeDto.getEmail());

        if (optionalEmployee.isPresent()) {
            throw new EmailAlreadyExistException("Email Already Exist");
        }

        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepo.save(employee);

        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {

        Employee employee = employeeRepo.findById(employeeId)
                .orElseThrow(() -> new ResourceNotFoundException
                        ("Employee", "id", employeeId));
        return EmployeeMapper.mapToEmployeeDto(employee);
    }

    @Override
    public List<EmployeeDto> getAllEmployee() {
        List<Employee> employees = employeeRepo.findAll();
        return employees.stream().map(EmployeeMapper::mapToEmployeeDto)
                .collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee) {
        Employee employee = employeeRepo.findById(employeeId)
                .orElseThrow(() -> new ResourceNotFoundException
                        ("Employee", "id", employeeId));

        Optional<Employee> optionalEmployee = employeeRepo.findByEmail(updatedEmployee.getEmail());

        if (optionalEmployee.isPresent()) {
            throw new EmailAlreadyExistException("Email Already Exist");
        }

        employee.setFirstName(updatedEmployee.getFirstName());
        employee.setLastName(updatedEmployee.getLastName());
        employee.setEmail(updatedEmployee.getEmail());

        Employee updatedEmployeeObj = employeeRepo.save(employee);
        return EmployeeMapper.mapToEmployeeDto(updatedEmployeeObj);
    }

    @Override
    public void deleteEmployee(Long employeeId) {

        Employee employee = employeeRepo.findById(employeeId)
                .orElseThrow(() -> new ResourceNotFoundException
                        ("Employee", "id", employeeId));
        employeeRepo.deleteById(employeeId);
    }
}
