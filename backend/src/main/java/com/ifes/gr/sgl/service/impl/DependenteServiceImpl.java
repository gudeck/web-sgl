package com.ifes.gr.sgl.service.impl;

import com.ifes.gr.sgl.domain.Dependente;
import com.ifes.gr.sgl.repository.DependenteRepository;
import com.ifes.gr.sgl.service.DependenteService;
import com.ifes.gr.sgl.service.dto.DependenteDTO;
import com.ifes.gr.sgl.service.exception.BadRequestException;
import com.ifes.gr.sgl.service.mapper.DependenteMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class DependenteServiceImpl implements DependenteService {
    private final DependenteMapper dependenteMapper;
    private final DependenteRepository dependenteRepository;

    @Override
    public DependenteDTO save(DependenteDTO dependenteDTO) {
        return dependenteMapper.toDto(dependenteRepository.save(dependenteMapper.toEntity(dependenteDTO)));
    }

    @Override
    public List<DependenteDTO> getAll() {
        return dependenteMapper.toDto(dependenteRepository.findAll());
    }

    @Override
    public void delete(Long id) {
        dependenteRepository.delete(getDependente(id));
    }

    private Dependente getDependente(Long id) {
        return dependenteRepository.findById(id).orElseThrow(() -> new BadRequestException(String.format("Dependente de id %d não encontrado", id)));
    }
}
