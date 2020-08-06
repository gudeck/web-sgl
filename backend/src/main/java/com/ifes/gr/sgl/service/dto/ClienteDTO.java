package com.ifes.gr.sgl.service.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class ClienteDTO {

    private Long id;
    private String nome;
    private LocalDateTime dataNascimento;
    private Boolean ativo;
    private SexoDTO sexo;

}
