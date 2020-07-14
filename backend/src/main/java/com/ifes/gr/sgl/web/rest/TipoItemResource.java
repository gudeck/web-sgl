package com.ifes.gr.sgl.web.rest;

import com.ifes.gr.sgl.service.TipoItemService;
import com.ifes.gr.sgl.service.dto.TipoItemDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/tipos-item")
@RequiredArgsConstructor
public class TipoItemResource {

    private final TipoItemService tipoItemService;

    @Transactional(readOnly = true)
    @GetMapping
    public ResponseEntity<List<TipoItemDTO>> listar() {
        List<TipoItemDTO> tiposItem = tipoItemService.getAll();
        return ResponseEntity.ok().body(tiposItem);
    }

}
