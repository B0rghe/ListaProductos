package com.example.Productos.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "categorias")
public class Categoria {
    @Id @Getter @Setter @Column(name = "id") @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
    @Getter @Setter @Column(name = "categoria")
    private String categoria;
}
