package com.sruthi.task4;

import java.util.Scanner;

public class Voters{
    public static void main(String[] args) throws InvalidAgeException{

        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter your Voter id:");
        int voterID = scanner.nextInt();

        System.out.println("Enter your name:");
        String name = scanner.next();

        System.out.println("Enter your age:");
        int age = scanner.nextInt();

        Voter voter = new Voter(voterID,name,age);
        System.out.println(voter);
    }
}
