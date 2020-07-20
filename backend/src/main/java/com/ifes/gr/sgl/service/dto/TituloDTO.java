package com.ifes.gr.sgl.service.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
public class TituloDTO {

    private Long id;
    private String nome;
    private LocalDate ano;
    private String sinopse;
    private CategoriaDTO categoria;
    private DiretorDTO diretor;
    private ClasseDTO classe;
    private List<AtorDTO> atores;

}
