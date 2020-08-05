package com.ifes.gr.sgl.service;

import com.ifes.gr.sgl.repository.SexoRepository;
import com.ifes.gr.sgl.service.dto.SexoDTO;
import com.ifes.gr.sgl.service.mapper.SexoMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class SexoService {
    private final SexoMapper sexoMapper;
    private final SexoRepository sexoRepository;

    public List<SexoDTO> getAll() {
        return sexoMapper.toDto(sexoRepository.findAll());
    }

}
