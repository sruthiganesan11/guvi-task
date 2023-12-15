package com.sruthi.task2;

public class Employee extends Person {

    private int id;
    private int salary;

    public Employee(String name,int age,int id, int salary) {
        super(name,age);
        this.id = id;
        this.salary = salary;
    }

    public int getId() {
        return id;
    }

    public int getSalary() {
        return salary;
    }

    @Override
    public String toString() {
        return "Name = " + super.getName() +
                ", Age = " +  super.getAge()+
                ", Id = " + id +
                ", Salary = " + salary ;
    }
}
