package com.sruthi.task3;

import java.util.Scanner;

public class BookManagementSystem {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter the Number of Books you want:");
        int capacity = scanner.nextInt();
        Library library = new Library(capacity);
        int initialNumOFBooks = 3;
        Book b1 = new Book(101, "HarryPotter ", "J.K.Rowling");
        Book b2 = new Book(102, "The Summer I Turned Pretty ", "Jenny han");
        Book b3 = new Book(103, "Twilight ", "Stephenie Meyer");
        Book b4 = new Book(104, "Ponniyin Selvan ", "Kalki Krishnamurthy");
        Book b5 = new Book(105, "To all the boys ", "Jenny han");
        Book b6 = new Book(106, "The Hogwarts Library ", "J.K.Rowling");
        Book b7 = new Book(108, "Midnight sun ", "Stephenie Meyer");
        System.out.println("Adding " + initialNumOFBooks + " books to library:");
        library.addBook(b1);
        library.addBook(b2);
        library.addBook(b3);

        System.out.println();

        System.out.println("Please enter the book id need to be searched:");
        int bookId = scanner.nextInt();
        System.out.println("Search book " + bookId);
        Book searchedBooks = library.searchBook(bookId);
        if (searchedBooks != null) {
            System.out.println("Book found: " + searchedBooks);
        } else {
            System.out.println("Book not found " + searchedBooks);
        }

        System.out.println();

        System.out.println("Please enter the book id need to be replaced:");
        int replaceBookId = scanner.nextInt();
        System.out.println("Please enter the book id");
        int bookID = scanner.nextInt();

        System.out.println("Please enter the book name");
        scanner.nextLine();
        String bookName = scanner.nextLine();

        System.out.println("Please enter the author of the book");
        String authorName = scanner.nextLine();
        Book newBook = new Book(bookID, bookName, authorName);
        System.out.println("Replacing book...");
        Book replacedBook = library.replaceBook(replaceBookId, newBook);
        System.out.println("Book replaced successfully\t" + replacedBook);

        System.out.println();

        System.out.println("Please enter the book id need to be removed");
        int removeBookId = scanner.nextInt();
        System.out.println("removing book from the library");
        library.removeBook(removeBookId);

        System.out.println();

        library.displayBooks();


    }
}
