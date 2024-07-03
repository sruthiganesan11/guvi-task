package com.guvi.onlineBusTicketBooking.services.impl;

import com.guvi.onlineBusTicketBooking.dto.BookingDto;
import com.guvi.onlineBusTicketBooking.entities.Booking;
import com.guvi.onlineBusTicketBooking.entities.Passenger;
import com.guvi.onlineBusTicketBooking.exception.ResourceNotFoundException;
import com.guvi.onlineBusTicketBooking.mapper.BookingMapper;
import com.guvi.onlineBusTicketBooking.repos.BookingRepo;
import com.guvi.onlineBusTicketBooking.services.BookingService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class BookingServiceImpl implements BookingService {

    private BookingRepo bookingRepo;

    @Override
    public BookingDto addBooking(BookingDto bookingDto) {

        Booking booking = BookingMapper.mapToBooking(bookingDto);
        Booking savedBooking = bookingRepo.save(booking);

        return BookingMapper.mapToBookingDto(savedBooking);
    }

    @Override
    public BookingDto getBookingById(Long bookingId) {
        Booking booking = bookingRepo.findById(bookingId)
                .orElseThrow(() -> new ResourceNotFoundException
                        ("Bookings", " id ", bookingId));
        return BookingMapper.mapToBookingDto(booking);
    }

    @Override
    public List<BookingDto> getAllBookings() {
        List<Booking> bookings = bookingRepo.findAll();
        return bookings.stream().map(BookingMapper::mapToBookingDto)
                .collect(Collectors.toList());
    }


    @Override
    public BookingDto getByPassengerId(Long id) {
        Booking booking = bookingRepo.findByPassenger_id(id);
        return BookingMapper.mapToBookingDto(booking);
    }

}

