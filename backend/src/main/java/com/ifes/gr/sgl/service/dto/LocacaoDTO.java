package com.ifes.gr.sgl.service.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class LocacaoDTO {

    private Long id;
    private LocalDate dataLocacao;
    private LocalDate dataDevolucaoPrevista;
    private LocalDate dataDevolucao;
    private Double valor;
    private Double multa;
    private Long idItem;
    private Long idCliente;

}
