package com.example.Productos.dao;

import com.example.Productos.models.Producto;
import java.util.List;
public interface ProductoDao {
    List<Producto> getProductos();

    void eliminar(Integer id);

    void agregar(Producto producto);

    void editar(Integer id, Producto producto);

    Producto getProducto(Integer id);
}