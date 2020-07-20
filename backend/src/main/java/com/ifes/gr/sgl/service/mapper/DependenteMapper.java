package com.ifes.gr.sgl.service.mapper;

import com.ifes.gr.sgl.domain.Dependente;
import com.ifes.gr.sgl.service.dto.DependenteDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface DependenteMapper extends EntityMapper<DependenteDTO, Dependente> {

    @Override
    Dependente toEntity(DependenteDTO dto);

    @Override
    DependenteDTO toDto(Dependente entity);

}

