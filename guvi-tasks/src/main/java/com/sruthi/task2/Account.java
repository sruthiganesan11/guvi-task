package com.sruthi.task2;

public class Account {
    private double balance;
    private String accountNumber;

    public Account() {
    }

    public Account(double balance, String accountNumber) {
        this.balance = balance;
        this.accountNumber = accountNumber;
    }

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        balance = balance + amount;
    }

    public void withdraw(double amount) {
        if (balance < amount) {
            System.out.println("Insufficient amount");
        } else {
            balance = balance - amount;
        }
    }

    public void display() {
        System.out.println("Account Number: " + accountNumber +"\nCurrent Balance = " + balance);
    }

    @Override
    public String toString() {
        return "Account{" +
                "balance=" + balance +
                ", accountNumber='" + accountNumber + '\'' +
                '}';
    }
}
