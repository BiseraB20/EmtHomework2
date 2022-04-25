package com.example.demo.web.rest;

import com.example.demo.model.Category;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("api/categories")
public class CategoriesRestController {

    @GetMapping
    private Category[] getCategories(){
        return Category.values();
    }
}
