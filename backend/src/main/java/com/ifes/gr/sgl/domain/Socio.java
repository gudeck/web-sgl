package com.ifes.gr.sgl.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
@Getter
@Setter
public class Socio extends Cliente {

    @Column(name = "CPF", nullable = false, length = 11)
    private String cpf;

    @Column(name = "ENDERECO", nullable = false, length = 200)
    private String endereco;

    @Column(name = "TELEFONE", nullable = false, length = 12)
    private String telefone;

}
