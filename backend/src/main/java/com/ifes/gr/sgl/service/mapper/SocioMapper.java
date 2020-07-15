package com.ifes.gr.sgl.service.mapper;

import com.ifes.gr.sgl.domain.Socio;
import com.ifes.gr.sgl.service.dto.SocioDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface SocioMapper extends EntityMapper<SocioDTO, Socio> {

    @Override
    Socio toEntity(SocioDTO dto);

    @Override
    SocioDTO toDto(Socio entity);

}

