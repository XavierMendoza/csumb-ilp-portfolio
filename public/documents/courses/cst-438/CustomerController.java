package com.cst438.lab1.controller;

import com.cst438.lab1.domain.Customer;
import com.cst438.lab1.domain.Order;
import com.cst438.lab1.dto.CustomerDTO;
import com.cst438.lab1.dto.CustomerLoginDTO;
import com.cst438.lab1.dto.OrderDTO;
import com.cst438.lab1.repository.CustomerRepository;
import com.cst438.lab1.repository.OrderRepository;
import com.cst438.lab1.service.TokenService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.security.Principal;
import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

@RestController
public class CustomerController {

  private CustomerRepository customerRepository;
  private OrderRepository orderRepository;
  private TokenService tokenService;
  private PasswordEncoder passwordEncoder;

  public CustomerController(CustomerRepository customerRepository,
      OrderRepository orderRepository,
      TokenService tokenService,
      PasswordEncoder passwordEncoder) {
    this.customerRepository = customerRepository;
    this.orderRepository = orderRepository;
    this.tokenService = tokenService;
    this.passwordEncoder = passwordEncoder;
  }

  @PostMapping("/register")
  public CustomerDTO register(@Valid @RequestBody CustomerDTO dto) {

    Customer c = customerRepository.findCustomerByEmail(dto.email());

    if (c != null) {
      throw new ResponseStatusException(
          HttpStatus.BAD_REQUEST,
          "email already in use"
      );
    }

    c = new Customer();

    c.setEmail(dto.email());
    c.setName(dto.name());
    c.setPassword(passwordEncoder.encode(dto.password()));

    customerRepository.save(c);

    return new CustomerDTO(
        c.getCustomerId(),
        c.getName(),
        c.getEmail(),
        null
    );
  }

  @GetMapping("/login")
  public CustomerLoginDTO login(Authentication authentication) {

    Customer c = customerRepository.findCustomerByEmail(authentication.getName());

    return new CustomerLoginDTO(
        c.getCustomerId(),
        c.getName(),
        tokenService.generateToken(authentication)
    );
  }

  @PostMapping("/orders")
  public OrderDTO placeOrder(@Valid @RequestBody OrderDTO dto,
      Principal principal) {

    Customer c = customerRepository.findCustomerByEmail(principal.getName());

    Order order = new Order();

    order.setQuantity(dto.quantity());
    order.setItem(dto.item());
    order.setPrice(dto.price());
    order.setCustomer(c);
    order.setOrderDate(Date.valueOf(LocalDate.now()));

    orderRepository.save(order);

    return new OrderDTO(
        order.getOrderId(),
        order.getOrderDate(),
        order.getItem(),
        order.getQuantity(),
        order.getPrice()
    );
  }

  @GetMapping("/orders")
  public List<OrderDTO> getOrderHistory(Principal principal) {

    Customer c = customerRepository.findCustomerByEmail(principal.getName());

    return c.getOrders()
        .stream()
        .map(order -> new OrderDTO(
            order.getOrderId(),
            order.getOrderDate(),
            order.getItem(),
            order.getQuantity(),
            order.getPrice()
        ))
        .toList();
  }

  @PutMapping("/customers")
  public CustomerDTO updateCustomer(@RequestBody CustomerDTO dto,
      Principal principal) {

    Customer c = customerRepository.findCustomerByEmail(principal.getName());

    if (c == null) {
      throw new ResponseStatusException(
          HttpStatus.BAD_REQUEST,
          "invalid customer"
      );
    }

    if (dto.email() != null && !c.getEmail().equals(dto.email())) {
      throw new ResponseStatusException(
          HttpStatus.FORBIDDEN,
          "cannot change another customer profile"
      );
    }

    if (dto.name() != null) {
      c.setName(dto.name());
    }

    if (dto.password() != null) {
      c.setPassword(passwordEncoder.encode(dto.password()));
    }

    customerRepository.save(c);

    return new CustomerDTO(
        c.getCustomerId(),
        c.getName(),
        c.getEmail(),
        null
    );
  }

  @DeleteMapping("/customers")
  public void unregister(Principal principal) {

    Customer c = customerRepository.findCustomerByEmail(principal.getName());

    if (c == null) {
      throw new ResponseStatusException(
          HttpStatus.BAD_REQUEST,
          "invalid customer"
      );
    }

    customerRepository.delete(c);
  }
}