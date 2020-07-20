package com.ifes.gr.sgl.service.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class ClienteDTO {

    private Long id;
    private String nome;
    private LocalDate dataNascimento;
    private Boolean ativo;
    private SexoDTO sexo;

}
