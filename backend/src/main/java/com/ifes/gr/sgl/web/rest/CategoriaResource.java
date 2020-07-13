package com.ifes.gr.sgl.web.rest;

import com.ifes.gr.sgl.service.CategoriaService;
import com.ifes.gr.sgl.service.dto.CategoriaDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/categorias")
@RequiredArgsConstructor
public class CategoriaResource {

    private final CategoriaService categoriaService;

    @Transactional(readOnly = true)
    @GetMapping
    public ResponseEntity<List<CategoriaDTO>> listar() {
        List<CategoriaDTO> categorias = categoriaService.getAll();
        return ResponseEntity.ok().body(categorias);
    }

}
