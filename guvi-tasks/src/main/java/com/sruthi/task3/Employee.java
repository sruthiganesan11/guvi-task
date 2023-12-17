package com.sruthi.task3;

public class Employee implements Taxable{

    private int empId;
    private String name;
    private int salary;

    public Employee(int empId, String name, int salary) {
        this.empId = empId;
        this.name = name;
        this.salary = salary;
    }

    @Override
    public float calcTax() {
        return (salary * 12) * INCOME_TAX;
    }
}
