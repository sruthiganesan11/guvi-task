package com.guvi.onlineBusTicketBooking.repos;

import com.guvi.onlineBusTicketBooking.entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleSecurityRepo extends JpaRepository<Role,Long> {
    Role findByName(String name);
}
