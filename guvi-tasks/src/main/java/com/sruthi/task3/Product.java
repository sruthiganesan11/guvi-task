package com.sruthi.task3;

public class Product implements Taxable{
    private int pid;
    private float price;
    private int quantity;

    public Product(int pid, float price, int quantity) {
        this.pid = pid;
        this.price = price;
        this.quantity = quantity;
    }

    @Override
    public float calcTax() {
        return SALES_TAX  * quantity;
    }
}
