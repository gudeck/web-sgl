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

import java.util.List;

@RestController
@RequestMapping("/api/atores")
@RequiredArgsConstructor
public class AtorResource {

    private final AtorService atorService;

    @PostMapping
    @PutMapping
    public ResponseEntity<AtorDTO> create(@RequestBody AtorDTO atorDTO) {
        return save(atorDTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        atorService.delete(id);
        return ResponseEntity.ok().build();
    }

    @Transactional(readOnly = true)
    @GetMapping
    public ResponseEntity<List<AtorDTO>> getAll() {
        List<AtorDTO> atores = atorService.getAll();
        return ResponseEntity.ok().body(atores);
    }

    private ResponseEntity<AtorDTO> save(AtorDTO atorDTO) {
        AtorDTO ator = atorService.save(atorDTO);
        return ResponseEntity.ok().body(ator);
    }

    @PutMapping
    public ResponseEntity<AtorDTO> update(@RequestBody AtorDTO atorDTO) {
        return save(atorDTO);
    }

}
