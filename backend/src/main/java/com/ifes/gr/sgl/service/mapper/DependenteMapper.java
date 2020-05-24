package com.ifes.gr.sgl.service.mapper;

import com.ifes.gr.sgl.domain.Dependente;
import com.ifes.gr.sgl.service.dto.DependenteDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface DependenteMapper extends EntityMapper<DependenteDTO, Dependente> {

    @Override
    @Mapping(target = "sexo.id", source = "idSexo")
    @Mapping(target = "responsavel.id", source = "idResponsavel")
    Dependente toEntity(DependenteDTO dto);

    @Override
    @Mapping(target = "idSexo", source = "sexo.id")
    @Mapping(target = "idResponsavel", source = "responsavel.id")
    DependenteDTO toDto(Dependente entity);

}

