package com.sruthi.task4;

public class Voter {
    private int voterID;
    private String name;
    private int age;

    public Voter(int voterID, String name, int age) throws InvalidAgeException{

        if(age < 18) {
            throw new InvalidAgeException("Invalid age for voter");
        }
        this.voterID = voterID;
        this.name = name;
        this.age = age;
    }

    public int getVoterID() {
        return voterID;
    }

    public void setVoterID(int voterID) {
        this.voterID = voterID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) throws InvalidAgeException{
        if (age < 18) {
            throw new InvalidAgeException("Invalid age for voter");
        }
        this.age = age;
    }

    @Override
    public String toString() {
        return "voterID: " + voterID +
                ", name: " + name +
                ", age: " + age;
    }
}
