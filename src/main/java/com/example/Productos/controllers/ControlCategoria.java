package com.example.Productos.controllers;

import com.example.Productos.dao.CategoriaDao;
import com.example.Productos.models.Categoria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ControlCategoria {
    @Autowired
    private CategoriaDao categoriaDao;

    @RequestMapping(value = "categorias", method = RequestMethod.GET)
    public List<Categoria> getCategoria(){
        List<Categoria> categorias = new ArrayList<>();
        return categoriaDao.getCategorias();
    }
    @RequestMapping(value = "categorias/{id}", method = RequestMethod.DELETE)
    public void eliminarCategoria(@PathVariable Integer id){
        categoriaDao.eliminar(id);
    }

    @RequestMapping(value = "categorias", method = RequestMethod.POST)
    public void agregarCategoria(@RequestBody Categoria categoria){
        categoriaDao.agregar(categoria);
    }



    @RequestMapping(value = "categorias/{id}", method = RequestMethod.GET)
    public Categoria getCategoria(@PathVariable Integer id) {
        Categoria categoria = categoriaDao.getCategoria(id);
        return categoria;
    }
    @RequestMapping(value = "categorias/{id}", method = RequestMethod.PUT)
    public void guardarEdicionCategoria(@PathVariable Integer id, @RequestBody Categoria categoria) {
        categoriaDao.editar(id, categoria);
    }
}
