package com.sruthi.task5;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class CheckEmptyStrings {
    public static void main(String[] args) {

        List<String> checkEmptyStrings = Arrays.asList("abc", "", "bc", "efg", "abcd", "", "jkl");

        List<String> nonEmptyStrings = checkEmptyStrings.stream().filter(s -> !s.isEmpty())
                .collect(Collectors.toList());

        System.out.println("Non Empty String " + nonEmptyStrings);

    }
}
