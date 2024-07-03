package com.guvi.hospitalManagementSystem.repository;

import com.guvi.hospitalManagementSystem.entity.Medication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MedicationRepo extends JpaRepository<Medication, Long> {
    List<Medication> findByPatientName(String patientName);
}
