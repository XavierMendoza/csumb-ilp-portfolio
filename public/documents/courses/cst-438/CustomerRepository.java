package com.cst438.lab1.repository;

import com.cst438.lab1.domain.Customer;
import org.springframework.data.repository.CrudRepository;

public interface CustomerRepository extends CrudRepository<Customer, Integer> {

  Customer findCustomerByEmail(String email);
}