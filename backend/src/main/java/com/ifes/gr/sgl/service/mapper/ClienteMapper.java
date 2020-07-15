package com.ifes.gr.sgl.service.mapper;

import com.ifes.gr.sgl.domain.Cliente;
import com.ifes.gr.sgl.service.dto.ClienteDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ClienteMapper extends EntityMapper<ClienteDTO, Cliente> {

    @Override
    Cliente toEntity(ClienteDTO dto);

    @Override
    ClienteDTO toDto(Cliente entity);

}

