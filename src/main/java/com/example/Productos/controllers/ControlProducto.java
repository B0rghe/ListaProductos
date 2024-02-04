package com.example.Productos.controllers;

import com.example.Productos.dao.CategoriaDao;
import com.example.Productos.dao.ProductoDao;
import com.example.Productos.models.Categoria;
import com.example.Productos.models.Producto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ControlProducto {
    @Autowired
    private ProductoDao productoDao;
    @Autowired
    private CategoriaDao categoriaDao;


    @RequestMapping(value = "productos", method = RequestMethod.GET)
    public List<Producto> getProductos(){
        List<Producto> productos = new ArrayList<>();
        return productoDao.getProductos();
    }
    @RequestMapping(value = "productos/{id}", method = RequestMethod.DELETE)
    public void eliminarProducto(@PathVariable Integer id){
        productoDao.eliminar(id);
    }
    @RequestMapping(value = "productos", method = RequestMethod.POST)
    public ResponseEntity<String> agregarProducto(@RequestBody Producto producto) {
        try {
            productoDao.agregar(producto);
            return new ResponseEntity<>("Producto agregado correctamente", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error al agregar el producto: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
    @RequestMapping(value = "productos/{id}", method = RequestMethod.GET)
    public Producto getProducto(@PathVariable Integer id) {
        Producto producto = productoDao.getProducto(id);
        return producto;
    }
    @RequestMapping(value = "productos/{id}", method = RequestMethod.PUT)
    public void guardarEdicionProducto(@PathVariable Integer id, @RequestBody Producto producto) {
        productoDao.editar(id, producto);
    }

    @RequestMapping(value = "categorias-productos", method = RequestMethod.GET)
    public List<Categoria> getCategoriasProducto() {
        return categoriaDao.getCategorias();
    }
}