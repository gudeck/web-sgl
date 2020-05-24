package com.ifes.gr.sgl.service.mapper;

import com.ifes.gr.sgl.domain.Cliente;
import com.ifes.gr.sgl.service.dto.ClienteDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface ClienteMapper extends EntityMapper<ClienteDTO, Cliente> {

    @Override
    @Mapping(target = "sexo.id", source = "idSexo")
    Cliente toEntity(ClienteDTO dto);

    @Override
    @Mapping(target = "idSexo", source = "sexo.id")
    ClienteDTO toDto(Cliente entity);

}

