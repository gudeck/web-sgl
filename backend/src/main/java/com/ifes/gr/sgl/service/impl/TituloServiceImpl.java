package com.ifes.gr.sgl.service.impl;

import com.ifes.gr.sgl.domain.Titulo;
import com.ifes.gr.sgl.repository.TituloRepository;
import com.ifes.gr.sgl.service.TituloService;
import com.ifes.gr.sgl.service.dto.TituloDTO;
import com.ifes.gr.sgl.service.exception.BadRequestException;
import com.ifes.gr.sgl.service.mapper.TituloMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class TituloServiceImpl implements TituloService {
    private final TituloMapper tituloMapper;
    private final TituloRepository tituloRepository;

    @Override
    public TituloDTO save(TituloDTO tituloDTO) {
        return tituloMapper.toDto(tituloRepository.save(tituloMapper.toEntity(tituloDTO)));
    }

    @Override
    public List<TituloDTO> getAll() {
        return tituloMapper.toDto(tituloRepository.findAll());
    }

    @Override
    public void delete(Long id) {
        tituloRepository.delete(getTitulo(id));
    }

    private Titulo getTitulo(Long id) {
        return tituloRepository.findById(id).orElseThrow(() -> new BadRequestException(String.format("Titulo de id %d não encontrado", id)));
    }
}
