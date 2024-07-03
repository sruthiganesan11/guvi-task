package com.guvi.onlineBusTicketBooking.services;

import com.guvi.onlineBusTicketBooking.dto.BusDto;

import java.util.List;

public interface BusService {
    BusDto addBus(BusDto busDto);

    BusDto getBusById(Long busID);

    List<BusDto> getAllBuses();

    BusDto updateBus(Long busId , BusDto updatedBus);

    void deleteBus(Long BusId);
}