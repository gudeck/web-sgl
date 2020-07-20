package com.ifes.gr.sgl.service.mapper;

import com.ifes.gr.sgl.domain.Categoria;
import com.ifes.gr.sgl.service.dto.CategoriaDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CategoriaMapper extends EntityMapper<CategoriaDTO, Categoria> {
}

