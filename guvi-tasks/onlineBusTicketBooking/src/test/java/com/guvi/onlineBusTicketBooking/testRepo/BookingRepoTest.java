package com.guvi.onlineBusTicketBooking.testRepo;

import com.guvi.onlineBusTicketBooking.entities.Booking;
import com.guvi.onlineBusTicketBooking.entities.Passenger;
import com.guvi.onlineBusTicketBooking.repos.BookingRepo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.assertj.core.api.Assertions.assertThat;


import java.util.List;


@DataJpaTest
public class BookingRepoTest {

    @Autowired
    private BookingRepo bookingRepo;

    private Booking booking;

    @BeforeEach
    public void setUp() {
        Passenger passenger = Passenger.builder()
                .name("john")
                .aadharId("123456789103")
                .contactNo("987654321")
                .email("test@123")
                .age(28)
                .cancelStat(false)
                .journeyStat(true)
                .build();

        booking = Booking.builder()
                .bookingId("1234")
                .bookingDate("2024-03-30")
                .passenger(passenger)
                .busName("Mss")
                .fee(1000)
                .build();
    }

    @DisplayName("Test whether the Booking get saved in DB")
    @Test
    public void givenBooking_whenSave_thenReturnSavedBooking() {
        Booking savedBooking = bookingRepo.save(booking);
        assertThat(savedBooking).isNotNull();
        assertThat(savedBooking.getId()).isGreaterThan(0);


    }

    @Test
    public void givenBookingList_whenFindAll_thenBookingList() {
        Passenger passenger2 = Passenger.builder()
                .name("peter")
                .aadharId("123456749103")
                .contactNo("987654391")
                .email("peter@123")
                .age(20)
                .cancelStat(false)
                .journeyStat(true)
                .build();
        Booking booking1 = Booking.builder()
                .bookingId("1232")
                .bookingDate("2024-11-20")
                .passenger(passenger2)
                .busName("Msv")
                .fee(1000)
                .build();
        bookingRepo.save(booking);
        bookingRepo.save(booking1);

        List<Booking> bookingList = bookingRepo.findAll();
        assertThat(bookingList).isNotNull();
        assertThat(bookingList.size()).isEqualTo(2);

    }

}
