package com.sruthi.task4;

import java.util.Arrays;

public class Stack {

    private int[] items;
    private int capacity;
    private int stackPointer = -1;

    public Stack(int capacity) {
        this.capacity = capacity;
        this.items = new int[this.capacity];
    }

    public void push(int item) throws Exception {
        if (stackPointer == items.length - 1) {
            throw new Exception("Stack is full");
        } else {
            stackPointer += 1;
            items[stackPointer] = item;
        }
    }

    public int pop() throws Exception {
        if (stackPointer == 0) {
            throw new Exception("Stack is empty");
        }
        int item = items[stackPointer];
        stackPointer -= 1;
        return item;
    }

    public boolean isEmpty(){
        boolean item = false;
        if(stackPointer == -1) {
            item = true;
            System.out.println("Stack is empty");
        }else {
            System.out.println("Stack is not empty");
        }
        return item;
    }

    @Override
    public String toString() {
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("[");
        for (int i = 0; i <= stackPointer; i++) {
            String temp = String.valueOf(items[i]);
            if(i < stackPointer) {
                stringBuilder.append(temp + " , ");
            }else {
                stringBuilder.append(temp);
            }
        }
        stringBuilder.append("]");

        return stringBuilder.toString();
    }

}
