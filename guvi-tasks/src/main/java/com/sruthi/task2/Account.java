package com.mycompany.guviTask;

public class Account {
    private double balance;

    public Account(){
    }

    public Account(double balance) {
        this.balance = balance;
    }

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        balance = balance + amount;
    }

    public void  withdraw(double amount) {
        if(balance < amount) {
            System.out.println("Insufficient amount");
        }else{
            balance = balance - amount;
        }
    }

    public void display() {
        System.out.println("Current Balance = " + balance);
    }

    @Override
    public String toString() {
        return "Account{" +
                "balance=" + balance +
                '}';
    }
}
