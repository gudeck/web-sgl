package com.ifes.gr.sgl.service.mapper;

import com.ifes.gr.sgl.domain.Item;
import com.ifes.gr.sgl.service.dto.ItemDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface ItemMapper extends EntityMapper<ItemDTO, Item> {

    @Override
    @Mapping(target = "titulo.id", source = "idTitulo")
    @Mapping(target = "tipoItem.id", source = "idTipoItem")
    Item toEntity(ItemDTO dto);

    @Override
    @Mapping(target = "idTitulo", source = "titulo.id")
    @Mapping(target = "idTipoItem", source = "tipoItem.id")
    ItemDTO toDto(Item entity);

}

