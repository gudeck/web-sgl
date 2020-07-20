package com.ifes.gr.sgl.service.mapper;

import com.ifes.gr.sgl.domain.Classe;
import com.ifes.gr.sgl.service.dto.ClasseDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ClasseMapper extends EntityMapper<ClasseDTO, Classe> {
}

