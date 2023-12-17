package com.sruthi.task3;

import java.util.Scanner;

public class TaxCalculator {
    public static void main(String[] args) {

        printEmployeeTax();
        printProductSalesTax();
    }

    public static void printEmployeeTax() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter your Employee id:");
        int empId = scanner.nextInt();

        System.out.println("Enter your name:");
        String empName = scanner.next();

        System.out.println("Enter your salary");
        int empSalary = scanner.nextInt();

        Employee employee = new Employee(empId, empName, empSalary);

        float incomeTax = employee.calcTax();
        float yearlySalary = empSalary * 12;
        float totalSalary = yearlySalary - incomeTax;

        System.out.println("IncomeTax = " + incomeTax);
        System.out.println("Total Salary is " + totalSalary);
    }

    public static void printProductSalesTax() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter the pid:");
        int pid = scanner.nextInt();

        System.out.println("Enter the product price");
        float price = scanner.nextFloat();

        System.out.println("Enter the quantity of the product");
        int quantity = scanner.nextInt();

        Product product = new Product(pid, price, quantity);

        float salesTax = product.calcTax();
        float totalPrice = price * quantity + salesTax;

        System.out.println("Sales Tax = " + salesTax);
        System.out.println("Total price = " + totalPrice);
    }
}
