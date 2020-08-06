package com.ifes.gr.sgl.web.rest;

import com.ifes.gr.sgl.service.LocacaoService;
import com.ifes.gr.sgl.service.dto.LocacaoDTO;
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
@RequestMapping("/api/locacoes")
@RequiredArgsConstructor
public class LocacaoResource {

    private final LocacaoService locacaoService;

    @PostMapping
    public ResponseEntity<LocacaoDTO> create(@RequestBody LocacaoDTO locacaoDTO) throws URISyntaxException {
        LocacaoDTO novaLocacao = locacaoService.create(locacaoDTO);
        return ResponseEntity.created(new URI("/locacoes" + novaLocacao.getId())).body(novaLocacao);
    }

    @PutMapping
    public ResponseEntity<LocacaoDTO> update(@RequestBody LocacaoDTO locacaoDTO) {
        LocacaoDTO locacao = locacaoService.update(locacaoDTO);
        return ResponseEntity.ok().body(locacao);
    }

    @Transactional(readOnly = true)
    @GetMapping
    public ResponseEntity<List<LocacaoDTO>> listar() {
        List<LocacaoDTO> locacoes = locacaoService.getAll();
        return ResponseEntity.ok().body(locacoes);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        locacaoService.delete(id);
        return ResponseEntity.ok().build();
    }

}
