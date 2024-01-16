package com.example.Productos.controllers;

import com.example.Productos.dao.ProductoDao;
import com.example.Productos.models.Producto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ControlProducto {
    @Autowired
    private ProductoDao productoDao;

    @RequestMapping(value = "productos", method = RequestMethod.GET)
    public List<Producto> getProductos(){
        List<Producto> productos = new ArrayList<>();
        return productoDao.getProductos();

    /*    Producto producto = new Producto();
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

        return productos;  */
    }
    @RequestMapping(value = "productos/{id}", method = RequestMethod.DELETE)
    public void eliminar(@PathVariable Integer id){
        productoDao.eliminar(id);
    }
}
