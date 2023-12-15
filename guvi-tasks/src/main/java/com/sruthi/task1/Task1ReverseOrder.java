package com.mycompany.guviTask;

import java.util.Scanner;

public class Task1ReverseOrder {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter the number");
        int number = scanner.nextInt();
        String result = "";

        while (number != 0) {

            int divResult = number / 10;
            int modResult = number % 10;

            number = divResult;
            result += modResult;
        }

        char[] chNumber = result.toCharArray();
        for (int i = 0; i <= chNumber.length - 1 ; i++) {
            System.out.print(chNumber[i]);
        }
    }
}
