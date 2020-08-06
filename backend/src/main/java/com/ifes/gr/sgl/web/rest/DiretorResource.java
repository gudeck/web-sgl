package com.ifes.gr.sgl.web.rest;

import com.ifes.gr.sgl.service.DiretorService;
import com.ifes.gr.sgl.service.dto.DiretorDTO;
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
@RequestMapping("/api/diretores")
@RequiredArgsConstructor
public class DiretorResource {

    private final DiretorService diretorService;

    @PostMapping
    public ResponseEntity<DiretorDTO> create(@RequestBody DiretorDTO diretorDTO) throws URISyntaxException {
        DiretorDTO novoDiretor = diretorService.save(diretorDTO);
        return ResponseEntity.created(new URI("/diretores" + novoDiretor.getId())).body(novoDiretor);
    }

    @PutMapping
    public ResponseEntity<DiretorDTO> update(@RequestBody DiretorDTO diretorDTO) {
        DiretorDTO diretor = diretorService.save(diretorDTO);
        return ResponseEntity.ok().body(diretor);
    }

    @Transactional(readOnly = true)
    @GetMapping
    public ResponseEntity<List<DiretorDTO>> listar() {
        List<DiretorDTO> diretores = diretorService.getAll();
        return ResponseEntity.ok().body(diretores);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        diretorService.delete(id);
        return ResponseEntity.ok().build();
    }

}
