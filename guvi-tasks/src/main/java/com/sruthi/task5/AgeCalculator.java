package com.sruthi.task5;

import java.time.LocalDate;
import java.time.Period;
import java.time.format.DateTimeParseException;
import java.util.Scanner;

public class AgeCalculator {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter your date of birth yyyy-mm-dd");
        String dob = scanner.nextLine();
        LocalDate birthDate = null;
        try {
            birthDate = LocalDate.parse(dob);

        }catch (DateTimeParseException e) {
            System.out.println("Enter your dob: yyyy-mm-dd");
            System.exit(-1);
        }
        LocalDate currentDate = LocalDate.now();
        Period age = Period.between(birthDate, currentDate);

        int years = age.getYears();
        int month = age.getMonths();
        int days = age.getDays();

        System.out.println(years + " years " + month + " months and " + days + " days");


    }
}
