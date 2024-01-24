package com.example.Productos.dao;

import com.example.Productos.models.Producto;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
@Repository
@Transactional
public class ProductoDaoImp implements ProductoDao{
    @PersistenceContext
    EntityManager entityManager;
    @Override
    @Transactional
    public List<Producto> getProductos() {
        String query = "FROM Producto";
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public void eliminar(Integer id) {
        Producto producto = entityManager.find(Producto.class, id);
        entityManager.remove(producto);
    }

    @Override
    public void agregar(Producto producto) {
        entityManager.merge(producto);
    }

    @Override
    public void editar(Integer id, Producto producto) {
        Producto productoExistente = entityManager.find(Producto.class, id);

        if (productoExistente != null) {
            productoExistente.setDescripcion(producto.getDescripcion());
            productoExistente.setCategoria(producto.getCategoria());
            productoExistente.setMarca(producto.getMarca());
            productoExistente.setPrecio(producto.getPrecio());
            productoExistente.setImagen(producto.getImagen());

        }
    }

    @Override
    public Producto getProducto(Integer id) {
        return entityManager.find(Producto.class, id);
    }
}
