package com.sruthi.task4;


public class StudentGradeApp {
    public static void main(String[] args) throws Exception {

        StudentGrade s1 = new StudentGrade();

        System.out.println("Adding students...");
        s1.addStudent("John",7);
        s1.addStudent("Elena",1);
        s1.addStudent("Peter",3);
        s1.addStudent("Jenny",5);

        System.out.println(s1);

        System.out.println("Removing Students...");
        s1.removeStudent("John");

        System.out.println(s1);
        s1.removeStudent("Jenny");
        System.out.println(s1);

        int grade= s1.getStudentsGrade("Elena");
        System.out.println("The grade of the given student is : " + grade);
    }
}
