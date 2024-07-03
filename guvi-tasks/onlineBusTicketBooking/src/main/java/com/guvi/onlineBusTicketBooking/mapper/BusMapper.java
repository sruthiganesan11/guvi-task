package com.guvi.onlineBusTicketBooking.mapper;

import com.guvi.onlineBusTicketBooking.dto.BusDto;
import com.guvi.onlineBusTicketBooking.entities.Bus;

import java.time.LocalDate;

public class BusMapper {

    public static BusDto mapToBusDto(Bus bus) {
        return new BusDto(
                bus.getId(),
                bus.getBusName(),
                bus.getFromLocation(),
                bus.getToLocation(),
                bus.getSeats(),
                bus.getAvailableSeats(),
                bus.getDepartureDate(),
                bus.getPrice()


        );

    }

    public static Bus mapToBus(BusDto busDto) {
        return new Bus(
                busDto.getId(),
                busDto.getBusName(),
                busDto.getFromLocation(),
                busDto.getToLocation(),
                busDto.getSeats(),
                busDto.getAvailableSeats(),
                busDto.getDepartureDate(),
                busDto.getPrice()
        );
    }
}
