package com.ifes.gr.sgl.service.mapper;

import com.ifes.gr.sgl.domain.Titulo;
import com.ifes.gr.sgl.service.dto.TituloDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = AtorMapper.class)
public interface TituloMapper extends EntityMapper<TituloDTO, Titulo> {

    @Override
    Titulo toEntity(TituloDTO dto);

    @Override
    TituloDTO toDto(Titulo entity);

}

