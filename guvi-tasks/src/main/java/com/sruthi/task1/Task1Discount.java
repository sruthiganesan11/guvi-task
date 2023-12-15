package com.mycompany.guviTask;

import java.util.Scanner;

public class Task1Discount {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        float discountAmount;
        float totalAmount;

        System.out.println("Enter the purchased amount");
        float purchasedAmount = scanner.nextFloat();

        if(purchasedAmount < 500) {
            System.out.println("No discount is applied");
        }else if (purchasedAmount >=500 && purchasedAmount <= 1000) {
            discountAmount = (purchasedAmount*10) /100 ;
            totalAmount = purchasedAmount - discountAmount;
            System.out.println("the total purchased amount is " + totalAmount);
        }else {
            discountAmount = (purchasedAmount * 20)/ 100;
            totalAmount = purchasedAmount - discountAmount;
            System.out.println("the total purchased amount is " + totalAmount);
        }
    }
}
