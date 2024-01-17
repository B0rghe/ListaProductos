package com.example.Productos.controllers;

import com.example.Productos.dao.ProductoDao;
import com.example.Productos.models.Producto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    }
    @RequestMapping(value = "productos/{id}", method = RequestMethod.DELETE)
    public void eliminar(@PathVariable Integer id){
        productoDao.eliminar(id);
    }

    @RequestMapping(value = "productos", method = RequestMethod.POST)
    public void agregarProducto(@RequestBody Producto producto){
       productoDao.agregar(producto);
    }
}
