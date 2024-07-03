package com.guvi.onlineBusTicketBooking.repos;

import com.guvi.onlineBusTicketBooking.entities.Passenger;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PassengerRepo extends JpaRepository<Passenger, Long> {
    Passenger findByEmail(String email);
}
