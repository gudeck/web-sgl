package com.ifes.gr.sgl.service;

import com.ifes.gr.sgl.repository.ClienteRepository;
import com.ifes.gr.sgl.service.dto.ClienteDTO;
import com.ifes.gr.sgl.service.mapper.ClienteMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class ClienteService {
    private final ClienteMapper clienteMapper;
    private final ClienteRepository clienteRepository;

    public List<ClienteDTO> getAll() {
        return clienteMapper.toDto(clienteRepository.findAll());
    }

}
