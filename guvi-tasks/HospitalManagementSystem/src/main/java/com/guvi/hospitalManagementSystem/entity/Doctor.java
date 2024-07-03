package com.guvi.hospitalManagementSystem.entity;

import jakarta.persistence.*;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "doctor")

public class Doctor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String doctorName;

    @Column(nullable = false)
    private String specialist;

    @Column(nullable = false)
    private String qualification;

    @Column(nullable = false)
    private int experience;

    @Column(nullable = false)
    private int age;

    @Column(nullable = false)
    private Long contactNo;
}
