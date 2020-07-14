package com.ifes.gr.sgl.service;

import com.ifes.gr.sgl.service.dto.ItemDTO;

import java.util.List;

public interface ItemService {

    ItemDTO getById(Long id);

    ItemDTO save(ItemDTO itemDTO);

    List<ItemDTO> getAll();

    void delete(Long id);

}
