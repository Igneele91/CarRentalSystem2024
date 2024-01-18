package com.carrentalsystem2024.service;

import com.carrentalsystem2024.Rental;
import com.carrentalsystem2024.repository.RentalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class RentalService {
    private final RentalRepository rentalRepository;

    @Autowired
    public RentalService(RentalRepository rentalRepository) {
        this.rentalRepository = rentalRepository;
    }

    public List<Rental> findAllRentals() {
        return rentalRepository.findAll();
    }

    public Rental findRentalById(Long id) {
        return rentalRepository.findById(id).orElse(null);
    }

    public Rental createRental(Rental rental) {
        // Validiere die Mietbedingungen
        // und speichere die Mietvereinbarung
        return rentalRepository.save(rental);
    }

    public void cancelRental(Long rentalId) {
        // Logik zum Beenden/Kündigen einer Mietvereinbarung
        rentalRepository.deleteById(rentalId);
    }
}
