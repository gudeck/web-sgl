package com.ifes.gr.sgl.service.mapper;

import com.ifes.gr.sgl.domain.Locacao;
import com.ifes.gr.sgl.service.dto.LocacaoDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface LocacaoMapper extends EntityMapper<LocacaoDTO, Locacao> {

    @Override
    @Mapping(target = "item.id", source = "idItem")
    @Mapping(target = "cliente.id", source = "idCliente")
    Locacao toEntity(LocacaoDTO dto);

    @Override
    @Mapping(target = "idItem", source = "item.id")
    @Mapping(target = "idCliente", source = "cliente.id")
    LocacaoDTO toDto(Locacao entity);

}

