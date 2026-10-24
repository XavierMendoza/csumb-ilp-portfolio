package com.cst438.lab1.dto;

import jakarta.validation.constraints.*;
import java.math.BigDecimal;
import java.sql.Date;

public record OrderDTO(
    Integer orderId,
    Date orderDate,

    @NotNull(message = "item required")
    @Size(max = 20, message = "item length must be 20 or less")
    @Pattern(regexp = "[a-zA-Z0-9-]+", message = "invalid item")
    String item,

    @NotNull(message = "quantity required")
    @Positive(message = "quantity must be positive")
    @Max(value = 100, message = "quantity must be 100 or less")
    Integer quantity,

    @NotNull(message = "price required")
    @Positive(message = "price must be positive")
    @Digits(integer = 3, fraction = 2, message = "invalid price")
    BigDecimal price
) {
}