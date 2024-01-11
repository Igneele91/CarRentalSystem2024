package com.carrentalsystem2024.repository;

import com.carrentalsystem2024.Rental;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RentalRepository extends JpaRepository<Rental, Long> {
    // Zusätzliche benutzerdefinierte Methoden können hier hinzugefügt werden
}
