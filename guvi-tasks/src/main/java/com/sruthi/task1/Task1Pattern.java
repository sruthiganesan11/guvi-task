package com.mycompany.guviTask;

import java.util.Scanner;

public class Task1Pattern {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter the number");
        int number = scanner.nextInt();

        for (int i = number; i > 0; i--) {
            //it prints 5
            for (int j = number; j >= i; j--) {
                if (j != 1) {
                    System.out.print(j + " ");
                } else {
                    System.out.print(j);
                }
            }
            //
            for (int j = i - 1; j > 0; j--) {

                String result = String.valueOf(i);
                if(j != 1) {
                    result += " ";
                }
                System.out.print(result);
            }
            System.out.println();
        }

    }
}
