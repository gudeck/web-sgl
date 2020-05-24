package com.ifes.gr.sgl.service.mapper;

import com.ifes.gr.sgl.domain.Titulo;
import com.ifes.gr.sgl.service.dto.TituloDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = {AtorMapper.class})
public interface TituloMapper extends EntityMapper<TituloDTO, Titulo> {

    @Override
    @Mapping(target = "categoria.id", source = "idCategoria")
    @Mapping(target = "diretor.id", source = "idDiretor")
    @Mapping(target = "classe.id", source = "idClasse")
    Titulo toEntity(TituloDTO dto);

    @Override
    @Mapping(target = "idCategoria", source = "categoria.id")
    @Mapping(target = "idDiretor", source = "diretor.id")
    @Mapping(target = "idClasse", source = "classe.id")
    TituloDTO toDto(Titulo entity);

}

