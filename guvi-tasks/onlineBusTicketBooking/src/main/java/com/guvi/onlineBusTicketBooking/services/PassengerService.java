package com.guvi.onlineBusTicketBooking.services;

import com.guvi.onlineBusTicketBooking.dto.BookingDto;
import com.guvi.onlineBusTicketBooking.dto.PassengerDto;

import java.util.List;

public interface PassengerService {

    PassengerDto createPassenger(PassengerDto passengerDto);

    PassengerDto getPassengerById(Long passengerId);

    List<PassengerDto> getAllPassengers();

    PassengerDto updatePassenger(Long passengerId , PassengerDto updatedPassenger);

    void deletePassenger(Long passengerId);

    PassengerDto findByEmail(String email);

    PassengerDto cancelTicket(Long id);
}