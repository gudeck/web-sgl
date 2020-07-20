package com.ifes.gr.sgl.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.time.LocalDate;

@Entity(name = "LOCACAO")
@Getter
@Setter
public class Locacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "DATA_LOCACAO", nullable = false)
    private LocalDate dataLocacao;

    @Column(name = "DATA_DEVOLUCAO_PREVISTA", nullable = false)
    private LocalDate dataDevolucaoPrevista;

    @Column(name = "DATA_DEVOLUCAO")
    private LocalDate dataDevolucao;

    @Column(name = "VALOR", nullable = false)
    private Double valor;

    @Column(name = "MULTA")
    private Double multa;

    @ManyToOne
    @JoinColumn(name = "ID_ITEM", nullable = false)
    private Item item;

    @ManyToOne
    @JoinColumn(name = "ID_CLIENTE", nullable = false)
    private Cliente cliente;

}
