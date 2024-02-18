package com.guvitasks.books;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/books")
public class RestApiBooksController {

    private final BookRepository bookRepository;


    public RestApiBooksController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
        this.bookRepository.save(new Books(1,"Jack", "Harry Potter", "Interesting book and it has eight parts with many twists"));
        this.bookRepository.save(new Books(2,"Elena", "Beauty and the beast", "fantasy story of beast and and girl"));
    }

    @GetMapping
    public Iterable<Books> getBooks() {
        return this.bookRepository.findAll();
    }

    @GetMapping("/{id}")
    Optional<Books> getBooksById(@PathVariable int id) {
        return this.bookRepository.findById(id);
    }

    @PostMapping(value = "",consumes = "application/json")
    Books postBook(@RequestBody Books book) {
        Books savedBooks = this.bookRepository.save(book);
        return savedBooks;
    }

    @PutMapping(value = "/{id}",consumes = "application/json")
    ResponseEntity<Books> putBook(@PathVariable int id,@RequestBody Books books) {
        boolean isBookExist = this.bookRepository.existsById(id);

        if(isBookExist) {
            var booksResponseEntity = new ResponseEntity<Books>(this.bookRepository.save(books), HttpStatus.OK);
            return booksResponseEntity;
        }else {
            var booksResponseEntity = new ResponseEntity<Books>(this.bookRepository.save(books),HttpStatus.CREATED);
            return booksResponseEntity;
        }
    }

    @DeleteMapping("/{id}")
    void deleteBook(@PathVariable int id) {
        this.bookRepository.deleteById(id);
    }
}