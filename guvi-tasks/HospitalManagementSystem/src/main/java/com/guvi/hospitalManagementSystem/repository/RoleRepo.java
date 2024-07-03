package com.guvi.hospitalManagementSystem.repository;

import com.guvi.hospitalManagementSystem.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepo extends JpaRepository<Role, Long> {
    Role findByName(String name);
}
