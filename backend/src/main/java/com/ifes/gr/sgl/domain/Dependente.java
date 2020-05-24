package com.ifes.gr.sgl.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
@Getter
@Setter
public class Dependente extends Cliente {

    @ManyToOne
    @JoinColumn(name = "ID_RESPONSAVEL")
    private Socio responsavel;

}
