package com.sruthi.task2;

public class Product {
    private int pid;
    private float price;
    private  int quantity;

    public Product(int pid, float price, int quantity) {
        this.pid = pid;
        this.price = price;
        this.quantity = quantity;
    }

    public int getPid() {
        return pid;
    }


    public float getPrice() {
        return price;
    }

    public int getQuantity() {
        return quantity;
    }

    @Override
    public String toString() {
        return "Product{" +
                "pid=" + pid +
                ", price=" + price +
                ", quantity=" + quantity +
                '}';
    }
}
