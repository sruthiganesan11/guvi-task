package com.guvi.onlineBusTicketBooking.services.impl;

import com.guvi.onlineBusTicketBooking.dto.BusDto;
import com.guvi.onlineBusTicketBooking.entities.Bus;
import com.guvi.onlineBusTicketBooking.exception.ResourceNotFoundException;
import com.guvi.onlineBusTicketBooking.mapper.BusMapper;
import com.guvi.onlineBusTicketBooking.repos.BusRepo;
import com.guvi.onlineBusTicketBooking.services.BusService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class BusServiceImpl implements BusService {

    private BusRepo busRepo;

    @Override
    public BusDto addBus(BusDto busDto) {

        Bus bus = BusMapper.mapToBus(busDto);
        Bus savedBus = busRepo.save(bus);
        return BusMapper.mapToBusDto(savedBus);
    }

    @Override
    public BusDto getBusById(Long busId) {
        Bus bus = busRepo.findById(busId)
                .orElseThrow(() -> new ResourceNotFoundException
                        ("Bus "," id " , busId));
        return BusMapper.mapToBusDto(bus);
    }

    @Override
    public List<BusDto> getAllBuses() {
        List<Bus> bus = busRepo.findAll();
        return bus.stream().map(BusMapper::mapToBusDto).collect(Collectors.toList());
    }

    @Override
    public BusDto updateBus(Long busId, BusDto updatedBus) {

        Bus bus = busRepo.findById(busId).orElseThrow(
                () -> new ResourceNotFoundException("Bus "," id " ,busId)
        );

        bus.setBusName(updatedBus.getBusName());
        bus.setFromLocation(updatedBus.getFromLocation());
        bus.setToLocation(updatedBus.getToLocation());
        bus.setSeats(updatedBus.getSeats());
        bus.setAvailableSeats(updatedBus.getAvailableSeats());
        bus.setDepartureDate(updatedBus.getDepartureDate());
        bus.setPrice(updatedBus.getPrice());

        Bus updatedBusObj = busRepo.save(bus);
        return BusMapper.mapToBusDto(updatedBusObj);
    }


    @Override
    public void deleteBus(Long busId) {

        Bus bus = busRepo.findById(busId).orElseThrow(
                () -> new ResourceNotFoundException("Bus "," id " ,busId)
        );

        busRepo.deleteById(busId);
    }
}