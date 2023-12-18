package com.sruthi.task5;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Students {
    public static void main(String[] args) {

        List<String> studentsNames = Arrays.asList("Elena", "Anil", "Caroline", "Klaus", "Stefan", "Damon",
                "Katherine", "Abi", "Bonnie", "Ani");

        List<String> nameStartsWithA = studentsNames.stream().filter(name -> name.startsWith("A"))
                .collect(Collectors.toList());

        System.out.println(nameStartsWithA);
    }
}