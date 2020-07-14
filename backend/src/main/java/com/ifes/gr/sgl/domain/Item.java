package com.ifes.gr.sgl.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.time.LocalDate;

@Entity(name = "ITEM")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@Getter
@Setter
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "NUMERO_SERIE", nullable = false)
    private Long numeroSerie;

    @Column(name = "DATA_AQUISICAO", nullable = false)
    private LocalDate dataAquisicao;

    @ManyToOne
    @JoinColumn(name = "ID_TITULO", nullable = false)
    private Titulo titulo;

    @ManyToOne
    @JoinColumn(name = "ID_TIPO_ITEM", nullable = false)
    private TipoItem tipoItem;

}
