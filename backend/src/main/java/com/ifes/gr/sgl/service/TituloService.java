package com.ifes.gr.sgl.service;

import com.ifes.gr.sgl.repository.TituloRepository;
import com.ifes.gr.sgl.service.dto.TituloDTO;
import com.ifes.gr.sgl.service.mapper.TituloMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class TituloService {
    private final TituloMapper tituloMapper;
    private final TituloRepository tituloRepository;

    public TituloDTO save(TituloDTO tituloDTO) {
        return tituloMapper.toDto(tituloRepository.save(tituloMapper.toEntity(tituloDTO)));
    }

    public List<TituloDTO> getAll() {
        return tituloMapper.toDto(tituloRepository.findAll());
    }

    public void delete(Long id) {
        tituloRepository.deleteById(id);
    }

}
