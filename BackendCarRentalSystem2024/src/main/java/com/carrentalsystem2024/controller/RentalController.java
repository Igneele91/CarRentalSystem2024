package com.carrentalsystem2024.controller;

import com.carrentalsystem2024.Rental;
import com.carrentalsystem2024.service.RentalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rentals")
public class RentalController {

    @Autowired
    private RentalService rentalService;

    @GetMapping
    public ResponseEntity<List<Rental>> getAllRentals() {
        List<Rental> rentals = rentalService.findAllRentals();
        return ResponseEntity.ok(rentals);
    }

    // Endpunkt zur Erstellung einer Mietvereinbarung
    @PostMapping
    public ResponseEntity<Rental> createRental(@RequestBody Rental rental) {
        Rental newRental = rentalService.createRental(rental);
        return ResponseEntity.ok(newRental);
    }

    // Weitere Endpunkte nach Bedarf
}
