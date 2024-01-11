package com.carrentalsystem2024.repository;

import com.carrentalsystem2024.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
    // Zusätzliche benutzerdefinierte Methoden können hier hinzugefügt werden
}
