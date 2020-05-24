package com.ifes.gr.sgl.service.dto;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
public class ClasseDTO {

    private Long id;
    private String nome;
    private BigDecimal valor;
    private Integer prazoDevolucao;

}
