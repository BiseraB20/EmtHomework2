package com.example.demo.web.rest;


import com.example.demo.model.Book;
import com.example.demo.model.dto.BookDto;
import com.example.demo.service.BookService;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/books")
public class BookRestController {
    private final BookService bookService;

    public BookRestController(BookService bookService) {
        this.bookService = bookService;
    }

    /**
     * Listing all books in the data base
     **/
    @GetMapping
    private List<Book> findAll() {
        List<Book> books=this.bookService.findAll();
        return books;
    }

    /**
     * Getting only information about certain book
     **/
    @GetMapping("/{id}")
    public ResponseEntity<Book> findById(@PathVariable Long id) {
        return this.bookService.findById(id)
                .map(book -> ResponseEntity.ok().body(book))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }
    /**Client has taken one book,
     * set the new available copies and then get the books **/
    @PostMapping("/markAsTaken/{id}")
    public ResponseEntity<Book> markAsTaken(@PathVariable Long id){
        return this.bookService.takenBook(id)
                .map(book -> ResponseEntity.ok().body(book))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }
    /**
     * We send only an object that should be saved in the data base
     **/

    @PostMapping("/add")
    public ResponseEntity<Book> save(@RequestBody BookDto bookDto) {
        return this.bookService.save(bookDto).map(book -> ResponseEntity.ok().body(book))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }
    /** Edditing some book by it's id **/

    @PutMapping("/edit/{id}")
    public ResponseEntity<Book> save(@PathVariable Long id, @RequestBody BookDto bookDto) {
        return this.bookService.edit(id, bookDto)
                .map(product -> ResponseEntity.ok().body(product))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    /**
     * Remove the book from the list
     **/
    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteById(@PathVariable Long id) {
        this.bookService.deleteById(id);
        if (this.bookService.findById(id).isEmpty()) return ResponseEntity.ok().build();
        else
            return ResponseEntity.badRequest().build();

    }
}
