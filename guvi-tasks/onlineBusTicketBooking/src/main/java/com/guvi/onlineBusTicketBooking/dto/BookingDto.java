package com.guvi.onlineBusTicketBooking.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateSerializer;
import com.guvi.onlineBusTicketBooking.entities.Bus;
import com.guvi.onlineBusTicketBooking.entities.Passenger;
import jakarta.persistence.CascadeType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.*;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookingDto {

    private Long id;

    private String bookingId;

    private String bookingDate;

    private Passenger passenger;

    private String busName;

    private int fee;

    private LocalDate departureDate;


}
