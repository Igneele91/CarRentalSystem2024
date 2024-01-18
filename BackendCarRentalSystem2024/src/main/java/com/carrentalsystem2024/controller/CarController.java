package com.carrentalsystem2024.controller;

import com.carrentalsystem2024.Car;
import com.carrentalsystem2024.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cars")
public class CarController {
    @Autowired
    private CarService carService;

    @GetMapping
    public List<Car> getAllCars() {
        return carService.findAllCars();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Car> getCarById(@PathVariable Long id) {
        Car car = carService.findCarById(id);
        return ResponseEntity.ok(car);
    }

    @PostMapping
    public ResponseEntity<Car> addCar(@RequestBody Car car) {
        Car newCar = carService.addCar(car);
        return ResponseEntity.ok(newCar);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Car> updateCar(@PathVariable Long id, @RequestBody Car carDetails) {
        Car updatedCar = carService.updateCar(id, carDetails);
        return ResponseEntity.ok(updatedCar);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCar(@PathVariable Long id) {
        carService.deleteCar(id);
        return ResponseEntity.ok().build();
    }

    // Endpunkt für die Suche und Filterung von Autos
    @GetMapping("/search")
    public ResponseEntity<List<Car>> searchCars(/* Deine Filterparameter */) {
        List<Car> cars = carService.findCarsWithCriteria(/* Deine Filterparameter */);
        return ResponseEntity.ok(cars);
    }
}
