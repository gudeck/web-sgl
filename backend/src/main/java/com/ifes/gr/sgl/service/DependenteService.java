package com.ifes.gr.sgl.service;

import com.ifes.gr.sgl.repository.DependenteRepository;
import com.ifes.gr.sgl.service.dto.DependenteDTO;
import com.ifes.gr.sgl.service.mapper.DependenteMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class DependenteService {
    private final DependenteMapper dependenteMapper;
    private final DependenteRepository dependenteRepository;

    public DependenteDTO create(final DependenteDTO dependenteDTO) {
        dependenteDTO.setAtivo(true);
        return this.dependenteMapper.toDto(this.dependenteRepository.save(this.dependenteMapper.toEntity(dependenteDTO)));
    }

    public DependenteDTO update(final DependenteDTO dependenteDTO) {
        return this.dependenteMapper.toDto(this.dependenteRepository.save(this.dependenteMapper.toEntity(dependenteDTO)));
    }

    public List<DependenteDTO> getAll() {
        return this.dependenteMapper.toDto(this.dependenteRepository.findAll());
    }

    public void delete(final Long id) {
        this.dependenteRepository.deleteById(id);
    }

}
