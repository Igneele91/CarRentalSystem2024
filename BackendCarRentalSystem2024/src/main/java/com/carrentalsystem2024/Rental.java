package com.carrentalsystem2024;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Rental {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Car car;

    @ManyToOne
    private Customer customer;

    // Getter und Setter für 'id'
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    // Getter und Setter für 'car'
    public Car getCar() {
        return car;
    }

    public void setCar(Car car) {
        this.car = car;
    }

    // Getter und Setter für 'customer'
    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    // Optional: Weitere Methoden, Konstruktoren, usw.
}
