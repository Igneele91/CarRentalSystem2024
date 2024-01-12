package com.carrentalsystem2024.service;

import com.carrentalsystem2024.Car;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.ArrayList;

@Service
public class CarService {
    public void addCar(Car car) {
        // Logik zum Hinzufügen eines Autos
    }

    public void deleteCar(Long carId) {
        // Logik zum Löschen eines Autos
    }

    public List<Car> findAllCars() {
        // Logik, um alle Autos zu finden und zurückzugeben
        return new ArrayList<>(); // Beispielrückgabe
    }
}
