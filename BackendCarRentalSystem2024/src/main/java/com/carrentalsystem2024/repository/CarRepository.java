package com.carrentalsystem2024.repository;

import com.carrentalsystem2024.Car;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepository extends JpaRepository<Car, Long> {
    // Zusätzliche benutzerdefinierte Methoden können hier hinzugefügt werden
}
