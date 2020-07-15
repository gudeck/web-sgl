package com.ifes.gr.sgl.web.rest;

import com.ifes.gr.sgl.service.SexoService;
import com.ifes.gr.sgl.service.dto.SexoDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/sexos")
@RequiredArgsConstructor
public class SexoResource {

    private final SexoService sexoService;

    @Transactional(readOnly = true)
    @GetMapping
    public ResponseEntity<List<SexoDTO>> listar() {
        List<SexoDTO> sexos = sexoService.getAll();
        return ResponseEntity.ok().body(sexos);
    }

}
