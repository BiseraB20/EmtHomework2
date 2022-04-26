package com.example.demo.model.dto;

import com.example.demo.model.Category;
import lombok.Data;

@Data
public class BookDto {


    String name;


    Category category;

    Long idAuthor;

    Integer availableCopies;

    public BookDto() {
    }

    public BookDto(String name,Category category, Long idAuthor, Integer availableCopies) {
        this.name = name;
        this.category = category;
        this.idAuthor = idAuthor;
        this.availableCopies = availableCopies;
    }
}
