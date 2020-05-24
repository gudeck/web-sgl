package com.ifes.gr.sgl.service.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class ItemDTO {

    private Long id;
    private Long numeroSerie;
    private LocalDate dataAquisicao;
    private Long idTitulo;
    private Long idTipoItem;

}
