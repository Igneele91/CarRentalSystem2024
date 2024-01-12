package com.carrentalsystem2024.controller;

import com.carrentalsystem2024.Customer;
import com.carrentalsystem2024.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customers")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @GetMapping
    public List<Customer> getAllCustomers() {
        return customerService.findAllCustomers();
    }

    // Weitere Methoden für POST, PUT, DELETE...
}
