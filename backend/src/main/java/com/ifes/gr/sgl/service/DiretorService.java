package com.ifes.gr.sgl.service;

import com.ifes.gr.sgl.repository.DiretorRepository;
import com.ifes.gr.sgl.service.dto.DiretorDTO;
import com.ifes.gr.sgl.service.mapper.DiretorMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class DiretorService {
    private final DiretorMapper diretorMapper;
    private final DiretorRepository diretorRepository;

    public DiretorDTO save(DiretorDTO diretorDTO) {
        return diretorMapper.toDto(diretorRepository.save(diretorMapper.toEntity(diretorDTO)));
    }

    public List<DiretorDTO> getAll() {
        return diretorMapper.toDto(diretorRepository.findAll());
    }

    public void delete(Long id) {
        diretorRepository.deleteById(id);
    }

}
