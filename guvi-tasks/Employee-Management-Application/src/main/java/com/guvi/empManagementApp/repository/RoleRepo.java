package com.guvi.empManagementApp.repository;

import com.guvi.empManagementApp.entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepo extends JpaRepository<Role, Long> {
    Role findByName(String name);
}
