package com.ifes.gr.sgl.service.mapper;

import com.ifes.gr.sgl.domain.Item;
import com.ifes.gr.sgl.service.dto.ItemDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ItemMapper extends EntityMapper<ItemDTO, Item> {

    @Override
    Item toEntity(ItemDTO dto);

    @Override
    ItemDTO toDto(Item entity);

}

