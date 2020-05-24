package com.ifes.gr.sgl.service.mapper;

import com.ifes.gr.sgl.domain.Socio;
import com.ifes.gr.sgl.service.dto.SocioDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface SocioMapper extends EntityMapper<SocioDTO, Socio> {

    @Override
    @Mapping(target = "sexo.id", source = "idSexo")
    Socio toEntity(SocioDTO dto);

    @Override
    @Mapping(target = "idSexo", source = "sexo.id")
    SocioDTO toDto(Socio entity);

}

