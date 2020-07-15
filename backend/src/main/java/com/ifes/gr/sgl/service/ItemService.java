package com.ifes.gr.sgl.service;

import com.ifes.gr.sgl.service.dto.ItemDTO;

import java.util.List;

public interface ItemService {

    ItemDTO save(ItemDTO itemDTO);

    List<ItemDTO> getAll();

    void delete(Long id);

}
