package com.carrentalsystem2024.service;

import com.carrentalsystem2024.Car;
import com.carrentalsystem2024.repository.CarRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CarService {
    private final CarRepository carRepository;

    public CarService(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    public List<Car> findAllCars() {
        return carRepository.findAll();
    }

    public Car findCarById(Long id) {
        Optional<Car> car = carRepository.findById(id);
        return car.orElse(null);
    }

    public Car addCar(Car car) {
        // Input-Validierung und Geschäftslogik hinzufügen
        return carRepository.save(car);
    }

    public Car updateCar(Long id, Car carDetails) {
        // Input-Validierung, Geschäftslogik und Update-Logik hinzufügen
        Optional<Car> car = carRepository.findById(id);
        if (car.isPresent()) {
            Car updatedCar = car.get();
            updatedCar.setMake(carDetails.getMake());
            updatedCar.setModel(carDetails.getModel());
            // Weitere Felder aktualisieren
            return carRepository.save(updatedCar);
        }
        return null;
    }

    public void deleteCar(Long id) {
        carRepository.deleteById(id);
    }

    // Methode zum Filtern von Autos
    public List<Car> findCarsWithCriteria(/* Deine Filterparameter */) {
        // Implementiere die Filterlogik basierend auf den Parametern
        // und gebe die gefilterten Ergebnisse zurück
        return null;
    }
}

