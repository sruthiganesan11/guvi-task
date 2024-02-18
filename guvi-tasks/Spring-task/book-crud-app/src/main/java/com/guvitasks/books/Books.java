package com.guvitasks.books;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Books {
   @Id
    private int id;
    private String name;
    private String bookName;
    private String feedback;

    public Books() {
    }

    public Books(int id,String name, String bookName, String feedback) {
        this.id = id;
        this.name = name;
        this.bookName = bookName;
        this.feedback = feedback;
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

    public String getFeedback() {
        return feedback;
    }

    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }

    @Override
    public String toString() {
        return "Books{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", bookName='" + bookName + '\'' +
                ", feedback='" + feedback + '\'' +
                '}';
    }
}
