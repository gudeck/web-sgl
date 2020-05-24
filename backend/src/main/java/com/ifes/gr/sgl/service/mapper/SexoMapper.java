package com.ifes.gr.sgl.service.mapper;

import com.ifes.gr.sgl.domain.Sexo;
import com.ifes.gr.sgl.service.dto.SexoDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface SexoMapper extends EntityMapper<SexoDTO, Sexo> {
}

