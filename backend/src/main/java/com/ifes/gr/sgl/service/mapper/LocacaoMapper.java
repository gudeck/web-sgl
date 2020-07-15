package com.ifes.gr.sgl.service.mapper;

import com.ifes.gr.sgl.domain.Locacao;
import com.ifes.gr.sgl.service.dto.LocacaoDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface LocacaoMapper extends EntityMapper<LocacaoDTO, Locacao> {

    @Override
    Locacao toEntity(LocacaoDTO dto);

    @Override
    LocacaoDTO toDto(Locacao entity);

}

