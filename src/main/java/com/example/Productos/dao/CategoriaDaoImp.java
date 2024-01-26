package com.example.Productos.dao;

import com.example.Productos.models.Categoria;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
@Repository
@Transactional
public class CategoriaDaoImp implements CategoriaDao{
    @PersistenceContext
    EntityManager entityManager;
    @Override
    @Transactional
    public List<Categoria> getCategorias() {
        String query = "FROM Categoria";
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public void eliminar(Integer id) {
        Categoria categoria = entityManager.find(Categoria.class, id);
        entityManager.remove(categoria);
    }

    @Override
    public void agregar(Categoria categoria) {
        entityManager.merge(categoria);
    }

    @Override
    public void editar(Integer id, Categoria categoria) {
        Categoria categoriaExistente = entityManager.find(Categoria.class, id);

        if (categoriaExistente != null) {
            categoriaExistente.setCategoria(categoria.getCategoria());

        }
    }

    @Override
    public Categoria getCategoria(Integer id) {
        return entityManager.find(Categoria.class, id);
    }
}
