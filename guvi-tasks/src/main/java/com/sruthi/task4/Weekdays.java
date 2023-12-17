package com.sruthi.task4;

import java.util.Scanner;

public class Weekdays {
    public static void main(String[] args) {

        String[] weekdays = {"Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"};

        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter the position of the day:");
        int dayPosition = scanner.nextInt();

        try {
            String dayName = weekdays[dayPosition];
            System.out.println("The day of the given position " + dayPosition + " is " + dayName);
        }catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Please enter value between 0-6");
        }
    }
}
