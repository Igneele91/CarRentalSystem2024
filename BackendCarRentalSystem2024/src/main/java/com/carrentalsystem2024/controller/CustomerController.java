package com.carrentalsystem2024.controller;

import com.carrentalsystem2024.Customer;
import com.carrentalsystem2024.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customers")
public class CustomerController {
    private final CustomerService customerService;

    @Autowired
    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @GetMapping
    public ResponseEntity<List<Customer>> getAllCustomers() {
        List<Customer> customers = customerService.findAllCustomers();
        return ResponseEntity.ok(customers);
    }

    // Endpunkt für die Suche von Kunden nach Namen
    @GetMapping("/search")
    public ResponseEntity<List<Customer>> searchCustomers(@RequestParam String name) {
        List<Customer> customers = customerService.findCustomersByName(name);
        return ResponseEntity.ok(customers);
    }

    // Weitere Methoden für POST, PUT, DELETE...
}
