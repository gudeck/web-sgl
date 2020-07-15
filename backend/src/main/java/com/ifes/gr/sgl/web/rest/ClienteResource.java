package com.ifes.gr.sgl.web.rest;

import com.ifes.gr.sgl.service.ClienteService;
import com.ifes.gr.sgl.service.dto.ClienteDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/clientes")
@RequiredArgsConstructor
public class ClienteResource {

    private final ClienteService clienteService;

    @Transactional(readOnly = true)
    @GetMapping
    public ResponseEntity<List<ClienteDTO>> listar() {
        List<ClienteDTO> clientes = clienteService.getAll();
        return ResponseEntity.ok().body(clientes);
    }

}
