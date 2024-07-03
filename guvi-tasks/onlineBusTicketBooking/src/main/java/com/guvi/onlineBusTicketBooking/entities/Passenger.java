package com.guvi.onlineBusTicketBooking.entities;

import jakarta.persistence.*;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "passenger")
public class Passenger {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;



    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String aadharId;

    @Column(nullable = false)
    private String contactNo;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private int age;

    @Column(nullable = false, name = "JourneyStatus")
    private boolean journeyStat;

    @Column(nullable = false, name = "TicketCancelled")
    private boolean cancelStat;

}