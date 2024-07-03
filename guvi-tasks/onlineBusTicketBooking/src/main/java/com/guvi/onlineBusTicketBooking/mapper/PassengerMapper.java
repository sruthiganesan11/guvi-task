package com.guvi.onlineBusTicketBooking.mapper;

import com.guvi.onlineBusTicketBooking.dto.PassengerDto;
import com.guvi.onlineBusTicketBooking.entities.Passenger;

public class PassengerMapper {

    public static PassengerDto mapToPassengerDto(Passenger passenger) {
        return new PassengerDto(
                passenger.getId(),
                passenger.getName(),
                passenger.getAadharId(),
                passenger.getContactNo(),
                passenger.getEmail(),
                passenger.getAge(),
                passenger.isJourneyStat(),
                passenger.isCancelStat()
        );

    }

    public static Passenger mapToPassenger(PassengerDto passengerDto) {
        return new Passenger(
                passengerDto.getId(),
                passengerDto.getName(),
                passengerDto.getAadharId(),
                passengerDto.getContactNo(),
                passengerDto.getEmail(),
                passengerDto.getAge(),
                passengerDto.isJourneyStat(),
                passengerDto.isCancelStat());
    }

}
