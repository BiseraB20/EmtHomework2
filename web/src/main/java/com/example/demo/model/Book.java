package com.example.demo.model;



import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    Long id;

    String name;

    @Enumerated(value= EnumType.STRING)
    Category category;

    @ManyToOne
  //  @JoinColumn(name = "author_id")
    Author author;

    Integer availableCopies;

    public Book(String name, Category category, Author author, Integer availableCopies) {
        this.name = name;
        this.category = category;
        this.author = author;
        this.availableCopies = availableCopies;
    }
    public Book(){

    }
}
