package com.ifes.gr.sgl.service;

import com.ifes.gr.sgl.repository.ItemRepository;
import com.ifes.gr.sgl.service.dto.ItemDTO;
import com.ifes.gr.sgl.service.mapper.ItemMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class ItemService {
    private final ItemMapper itemMapper;
    private final ItemRepository itemRepository;

    public ItemDTO save(ItemDTO itemDTO) {
        return itemMapper.toDto(itemRepository.save(itemMapper.toEntity(itemDTO)));
    }

    public List<ItemDTO> getAll() {
        return itemMapper.toDto(itemRepository.findAll());
    }

    public void delete(Long id) {
        itemRepository.deleteById(id);
    }

}
