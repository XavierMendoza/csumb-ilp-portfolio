package com.cst438.lab1.repository;

import com.cst438.lab1.domain.Order;
import org.springframework.data.repository.CrudRepository;

public interface OrderRepository extends CrudRepository<Order, Integer> {

}