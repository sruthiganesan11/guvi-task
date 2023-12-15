package com.sruthi.task2;

import java.util.Scanner;

public class ProductApp {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        final int NUMBER_OF_PRODUCTS = 5;

        Product[] products = new Product[NUMBER_OF_PRODUCTS];


        for (int i = 0; i < products.length; i++) {
            System.out.println("Enter details of the product " + (i + 1));

            System.out.println("enter the pid:");
            int pid = scanner.nextInt();

            System.out.println("enter the price:");
            float price = scanner.nextFloat();

            System.out.println("enter the quantity:");
            int quantity = scanner.nextInt();

            products[i] = new Product(pid, price, quantity);
        }

        int highestPricePid = products[0].getPid();
        float highestPrice = products[0].getPrice();

        for (int i = 1; i < 5; i++) {
            if(products[i].getPrice() > highestPrice) {
                highestPrice = products[i].getPrice();
                highestPricePid = products[i].getPid();
            }
        }

        System.out.println("Product of highest price " + highestPricePid);

        float totalPurchasedAmount =  totalAmount(products);
        System.out.println("The total purchased amount = " + totalPurchasedAmount);
    }

    public static float totalAmount(Product[] products) {
        float totalAmountSpent = 0.0f;
        for (int i = 0; i < 5; i++) {
            totalAmountSpent += products[i].getPrice() * products[i].getQuantity();
        }

        return totalAmountSpent;
    }

}
