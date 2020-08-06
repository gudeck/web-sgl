package com.ifes.gr.sgl.web.rest;

import com.ifes.gr.sgl.service.TituloService;
import com.ifes.gr.sgl.service.dto.TituloDTO;
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
@RequestMapping("/api/titulos")
@RequiredArgsConstructor
public class TituloResource {

    private final TituloService tituloService;

    @PostMapping
    public ResponseEntity<TituloDTO> create(@RequestBody TituloDTO tituloDTO) throws URISyntaxException {
        TituloDTO novoTitulo = tituloService.save(tituloDTO);
        return ResponseEntity.created(new URI("/titulos" + novoTitulo.getId())).body(novoTitulo);
    }

    @PutMapping
    public ResponseEntity<TituloDTO> update(@RequestBody TituloDTO tituloDTO) {
        TituloDTO titulo = tituloService.save(tituloDTO);
        return ResponseEntity.ok().body(titulo);
    }

    @Transactional(readOnly = true)
    @GetMapping
    public ResponseEntity<List<TituloDTO>> listar() {
        List<TituloDTO> titulos = tituloService.getAll();
        return ResponseEntity.ok().body(titulos);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        tituloService.delete(id);
        return ResponseEntity.ok().build();
    }

}
