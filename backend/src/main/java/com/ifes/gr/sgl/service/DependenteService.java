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

    public DependenteDTO create(DependenteDTO dependenteDTO) {
        dependenteDTO.setAtivo(true);
        return save(dependenteDTO);
    }

    public void delete(Long id) {
        dependenteRepository.deleteById(id);
    }

    public List<DependenteDTO> getAll() {
        return dependenteMapper.toDto(dependenteRepository.findAll());
    }

    private DependenteDTO save(DependenteDTO dependenteDTO) {
        return dependenteMapper.toDto(dependenteRepository.save(dependenteMapper.toEntity(dependenteDTO)));
    }

    public DependenteDTO update(DependenteDTO dependenteDTO) {
        return save(dependenteDTO);
    }

}
