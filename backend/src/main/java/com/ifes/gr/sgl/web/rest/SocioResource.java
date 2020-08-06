package com.ifes.gr.sgl.web.rest;

import com.ifes.gr.sgl.service.SocioService;
import com.ifes.gr.sgl.service.dto.SocioDTO;
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
@RequestMapping("/api/socios")
@RequiredArgsConstructor
public class SocioResource {

    private final SocioService socioService;

    @PostMapping
    public ResponseEntity<SocioDTO> create(@RequestBody SocioDTO socioDTO) throws URISyntaxException {
        SocioDTO novoSocio = socioService.create(socioDTO);
        return ResponseEntity.created(new URI("/socios" + novoSocio.getId())).body(novoSocio);
    }

    @PutMapping
    public ResponseEntity<SocioDTO> update(@RequestBody SocioDTO socioDTO) {
        SocioDTO socio = socioService.update(socioDTO);
        return ResponseEntity.ok().body(socio);
    }

    @Transactional(readOnly = true)
    @GetMapping
    public ResponseEntity<List<SocioDTO>> listar() {
        List<SocioDTO> socios = socioService.getAll();
        return ResponseEntity.ok().body(socios);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        socioService.delete(id);
        return ResponseEntity.ok().build();
    }

}
