package com.guvi.onlineBusTicketBooking.mapper;

import com.guvi.onlineBusTicketBooking.dto.BookingDto;
import com.guvi.onlineBusTicketBooking.entities.Booking;

public class BookingMapper {
    public static BookingDto mapToBookingDto(Booking booking) {
        return new BookingDto(
                booking.getId(),
                booking.getBookingId(),
                booking.getBookingDate(),
                booking.getPassenger(),
                booking.getBusName(),
                booking.getFee(),
                booking.getDepartureDate()

        );
    }

    public static Booking mapToBooking(BookingDto bookingDto) {
        return new Booking(
                bookingDto.getId(),
                bookingDto.getBookingId(),
                bookingDto.getBookingDate(),
                bookingDto.getPassenger(),
                bookingDto.getBusName(),
                bookingDto.getFee(),
                bookingDto.getDepartureDate()

        );
    }
}
