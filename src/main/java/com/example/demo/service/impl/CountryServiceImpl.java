package com.example.demo.service.impl;

import com.example.demo.model.Country;
import com.example.demo.repository.jpa.CountryRepositroy;
import com.example.demo.service.CountryService;
import org.springframework.stereotype.Service;

@Service
public class CountryServiceImpl implements CountryService {
    private final CountryRepositroy countryRepositroy;

    public CountryServiceImpl(CountryRepositroy countryRepositroy) {
        this.countryRepositroy = countryRepositroy;
    }

    @Override
    public Country save(String name, String contient) {
        return this.countryRepositroy.save(new Country(name,contient));
    }
}
