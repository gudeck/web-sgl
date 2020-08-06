package com.ifes.gr.sgl.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

@Entity(name = "TITULO")
@Getter
@Setter
public class Titulo implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "NOME", nullable = false, length = 80)
    private String nome;

    @Column(name = "ANO", nullable = false)
    private LocalDateTime ano;

    @Column(name = "SINOPSE", nullable = false, length = 400)
    private String sinopse;

    @ManyToOne
    @JoinColumn(name = "ID_CATEGORIA", nullable = false)
    private Categoria categoria;

    @ManyToOne
    @JoinColumn(name = "ID_DIRETOR", nullable = false)
    private Diretor diretor;

    @ManyToOne
    @JoinColumn(name = "ID_CLASSE", nullable = false)
    private Classe classe;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "TITULO_ATOR",
            joinColumns = @JoinColumn(name = "ID_TITULO", referencedColumnName = "ID"),
            inverseJoinColumns = @JoinColumn(name = "ID_ATOR", referencedColumnName = "ID"))
    private List<Ator> atores;

}
