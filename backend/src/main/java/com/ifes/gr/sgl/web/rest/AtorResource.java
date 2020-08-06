package com.ifes.gr.sgl.web.rest;

import com.ifes.gr.sgl.service.AtorService;
import com.ifes.gr.sgl.service.dto.AtorDTO;
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
@RequestMapping("/api/atores")
@RequiredArgsConstructor
public class AtorResource {

    private final AtorService atorService;

    @PostMapping
    public ResponseEntity<AtorDTO> create(@RequestBody AtorDTO atorDTO) throws URISyntaxException {
        AtorDTO novoAtor = atorService.save(atorDTO);
        return ResponseEntity.created(new URI("/atores" + novoAtor.getId())).body(novoAtor);
    }

    @PutMapping
    public ResponseEntity<AtorDTO> update(@RequestBody AtorDTO atorDTO) {
        AtorDTO ator = atorService.save(atorDTO);
        return ResponseEntity.ok().body(ator);
    }

    @Transactional(readOnly = true)
    @GetMapping
    public ResponseEntity<List<AtorDTO>> listar() {
        List<AtorDTO> atores = atorService.getAll();
        return ResponseEntity.ok().body(atores);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        atorService.delete(id);
        return ResponseEntity.ok().build();
    }

}
