package com.guvi.onlineBusTicketBooking.services;

import com.guvi.onlineBusTicketBooking.dto.BookingDto;

import java.util.List;

public interface BookingService {
    BookingDto addBooking(BookingDto bookingDto);

    BookingDto getBookingById(Long bookingId);

    List<BookingDto> getAllBookings();


    BookingDto getByPassengerId(Long id);


}
