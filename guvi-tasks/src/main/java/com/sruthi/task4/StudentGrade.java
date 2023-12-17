package com.sruthi.task4;
import java.util.HashMap;

public class StudentGrade {

        private HashMap<String, Integer> studentGrades;

        public StudentGrade() {
            studentGrades = new HashMap<>();
        }

        public void addStudent(String name, int grade) {
            studentGrades.put(name, grade);
        }

        public void removeStudent(String name) throws Exception {
            if (studentGrades.containsKey(name)) {
                studentGrades.remove(name);
            } else {
                throw new Exception(name + "Name not found");
            }
        }

        public int getStudentsGrade(String name) throws Exception {
            int grade = -1;
            if (studentGrades.containsKey(name)) {
                grade = studentGrades.get(name);
            } else {
                throw new Exception(name +" - Student not found");
            }
            return grade;
        }

    @Override
    public String toString() {
        return "StudentGrades: " + studentGrades;
    }
}
