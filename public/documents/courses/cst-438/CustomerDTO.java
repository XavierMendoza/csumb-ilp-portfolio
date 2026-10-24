package com.cst438.lab1.dto;

import jakarta.validation.constraints.*;

public record CustomerDTO(
    Integer customerId,

    @NotNull(message = "name required")
    @Size(max = 100, message = "name length must be 100 or less")
    @Pattern(regexp = "[a-zA-Z ]+", message = "invalid name")
    String name,

    @NotNull(message = "email required")
    @Email(message = "invalid email")
    @Size(max = 100, message = "email length must be 100 or less")
    String email,

    @NotNull(message = "password required")
    @Size(max = 100, message = "password length must be 100 or less")
    @Pattern(regexp = "[a-zA-Z0-9$]+", message = "invalid password")
    String password
) {
}