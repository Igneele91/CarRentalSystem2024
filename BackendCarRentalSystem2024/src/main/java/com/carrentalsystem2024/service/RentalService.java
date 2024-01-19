package com.carrentalsystem2024.service;

import com.carrentalsystem2024.Rental;
import com.carrentalsystem2024.repository.RentalRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RentalService {
    private final RentalRepository rentalRepository;

    public RentalService(RentalRepository rentalRepository) {
        this.rentalRepository = rentalRepository;
    }

    public List<Rental> findAllRentals() {
        return rentalRepository.findAll();
    }

    public Rental findRentalById(Long id) {
        Optional<Rental> rental = rentalRepository.findById(id);
        return rental.orElse(null);
    }

    public Rental createRental(Rental rental) {
        return rentalRepository.save(rental);
    }

    public void cancelRental(Long rentalId) {
        rentalRepository.deleteById(rentalId);
    }
}
