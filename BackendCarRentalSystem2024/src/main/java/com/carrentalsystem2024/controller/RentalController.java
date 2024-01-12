package com.carrentalsystem2024.controller;

import com.carrentalsystem2024.Rental;
import com.carrentalsystem2024.service.RentalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rentals")
public class RentalController {

    @Autowired
    private RentalService rentalService;

    @GetMapping
    public List<Rental> getAllRentals() {
        return rentalService.findAllRentals();
    }

    // Weitere Methoden für POST, PUT, DELETE...
}
