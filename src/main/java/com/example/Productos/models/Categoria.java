package com.example.Productos.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.util.List;

@Entity
@Table(name = "categorias")
public class Categoria {
    @Id @Getter @Setter @Column(name = "id") @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
    @Getter @Setter @Column(name = "nombrecategoria")
    private String nombrecategoria;
    @OneToMany(mappedBy = "categoria_id")
    private List<Producto> productos;
}
