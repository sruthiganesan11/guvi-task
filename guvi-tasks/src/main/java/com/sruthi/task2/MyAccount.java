package com.mycompany.guviTask;

public class MyAccount {
    public static void main(String[] args) {

        Account myAccount = new Account(20000);
        myAccount.deposit(736);
        myAccount.withdraw(7585.56);
        myAccount.display();
        System.out.println(myAccount);
    }
}
