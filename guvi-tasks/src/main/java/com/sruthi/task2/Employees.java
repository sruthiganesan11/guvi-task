package com.sruthi.task2;

public class Employees {
    public static void main(String[] args) {

        Employee employee1 = new Employee("John",30,1,50000);
        Employee employee2 = new Employee("Peter",25,2,45000);
        Employee employee3 = new Employee("Sam",35,3,36000);
        Employee employee4 = new Employee("Boonie",45,4,25000);
        Employee employee5 = new Employee("Elena",28,5,15000);

        System.out.println(employee1);
        System.out.println(employee2);
        System.out.println(employee3);
        System.out.println(employee4);
        System.out.println(employee5);
    }
}
