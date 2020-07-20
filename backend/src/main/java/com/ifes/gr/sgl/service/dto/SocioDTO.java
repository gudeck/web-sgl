package com.ifes.gr.sgl.service.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class SocioDTO extends ClienteDTO {

    private String cpf;
    private String endereco;
    private String telefone;
    private List<DependenteDTO> dependentes;

}
