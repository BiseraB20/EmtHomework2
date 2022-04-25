package com.example.demo.service.impl;


import com.example.demo.model.Author;
import com.example.demo.model.Book;
import com.example.demo.model.Category;
import com.example.demo.model.Country;
import com.example.demo.model.dto.BookDto;
import com.example.demo.model.exceptions.AuthorNotFoundException;
import com.example.demo.model.exceptions.BookNotFoundException;
import com.example.demo.repository.jpa.AuthorRepository;
import com.example.demo.repository.jpa.BookRepository;
import com.example.demo.service.BookService;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class BookServiceImpl implements BookService {
    private final BookRepository bookRepository;
    private final AuthorRepository authorRepository;

    public BookServiceImpl(BookRepository bookRepository, AuthorRepository authorRepository) {
        this.bookRepository = bookRepository;
        this.authorRepository = authorRepository;
    }

    @Override
    @Transactional
    public List<Book> findAll() {
        return this.bookRepository.findAll();
    }

    @Override
    public Optional<Book> findById(Long id) {
        return this.bookRepository.findById(id);
    }

    @Override
    public Optional<Book> findByName(String name) {
        return this.bookRepository.findByName(name);
    }

    @Override
    public Optional<Book> save(String name, Category category, Author author, Integer availableCopies) {
        Book book = new Book(name, category, author, availableCopies);
        this.bookRepository.save(book);
        return Optional.of(book);
    }

    @Override
    public Optional<Book> save(BookDto bookDto) {
//        Author author = this.authorRepository.findByNameAndSurname(bookDto.getAuthorName(), bookDto.getAuthorSurname())
//                .orElseThrow(()->new AuthorNotFoundException());
        Author author=this.authorRepository.findById(bookDto.getIdAuthor()).orElseThrow(()->new AuthorNotFoundException());

        this.authorRepository.save(author);
      //  Category category = Category.valueOf(bookDto.getCategoryName());
        Category category = bookDto.getCategory();
        Book book = new Book(bookDto.getName(), category, author, bookDto.getAvailableCopies());
        this.bookRepository.save(book);
        return Optional.of(book);
    }

    @Override
    public void deleteById(Long id) {
        this.bookRepository.deleteById(id);
    }

    @Override
    public Optional<Book> edit(Long id, String name, Category category, Author author, Integer availableCopies) {
        Book book = this.bookRepository.findById(id).orElseThrow(() -> new BookNotFoundException(id));
        book.setName(name);
        book.setCategory(category);
        book.setAuthor(author);
        book.setAvailableCopies(availableCopies);
        this.bookRepository.save(book);
        return Optional.of(book);
    }

    @Override
    public Optional<Book> edit(Long id, BookDto bookDto) {
        Book book = this.bookRepository.findById(id).orElseThrow(() -> new BookNotFoundException(id));
//        Author author = this.authorRepository.findByNameAndSurname(bookDto.getAuthorName(), bookDto.getAuthorSurname())
//                .orElseThrow(() -> new AuthorNotFoundException());
        Author author=this.authorRepository.findById(bookDto.getIdAuthor()).orElseThrow(()->new AuthorNotFoundException());
     //   Category category = Category.valueOf(bookDto.getCategoryName());
        Category category = bookDto.getCategory();
        book.setName(bookDto.getName());
        book.setAuthor(author);
        book.setCategory(category);
        book.setAvailableCopies(bookDto.getAvailableCopies());
        this.bookRepository.save(book);

        return Optional.of(book);
    }

    @Override
    public Optional< Book> takenBook(Long id) {
        Book book=this.bookRepository.findById(id).orElseThrow(() -> new BookNotFoundException(id));
        book.setAvailableCopies(book.getAvailableCopies()-1);
        this.bookRepository.save(book);
        return Optional.of(book);
    }
}
