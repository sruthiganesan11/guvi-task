package com.sruthi.task1;

import java.util.Scanner;

public class Task1SmallestOf3Nos {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        int smallest;

        System.out.println("Enter the first number");
        int firstNumber = scanner.nextInt();

        System.out.println("Enter the second number");
        int secondNumber = scanner.nextInt();

        System.out.println("Enter the third number");
        int thirdNumber = scanner.nextInt();

        if(firstNumber < secondNumber){
            smallest = firstNumber;
        }else {
            smallest = secondNumber;
        }
        if (thirdNumber < smallest) {
            smallest = thirdNumber;
        }

        System.out.println(smallest + " is the smallest of all 3 numbers");

    }
}
