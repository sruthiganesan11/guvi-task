package com.sruthi.task3;

public class Book {
    private int bookId;
    private String title;
    private String author;
    private boolean isAvailable = true;

    public Book(int bookId, String title, String author) {
        this.bookId = bookId;
        this.title = title;
        this.author = author;
    }

    public int getBookId() {
        return bookId;
    }

    public String getTitle() {
        return title;
    }

    public String getAuthor() {
        return author;
    }

    public boolean isAvailable() {
        return isAvailable;
    }

    public void setAvailable(boolean available) {
        isAvailable = available;
    }

    @Override
    public String toString() {
        return "bookId: " + bookId +
                ", title: " + title +
                ", author: " + author;
    }
}
