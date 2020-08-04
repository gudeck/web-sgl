package com.ifes.gr.sgl.service.impl;

import com.ifes.gr.sgl.domain.Ator;
import com.ifes.gr.sgl.repository.AtorRepository;
import com.ifes.gr.sgl.service.AtorService;
import com.ifes.gr.sgl.service.dto.AtorDTO;
import com.ifes.gr.sgl.service.exception.RegistroNaoEncontradoException;
import com.ifes.gr.sgl.service.mapper.AtorMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class AtorServiceImpl implements AtorService {

    private final AtorMapper atorMapper;
    private final AtorRepository atorRepository;

    @Override
    public AtorDTO save(AtorDTO atorDTO) {
        return atorMapper.toDto(atorRepository.save(atorMapper.toEntity(atorDTO)));
    }

    @Override
    public List<AtorDTO> getAll() {
        return atorMapper.toDto(atorRepository.findAll());
    }

    @Override
    public void delete(Long id) {
        atorRepository.delete(getAtor(id));
    }

    private Ator getAtor(Long id) {
        return atorRepository.findById(id).orElseThrow(() -> new RegistroNaoEncontradoException(String.format("Ator de id %d não encontrado", id)));
    }

}
