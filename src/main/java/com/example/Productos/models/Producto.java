package com.example.Productos.models;

import lombok.Getter;
import lombok.Setter;

public class Producto {
    @Getter @Setter
    private Integer id;
    @Getter @Setter
    private String descripcion;
    @Getter @Setter
    private String marca;
    @Getter @Setter
    private String precio;
}
