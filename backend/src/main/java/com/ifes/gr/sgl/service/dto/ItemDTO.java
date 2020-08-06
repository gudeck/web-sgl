package com.ifes.gr.sgl.service.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class ItemDTO {

    private Long id;
    private Long numeroSerie;
    private LocalDateTime dataAquisicao;
    private TituloDTO titulo;
    private TipoItemDTO tipoItem;

}
