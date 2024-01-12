package com.carrentalsystem2024.service;

import com.carrentalsystem2024.Customer;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.ArrayList;

@Service
public class CustomerService {
    public void addCustomer(Customer customer) {
        // Logik zum Hinzufügen eines Kunden
    }

    public void deleteCustomer(Long customerId) {
        // Logik zum Löschen eines Kunden
    }

    public List<Customer> findAllCustomers() {
        // Logik, um alle Kunden zu finden und zurückzugeben
        return new ArrayList<>(); // Beispielrückgabe
    }
}
