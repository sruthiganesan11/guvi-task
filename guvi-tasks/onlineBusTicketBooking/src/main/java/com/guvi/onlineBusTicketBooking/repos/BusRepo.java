package com.guvi.onlineBusTicketBooking.repos;

import com.guvi.onlineBusTicketBooking.entities.Bus;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BusRepo extends JpaRepository<Bus, Long> {
}
