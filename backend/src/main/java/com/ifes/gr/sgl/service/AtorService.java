package com.ifes.gr.sgl.service;

import com.ifes.gr.sgl.repository.AtorRepository;
import com.ifes.gr.sgl.service.dto.AtorDTO;
import com.ifes.gr.sgl.service.mapper.AtorMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class AtorService {

    private final AtorMapper atorMapper;
    private final AtorRepository atorRepository;

    public AtorDTO save(AtorDTO atorDTO) {
        return atorMapper.toDto(atorRepository.save(atorMapper.toEntity(atorDTO)));
    }

    public List<AtorDTO> getAll() {
        return atorMapper.toDto(atorRepository.findAll());
    }

    public void delete(Long id) {
        atorRepository.deleteById(id);
    }

}
