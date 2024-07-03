package com.guvi.onlineBusTicketBooking.controllers;

import com.guvi.onlineBusTicketBooking.dto.PassengerDto;
import com.guvi.onlineBusTicketBooking.entities.Passenger;
import com.guvi.onlineBusTicketBooking.repos.PassengerRepo;
import com.guvi.onlineBusTicketBooking.services.PassengerService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/passengers")
public class PassengerController {

    private PassengerService passengerService;
    private PassengerRepo passengerRepo;

    @PostMapping
    public ResponseEntity<PassengerDto> savePassenger(@RequestBody PassengerDto passengerDto) {
        PassengerDto savedPassenger = passengerService.createPassenger(passengerDto);
        return new ResponseEntity<>(savedPassenger, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<PassengerDto> getPassengerById(@PathVariable("id") Long passengerId) {
        PassengerDto passengerById = passengerService.getPassengerById(passengerId);
        return ResponseEntity.ok(passengerById);
    }

    @GetMapping
    public ResponseEntity<List<PassengerDto>> getAllPassengers() {
        List<PassengerDto> passengers = passengerService.getAllPassengers();
        return ResponseEntity.ok(passengers);
    }

    @PutMapping("{id}")
    public ResponseEntity<PassengerDto> updatePassenger(@PathVariable("id") Long passengerId,
                                                        @RequestBody PassengerDto updatedPassenger) {
        PassengerDto passengerDto = passengerService.updatePassenger(passengerId, updatedPassenger);
        return ResponseEntity.ok(passengerDto);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deletePassenger(@PathVariable("id") Long passengerId) {
        passengerService.deletePassenger(passengerId);
        return ResponseEntity.ok("Passenger deleted successfully!");
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<PassengerDto> getPassengerByEmail(@PathVariable String email) {
        PassengerDto passengerDto = passengerService.findByEmail(email);
        return ResponseEntity.ok(passengerDto);
    }

    @PutMapping("/canceled/{pnr_details}")
    public String updateCancelStatus(@PathVariable Long pnr_details) {
        Passenger cancel = passengerRepo.findById(pnr_details).get();
        System.out.println(pnr_details);

        System.out.println(cancel.getId());
        if (cancel.getId() == pnr_details) {
            cancel.setCancelStat(true);
            passengerRepo.save(cancel);
            System.out.println(cancel.isCancelStat());
            return cancel.getContactNo() + " ticket is cancelled";

        }
        return null;
    }

    //Cancel Ticket Based On id
    @PutMapping("cancelticket/{id}")
    public ResponseEntity<PassengerDto> cancelTicket(@PathVariable("id") Long id) {
        PassengerDto updatedPassenger = passengerService.cancelTicket(id);
        return ResponseEntity.ok(updatedPassenger);

    }
}