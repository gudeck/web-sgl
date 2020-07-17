package com.ifes.gr.sgl.service.impl;

import com.ifes.gr.sgl.repository.SexoRepository;
import com.ifes.gr.sgl.service.SexoService;
import com.ifes.gr.sgl.service.dto.SexoDTO;
import com.ifes.gr.sgl.service.mapper.SexoMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class SexoServiceImpl implements SexoService {
    private final SexoMapper sexoMapper;
    private final SexoRepository sexoRepository;

    @Override
    public List<SexoDTO> getAll() {
        return sexoMapper.toDto(sexoRepository.findAll());
    }

}
