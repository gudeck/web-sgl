package com.ifes.gr.sgl.service.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class LocacaoDTO {

    private Long id;
    private LocalDateTime dataLocacao;
    private LocalDateTime dataDevolucaoPrevista;
    private LocalDateTime dataDevolucao;
    private Double valor;
    private Double multa;
    private ItemDTO item;
    private ClienteDTO cliente;

}
