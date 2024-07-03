package com.guvi.hospitalManagementSystem.repository;

import com.guvi.hospitalManagementSystem.entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppointmentRepo extends JpaRepository<Appointment, Long> {
    Appointment findByPatient_id(Long id);
}
