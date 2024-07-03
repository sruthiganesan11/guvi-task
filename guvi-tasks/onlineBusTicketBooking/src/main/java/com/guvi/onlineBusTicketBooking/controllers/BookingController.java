package com.guvi.onlineBusTicketBooking.controllers;

import com.guvi.onlineBusTicketBooking.dto.BookingDto;
import com.guvi.onlineBusTicketBooking.services.BookingService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/booking")
public class BookingController {

    private BookingService bookingService;

    @PostMapping
    public ResponseEntity<BookingDto> createBooking(@RequestBody BookingDto bookingDto) {
        BookingDto savedBooking = bookingService.addBooking(bookingDto);
        return new ResponseEntity<>(savedBooking, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<BookingDto> getBookingsById(@PathVariable("id") Long bookingId) {
        BookingDto bookingById = bookingService.getBookingById(bookingId);
        return ResponseEntity.ok(bookingById);
    }

    @GetMapping
    public ResponseEntity<List<BookingDto>> getAllBookings() {
        List<BookingDto> bookings = bookingService.getAllBookings();
        return ResponseEntity.ok(bookings);
    }

    @GetMapping("/passenger/{id}")
    public ResponseEntity<BookingDto> getByPassengerId(@PathVariable("id") Long id) {
        BookingDto passenger = bookingService.getByPassengerId(id);
        return ResponseEntity.ok(passenger);
    }
}
