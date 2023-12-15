package com.mycompany.guviTask;

public class Person {
    private String name;
    private int age;
    private static final int AGE_DEFAULT = 18;

    public Person(String name) {
        this(name, AGE_DEFAULT);
    }
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    public String getName() {
        return name;
    }
    public int getAge() {
        return age;
    }
    public void display() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + AGE_DEFAULT);
    }
    @Override
    public String toString() {
        return "Person{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }
}
