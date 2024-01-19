package com.carrentalsystem2024.repository;

import com.carrentalsystem2024.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface CustomerRepository extends JpaRepository<Customer, Long>, JpaSpecificationExecutor<Customer> {
    // Benutzerdefinierte Abfragemethode, die Kunden basierend auf dem Namen findet
    List<Customer> findByNameContaining(String name);
}
