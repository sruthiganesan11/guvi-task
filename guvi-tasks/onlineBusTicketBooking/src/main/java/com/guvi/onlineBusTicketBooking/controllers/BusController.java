package com.guvi.onlineBusTicketBooking.controllers;

import com.guvi.onlineBusTicketBooking.dto.BusDto;
import com.guvi.onlineBusTicketBooking.entities.Bus;
import com.guvi.onlineBusTicketBooking.repos.BusRepo;
import com.guvi.onlineBusTicketBooking.services.BusService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/buses")
public class BusController {

    private BusService busService;
    private BusRepo busRepo;

    @PostMapping
    public ResponseEntity<BusDto> createBus(@RequestBody BusDto busDto) {
        BusDto savedBus = busService.addBus(busDto);
        return new ResponseEntity<>(savedBus, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<BusDto> getBusById(@PathVariable("id") Long busId) {
        BusDto busById = busService.getBusById(busId);
        return ResponseEntity.ok(busById);
    }

    @GetMapping
    public ResponseEntity<List<BusDto>> getAllBuses() {
        List<BusDto> buses = busService.getAllBuses();
        return ResponseEntity.ok(buses);
    }

    @PutMapping("{id}")
    public ResponseEntity<BusDto> updateBus(@PathVariable("id") Long busId, @RequestBody @Valid BusDto updatedBus) {
        BusDto busDto = busService.updateBus(busId, updatedBus);
        return ResponseEntity.ok(busDto);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteBus(@PathVariable("id") Long busId) {
        busService.deleteBus(busId);
        return ResponseEntity.ok("Bus deleted successfully!");
    }

    @PutMapping("/updateAvailableTickets/{bus_id}/{number}")
    void updateAvailableTickets(@PathVariable("bus_id") Long bus_id
            , @PathVariable("number") int number) {
        List<Bus> list = busRepo.findAll();
        System.out.println(number);

        for (Bus bus : list) {
            if (Objects.equals(bus.getId(), bus_id)) {
                System.out.println(bus.getAvailableSeats());
                bus.setAvailableSeats(bus.getAvailableSeats() - number);
                busRepo.save(bus);
                System.out.println(bus.getAvailableSeats());
            }
        }
    }
}