package com.ifes.gr.sgl.service;

import com.ifes.gr.sgl.repository.SocioRepository;
import com.ifes.gr.sgl.service.dto.SocioDTO;
import com.ifes.gr.sgl.service.mapper.SocioMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class SocioService {
    private final SocioMapper socioMapper;
    private final SocioRepository socioRepository;

    public SocioDTO create(SocioDTO socioDTO) {
        socioDTO.setAtivo(true);
        socioDTO.getDependentes().forEach(dependente -> {
            if (dependente.getId() == null)
                dependente.setAtivo(true);
        });
        return socioMapper.toDto(socioRepository.save(socioMapper.toEntity(socioDTO)));
    }

    public SocioDTO update(SocioDTO socioDTO) {
        return socioMapper.toDto(socioRepository.save(socioMapper.toEntity(socioDTO)));
    }

    public List<SocioDTO> getAll() {
        return socioMapper.toDto(socioRepository.findAll());
    }

    public void delete(Long id) {
        socioRepository.deleteById(id);
    }

}
