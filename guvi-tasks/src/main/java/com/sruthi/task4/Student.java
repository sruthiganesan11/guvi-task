package com.sruthi.task4;

import java.util.Locale;

public class Student {
    private int rollNum;
    private String name;
    private int age;
    private String course;

    public Student(int rollNum, String name, int age, String course) throws AgeNotWithinRangeException, NameNotValidException {
        validateName(name);
        validateAge(age);

        this.rollNum = rollNum;
        this.name = name;
        this.age = age;
        this.course = course;
    }

    private static void validateName(String name) throws NameNotValidException {
        char chName;
        for (int i = 0; i < name.length(); i++) {
            chName = name.charAt(i);
            if (!Character.isLetter(chName)) {
                throw new NameNotValidException(name + " name should contain only alphabets");
            }

        }
    }

    public int getRollNum() {
        return rollNum;
    }

    public void setRollNum(int rollNum) {
        this.rollNum = rollNum;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) throws NameNotValidException {
        validateName(name);
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) throws AgeNotWithinRangeException {
        validateAge(age);
        this.age = age;
    }

    private static void validateAge(int age) throws AgeNotWithinRangeException {
        if (age < 15 || age > 21) {
            throw new AgeNotWithinRangeException(age + "Age should be between 15 and 21");
        }
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    @Override
    public String toString() {
        return "RollNum: " + rollNum +
                ", Name: " + name +
                ", Age: " + age +
                ", Course: " + course;
    }
}
