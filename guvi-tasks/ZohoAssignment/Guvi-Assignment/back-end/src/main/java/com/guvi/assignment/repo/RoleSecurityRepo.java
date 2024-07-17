package com.guvi.assignment.repo;

import com.guvi.assignment.entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleSecurityRepo extends JpaRepository<Role,Long> {
    Role findByName(String name);
}
