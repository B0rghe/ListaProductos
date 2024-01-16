package com.example.Productos.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
@Entity @Table(name = "listaproductos")
public class Producto {
    @Id @Getter @Setter @Column(name = "id")
    private Integer id;
    @Getter @Setter @Column(name = "descripcion")
    private String descripcion;
    @Getter @Setter @Column(name = "marca")
    private String marca;
    @Getter @Setter @Column(name = "precio")
    private String precio;
}
