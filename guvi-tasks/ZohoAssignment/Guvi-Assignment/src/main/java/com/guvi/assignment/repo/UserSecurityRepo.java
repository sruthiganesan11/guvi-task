package com.guvi.assignment.repo;

import com.guvi.assignment.entities.UserSecurity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserSecurityRepo extends JpaRepository<UserSecurity, Long> {
    Optional<UserSecurity> findByUsername(String username);

    Boolean existsByEmail(String email);

    Optional<UserSecurity> findByUsernameOrEmail(String username, String email);

    Boolean existsByUsername(String firstname);
}
