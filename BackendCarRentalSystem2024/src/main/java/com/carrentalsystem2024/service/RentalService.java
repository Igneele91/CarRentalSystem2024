package com.carrentalsystem2024.service;

import com.carrentalsystem2024.Rental;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.ArrayList;

@Service
public class RentalService {
    public void createRental(Rental rental) {
        // Logik zur Erstellung einer Mietvereinbarung
    }

    public void cancelRental(Long rentalId) {
        // Logik zum Beenden/Kündigen einer Mietvereinbarung
    }

    public List<Rental> findAllRentals() {
        // Logik, um alle Mietverträge zu finden und zurückzugeben
        return new ArrayList<>(); // Beispielrückgabe
    }
}
