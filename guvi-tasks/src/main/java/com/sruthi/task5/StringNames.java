package com.sruthi.task5;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class StringNames {
    public static void main(String[] args) {

        List<String> names = Arrays.asList("aBc","d","ef");

        List<String> namesToUppercase = names.stream().map(String::toUpperCase).collect(Collectors.toList());
        System.out.println("Given Names to upper case " + namesToUppercase);
    }
}
