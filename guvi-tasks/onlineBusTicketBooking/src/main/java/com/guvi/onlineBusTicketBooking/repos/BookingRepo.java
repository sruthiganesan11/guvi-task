package com.guvi.onlineBusTicketBooking.repos;

import com.guvi.onlineBusTicketBooking.entities.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepo extends JpaRepository<Booking, Long> {

    Booking findByPassenger_id(Long id);
}
