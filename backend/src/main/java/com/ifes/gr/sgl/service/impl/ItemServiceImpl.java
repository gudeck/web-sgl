package com.ifes.gr.sgl.service.impl;

import com.ifes.gr.sgl.domain.Item;
import com.ifes.gr.sgl.repository.ItemRepository;
import com.ifes.gr.sgl.service.ItemService;
import com.ifes.gr.sgl.service.dto.ItemDTO;
import com.ifes.gr.sgl.service.exception.BadRequestException;
import com.ifes.gr.sgl.service.mapper.ItemMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class ItemServiceImpl implements ItemService {
    private final ItemMapper itemMapper;
    private final ItemRepository itemRepository;

    @Override
    public ItemDTO save(ItemDTO itemDTO) {
        return itemMapper.toDto(itemRepository.save(itemMapper.toEntity(itemDTO)));
    }

    @Override
    public List<ItemDTO> getAll() {
        return itemMapper.toDto(itemRepository.findAll());
    }

    @Override
    public void delete(Long id) {
        itemRepository.delete(getItem(id));
    }

    private Item getItem(Long id) {
        return itemRepository.findById(id).orElseThrow(() -> new BadRequestException(String.format("Item de id %d não encontrado", id)));
    }
}
