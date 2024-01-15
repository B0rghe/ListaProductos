package com.example.Productos.controllers;

import com.example.Productos.models.Producto;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ControlProducto {
    @RequestMapping(value = "productos")
    public List<Producto> getProducto(){
        List<Producto> productos = new ArrayList<>();
        Producto producto = new Producto();
        producto.setId(1);
        producto.setDescripcion("Heladera");
        producto.setMarca("Samsung");
        producto.setPrecio("$20000");

        Producto producto2 = new Producto();
        producto2.setId(2);
        producto2.setDescripcion("Lavarropas");
        producto2.setMarca("Drean");
        producto2.setPrecio("$35000");

        Producto producto3 = new Producto();
        producto3.setId(3);
        producto3.setDescripcion("Cocina");
        producto3.setMarca("Longvie");
        producto3.setPrecio("$18000");

        productos.add(producto);
        productos.add(producto2);
        productos.add(producto3);

        return productos;
    }
}
