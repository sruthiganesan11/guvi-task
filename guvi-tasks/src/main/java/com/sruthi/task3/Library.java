package com.sruthi.task3;

public class Library {
    private final Book[] books;
    private final int capacity;
    int count;

    public Library(int maxNumOfBooks) {
        this.capacity = maxNumOfBooks;
        this.books = new Book[this.capacity];
    }

    public void addBook(Book book) {
        if(count < books.length) {
            books[count] = book;
            count++;
            System.out.println("\tBooks successfully added");
        }else {
            System.out.println("count "+ count);
            System.out.println("capacity " + capacity);
            System.out.println("Library is full! Unable to add");
        }
    }

    public void removeBook(int bookId) {
        for (int i = 0; i < count; i++) {
            if(books[i].getBookId() == bookId) {
                books[i] = null;
                count --;
                System.out.println("\tBooks removed successfully");
            }
        }
    }

    public Book searchBook(int bookId) {
        for (int i = 0; i < count; i++) {
            if(books[i].getBookId() == bookId){
                return books[i];
            }
        }
        return null;
    }

    public Book replaceBook(int bookId, Book newBook) {
        int findBookIndex = -1;
        for (int i = 0; i < count; i++) {
            if (books[i].getBookId() == bookId){
                findBookIndex = i;
                break;
            }
        }
        if(findBookIndex != -1) {
            books[findBookIndex] = newBook;
            System.out.println("\tBook replaced successfully");
        }else{
            System.out.println(newBook + "book not found, book is not replaced");
        }
        return newBook;
    }

    public void displayBooks(){
        if(count == 0) {
            System.out.println("No Books in the library");
        }else {
            System.out.println("Books in the library");
            for (int i = 0; i < capacity; i++) {
                Book book = books[i];
                if(book != null) {
                    System.out.println("\tBook id: " + book.getBookId() + " Title: " + book.getTitle()
                            + "Author: " + book.getAuthor());
                }
            }
        }
    }
}