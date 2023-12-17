package com.sruthi.task4;

import java.util.Scanner;

public class MyStack {
    public static void main(String[] args) throws Exception {
        Scanner scanner = new Scanner(System.in);
        System.out.println("enter the stack size:");
        int items = scanner.nextInt();

        Stack stack = new Stack(items);

        boolean isEmpty=stack.isEmpty();
        System.out.println(isEmpty);


        stack.push(10);
        stack.push(20);
        stack.push(30);
        stack.push(40);
        stack.push(50);

        System.out.println(stack);

        int removedValue = stack.pop();
        System.out.println("Popping out the value...");
        System.out.println("Removed value " + removedValue);
        removedValue = stack.pop();
        System.out.println("Popping out the value...");
        System.out.println("Removed value " + removedValue);
        removedValue = stack.pop();
        System.out.println("Popping out the value...");
        System.out.println("Removed value " + removedValue);
        removedValue = stack.pop();
        System.out.println("Popping out the value...");
        System.out.println("Removed value " + removedValue);
        System.out.println(stack);

        isEmpty=stack.isEmpty();
        System.out.println(isEmpty);
    }
}
