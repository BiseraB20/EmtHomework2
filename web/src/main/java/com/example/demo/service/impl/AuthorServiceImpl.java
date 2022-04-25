package com.example.demo.service.impl;

import com.example.demo.model.Author;
import com.example.demo.model.Country;
import com.example.demo.repository.jpa.AuthorRepository;
import com.example.demo.service.AuthorService;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
@Service
public class AuthorServiceImpl implements AuthorService {
    private final AuthorRepository authorRepository;

    public AuthorServiceImpl(AuthorRepository authorRepository) {
        this.authorRepository = authorRepository;
    }

    @Override
    @Transactional
    public List<Author> findAll() {
     return   this.authorRepository.findAll();
    }

    @Override
    public Author save(String name, String surname, Country country) {
     return    this.authorRepository.save(new Author(name,surname,country));
    }
}
