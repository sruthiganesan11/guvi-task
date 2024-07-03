package com.guvi.hospitalManagementSystem.repoTest;

import com.guvi.hospitalManagementSystem.entity.Medication;
import com.guvi.hospitalManagementSystem.repository.MedicationRepo;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
public class MedicationRepoTest {

    @Autowired
    private MedicationRepo medicationRepo;
    private Medication medication;


    @BeforeEach
    public void setUp(){
        medication=Medication.builder()
                .patientName("kishore")
                .appointmentDate(LocalDate.parse("2024-09-06"))
                .medicineName("Dolo")
                .morning(1)
                .afternoon(1)
                .night(1)
                .build();
    }

    @DisplayName("Test whether the passenger get saved in DB")
    @Test
    public void givenEmployee_whenSave_thenReturnSavedEmployee(){
        Medication savedDoctor =medicationRepo.save(medication);
        assertThat(savedDoctor ).isNotNull();
        assertThat(savedDoctor.getId()).isGreaterThan(0);


    }
    @Test
    public  void givenPassengerList_whenFindAll_thenPassengerList() {
        Medication employee1 = Medication.builder()
                .patientName("kisan")
                .appointmentDate(LocalDate.parse("2024-09-06"))
                .medicineName("Dolo")
                .morning(1)
                .afternoon(1)
                .night(1)
                .build();


        medicationRepo.save(medication);
        medicationRepo.save(employee1);

        List<Medication> passengerList = medicationRepo.findAll();
        assertThat(passengerList).isNotNull();
        assertThat(passengerList.size()).isEqualTo(2);

    }
    @Test
    public  void givenEmployeeEmail_whenFindByEmail_thenReturnEmployee(){
        medicationRepo.save(medication);
        Optional<Medication> passengerDb= Optional.of(medicationRepo.findById(medication.getId()).get());
        assertThat(passengerDb).isNotNull();

    }

    @Test
    public  void givenEmployee_whenDelete_thenRemoveEmployee(){
        medicationRepo.save(medication);
        medicationRepo.deleteById(medication.getId());
        Optional<Medication> passenger1=medicationRepo.findById(medication.getId());
        assertThat(passenger1).isEmpty();

    }
}
