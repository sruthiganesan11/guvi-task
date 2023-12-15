package com.sruthi.task1;

import java.util.Scanner;

public class Task1PositiveNegative {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter a number:");
        int number = scanner.nextInt();

        if(number == 0) {
            System.out.println(number + " is neither positive nor negative number.");
        } else if(number > 0) {
            System.out.println(number + " is positive number.");
        }else {
            System.out.println(number + " is negative number");
        }
    }
}
