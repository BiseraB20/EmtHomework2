package com.example.demo.service;



import com.example.demo.model.Author;
import com.example.demo.model.Book;
import com.example.demo.model.Category;
import com.example.demo.model.dto.BookDto;

import java.util.List;
import java.util.Optional;

public interface BookService {
    List<Book> findAll();

    Optional<Book> findById(Long id);

    Optional<Book> findByName(String name);

    Optional<Book> save(String name, Category category, Author author, Integer availableCopies);

    Optional <Book> save(BookDto bookDto);

    void deleteById(Long id);

    Optional<Book> edit(Long id, String name, Category category, Author author, Integer availableCopies);
    Optional<Book> edit(Long id, BookDto bookDto);

    Optional<Book> takenBook(Long id);

}
