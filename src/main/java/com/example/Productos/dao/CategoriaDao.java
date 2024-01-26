package com.example.Productos.dao;

import com.example.Productos.models.Categoria;
import java.util.List;

public interface CategoriaDao {
    List<Categoria> getCategorias();

    void eliminar(Integer id);

    void agregar(Categoria categoria);

    void editar(Integer id, Categoria categoria);

    Categoria getCategoria(Integer id);
}
