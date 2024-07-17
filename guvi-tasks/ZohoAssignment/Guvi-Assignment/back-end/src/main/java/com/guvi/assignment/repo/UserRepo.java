package com.guvi.assignment.repo;

import com.guvi.assignment.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User,Integer> {
}
