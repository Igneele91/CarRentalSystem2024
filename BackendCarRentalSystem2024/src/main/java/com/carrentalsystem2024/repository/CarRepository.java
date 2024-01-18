package com.carrentalsystem2024.repository;

import com.carrentalsystem2024.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import java.util.List;  // Importiere die List-Klasse

public interface CarRepository extends JpaRepository<Car, Long>, JpaSpecificationExecutor<Car> {
    // Hier kannst du benutzerdefinierte Abfragemethoden definieren, z.B.:

    // Methode, um Autos basierend auf dem Modell zu finden
    List<Car> findByModel(String model);

    // Methode, um Autos basierend auf der Verfügbarkeit zu finden
    List<Car> findByAvailable(boolean available);

    // Weitere benutzerdefinierte Methoden können hier hinzugefügt werden
}
