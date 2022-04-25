package com.example.demo.repository.jpa;


import com.example.demo.model.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CountryRepositroy extends JpaRepository<Country,Long> {
}
