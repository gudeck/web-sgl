package com.ifes.gr.sgl.service.mapper;

import com.ifes.gr.sgl.domain.Diretor;
import com.ifes.gr.sgl.service.dto.DiretorDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface DiretorMapper extends EntityMapper<DiretorDTO, Diretor> {
}

