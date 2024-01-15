package com.example.Productos.controllers;

import com.example.Productos.models.Producto;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ControlProducto {
    @RequestMapping(value = "productos")
    public Producto getProducto(){
        Producto producto = new Producto();
        producto.setId(1);
        producto.setDescripcion("Heladera");
        producto.setMarca("Samsung");
        producto.setPrecio("$20000");

        return producto;
    }
}
