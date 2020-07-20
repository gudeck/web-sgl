package com.ifes.gr.sgl.service.mapper;

import com.ifes.gr.sgl.domain.Ator;
import com.ifes.gr.sgl.service.dto.AtorDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AtorMapper extends EntityMapper<AtorDTO, Ator> {
}

