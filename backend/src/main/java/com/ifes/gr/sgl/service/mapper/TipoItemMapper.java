package com.ifes.gr.sgl.service.mapper;

import com.ifes.gr.sgl.domain.TipoItem;
import com.ifes.gr.sgl.service.dto.TipoItemDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface TipoItemMapper extends EntityMapper<TipoItemDTO, TipoItem> {
}

