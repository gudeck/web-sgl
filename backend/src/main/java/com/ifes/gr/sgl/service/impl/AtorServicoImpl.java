package com.ifes.gr.sgl.service.impl;

import com.ifes.gr.sgl.domain.Ator;
import com.ifes.gr.sgl.repository.AtorRepository;
import com.ifes.gr.sgl.service.AtorServico;
import com.ifes.gr.sgl.service.dto.AtorDTO;
import com.ifes.gr.sgl.service.exception.BadRequestException;
import com.ifes.gr.sgl.service.mapper.AtorMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class AtorServicoImpl implements AtorServico {

    private final AtorMapper atorMapper;
    private final AtorRepository atorRepository;

    @Override
    public AtorDTO getById(Long id) {
        return atorMapper.toDto(getAtor(id));
    }

    @Override
    public AtorDTO save(AtorDTO atorDTO) {
        return atorMapper.toDto(atorRepository.save(atorMapper.toEntity(atorDTO)));
    }

    @Override
    public void delete(Long id) {
        atorRepository.delete(getAtor(id));
    }

    private Ator getAtor(Long id) {
        return atorRepository.findById(id).orElseThrow(() -> new BadRequestException(String.format("Ator de id %d não encontrado", id)));
    }

}
