package com.example.demo.service;

import com.example.demo.model.Author;
import com.example.demo.model.Country;

import java.util.List;

public interface AuthorService {
    List<Author> findAll();
    public Author save(String name, String surname, Country country);
}
