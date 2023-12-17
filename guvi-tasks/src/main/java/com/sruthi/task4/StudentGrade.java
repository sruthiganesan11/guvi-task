package com.sruthi.task4;

import java.util.HashMap;

public class StudentGrade {
    private HashMap<String,Integer> studentGrades;

    public StudentGrade() {
        studentGrades = new HashMap<>();
    }

    public void addStudent(String name,int grade) {
        studentGrades.put(name,grade);
    }

    public void removeStudent(String name,int grade) {
        studentGrades.remove(name);
    }
}
