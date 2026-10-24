package com.cst438.lab1.dto;

public record CustomerLoginDTO(
    Integer customerId,
    String name,
    String token
) {
}