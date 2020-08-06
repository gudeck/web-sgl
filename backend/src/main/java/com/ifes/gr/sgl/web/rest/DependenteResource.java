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

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/api/dependentes")
@RequiredArgsConstructor
public class DependenteResource {

    private final DependenteService dependenteService;

    @PostMapping
    public ResponseEntity<DependenteDTO> create(@RequestBody final DependenteDTO dependenteDTO) throws URISyntaxException {
        final DependenteDTO novoDependente = this.dependenteService.create(dependenteDTO);
        return ResponseEntity.created(new URI("/dependentes" + novoDependente.getId())).body(novoDependente);
    }

    @PutMapping
    public ResponseEntity<DependenteDTO> update(@RequestBody final DependenteDTO dependenteDTO) {
        final DependenteDTO dependente = this.dependenteService.update(dependenteDTO);
        return ResponseEntity.ok().body(dependente);
    }

    @Transactional(readOnly = true)
    @GetMapping
    public ResponseEntity<List<DependenteDTO>> listar() {
        final List<DependenteDTO> dependentes = this.dependenteService.getAll();
        return ResponseEntity.ok().body(dependentes);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable final Long id) {
        this.dependenteService.delete(id);
        return ResponseEntity.ok().build();
    }

}
