package com.carrentalsystem2024.service;

import com.carrentalsystem2024.Customer;
import com.carrentalsystem2024.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {
    private final CustomerRepository customerRepository;

    @Autowired
    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public List<Customer> findAllCustomers() {
        return customerRepository.findAll();
    }

    public Customer findCustomerById(Long id) {
        return customerRepository.findById(id).orElse(null);
    }

    public Customer addCustomer(Customer customer) {
        // Input-Validierung und Geschäftslogik hinzufügen
        return customerRepository.save(customer);
    }

    public Customer updateCustomer(Long id, Customer customerDetails) {
        // Input-Validierung, Geschäftslogik und Update-Logik hinzufügen
        Optional<Customer> customer = customerRepository.findById(id);
        if(customer.isPresent()) {
            Customer updatedCustomer = customer.get();
            updatedCustomer.setName(customerDetails.getName());
            updatedCustomer.setEmail(customerDetails.getEmail());
            // Weitere Felder aktualisieren
            return customerRepository.save(updatedCustomer);
        }
        return null;
    }

    public void deleteCustomer(Long id) {
        customerRepository.deleteById(id);
    }
}
