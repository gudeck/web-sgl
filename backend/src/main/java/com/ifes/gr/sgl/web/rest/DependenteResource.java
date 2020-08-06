package com.ifes.gr.sgl.web.rest;

import com.ifes.gr.sgl.service.DependenteService;
import com.ifes.gr.sgl.service.dto.DependenteDTO;
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

import java.util.List;

@RestController
@RequestMapping("/api/dependentes")
@RequiredArgsConstructor
public class DependenteResource {

    private final DependenteService dependenteService;

    @PostMapping
    public ResponseEntity<DependenteDTO> create(@RequestBody DependenteDTO dependenteDTO) {
        DependenteDTO novoDependente = dependenteService.create(dependenteDTO);
        return ResponseEntity.ok().body(novoDependente);
    }

    @PutMapping
    public ResponseEntity<DependenteDTO> update(@RequestBody DependenteDTO dependenteDTO) {
        DependenteDTO dependente = dependenteService.update(dependenteDTO);
        return ResponseEntity.ok().body(dependente);
    }

    @Transactional(readOnly = true)
    @GetMapping
    public ResponseEntity<List<DependenteDTO>> listar() {
        List<DependenteDTO> dependentes = dependenteService.getAll();
        return ResponseEntity.ok().body(dependentes);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        dependenteService.delete(id);
        return ResponseEntity.ok().build();
    }

}
