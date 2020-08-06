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

    public DependenteDTO save(DependenteDTO dependenteDTO) {
        return dependenteMapper.toDto(dependenteRepository.save(dependenteMapper.toEntity(dependenteDTO)));
    }

    public List<DependenteDTO> getAll() {
        return dependenteMapper.toDto(dependenteRepository.findAll());
    }

    public void delete(Long id) {
        dependenteRepository.deleteById(id);
    }

}
