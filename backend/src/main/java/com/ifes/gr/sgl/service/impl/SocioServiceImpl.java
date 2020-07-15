package com.ifes.gr.sgl.service.impl;

import com.ifes.gr.sgl.domain.Socio;
import com.ifes.gr.sgl.repository.SocioRepository;
import com.ifes.gr.sgl.service.SocioService;
import com.ifes.gr.sgl.service.dto.SocioDTO;
import com.ifes.gr.sgl.service.exception.BadRequestException;
import com.ifes.gr.sgl.service.mapper.SocioMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class SocioServiceImpl implements SocioService {
    private final SocioMapper socioMapper;
    private final SocioRepository socioRepository;

    @Override
    public SocioDTO getById(Long id) {
        return socioMapper.toDto(getSocio(id));
    }

    @Override
    public SocioDTO save(SocioDTO socioDTO) {
        return socioMapper.toDto(socioRepository.save(socioMapper.toEntity(socioDTO)));
    }

    @Override
    public List<SocioDTO> getAll() {
        return socioMapper.toDto(socioRepository.findAll());
    }

    @Override
    public void delete(Long id) {
        socioRepository.delete(getSocio(id));
    }

    private Socio getSocio(Long id) {
        return socioRepository.findById(id).orElseThrow(() -> new BadRequestException(String.format("Socio de id %d não encontrado", id)));
    }
}
