package com.ifes.gr.sgl.web.rest;

import com.ifes.gr.sgl.service.ItemService;
import com.ifes.gr.sgl.service.dto.ItemDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/api/itens")
@RequiredArgsConstructor
public class ItemResource {

    private final ItemService itemService;

    @PostMapping
    public ResponseEntity<ItemDTO> create(@RequestBody ItemDTO itemDTO) throws URISyntaxException {
        ItemDTO novoItem = itemService.save(itemDTO);
        return ResponseEntity.created(new URI("/itens" + novoItem.getId())).body(novoItem);
    }

    @PutMapping
    public ResponseEntity<ItemDTO> update(@RequestBody ItemDTO itemDTO) {
        ItemDTO item = itemService.save(itemDTO);
        return ResponseEntity.ok().body(item);
    }

    @Transactional(readOnly = true)
    @GetMapping
    public ResponseEntity<List<ItemDTO>> listar() {
        List<ItemDTO> itens = itemService.getAll();
        return ResponseEntity.ok().body(itens);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        itemService.delete(id);
        return ResponseEntity.ok().build();
    }

}
