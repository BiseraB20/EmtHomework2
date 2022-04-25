package com.example.demo.config;

import com.example.demo.model.Author;
import com.example.demo.model.Category;
import com.example.demo.model.Country;
import com.example.demo.service.AuthorService;
import com.example.demo.service.BookService;
import com.example.demo.service.CountryService;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@Component
public class DataInitializer {

    private final AuthorService authorService;
    private final BookService bookService;
    private final CountryService countryService;

    public DataInitializer(AuthorService authorService, BookService bookService, CountryService countryService) {
        this.authorService = authorService;
        this.bookService = bookService;
        this.countryService = countryService;
    }

    @PostConstruct
    public void initData(){
        List<Country> countryList=new ArrayList<>();
        List<Author> authorList=new ArrayList<>();
        for(int i=0;i<=5;i++){
       countryList.add( this.countryService.save("Name"+i,"Continent"+i))    ;
        }
        for(int i=0;i<=5;i++){
         authorList.add(this.authorService.save("Name"+i,"Surname"+i,countryList.get(i)))   ;
        }


    }
}
