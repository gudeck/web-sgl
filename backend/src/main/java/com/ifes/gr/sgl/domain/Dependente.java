package com.ifes.gr.sgl.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity(name = "DEPENDENTE")
@Getter
@Setter
public class Dependente extends Cliente {

    @ManyToOne
    @JoinColumn(name = "ID_RESPONSAVEL", nullable = false)
    private Socio responsavel;

}
