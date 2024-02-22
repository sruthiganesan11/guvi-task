package com.guvi.spring.sql.domain;

public class Book {
    private int id;
    private String name;
    private String bookName;
    private String feedBack;

    public Book(int id, String name, String bookName, String feedBack) {
        this.id = id;
        this.name = name;
        this.bookName = bookName;
        this.feedBack = feedBack;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public String getFeedBack() {
        return feedBack;
    }

    public void setFeedBack(String feedBack) {
        this.feedBack = feedBack;
    }

    @Override
    public String toString() {
        return "Books{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", bookName='" + bookName + '\'' +
                ", feedBack='" + feedBack + '\'' +
                '}';
    }
}
