package com.ifes.gr.sgl.service.impl;

import com.ifes.gr.sgl.domain.Diretor;
import com.ifes.gr.sgl.repository.DiretorRepository;
import com.ifes.gr.sgl.service.DiretorService;
import com.ifes.gr.sgl.service.dto.DiretorDTO;
import com.ifes.gr.sgl.service.exception.RegistroNaoEncontradoException;
import com.ifes.gr.sgl.service.mapper.DiretorMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class DiretorServiceImpl implements DiretorService {
    private final DiretorMapper diretorMapper;
    private final DiretorRepository diretorRepository;

    @Override
    public DiretorDTO save(DiretorDTO diretorDTO) {
        return diretorMapper.toDto(diretorRepository.save(diretorMapper.toEntity(diretorDTO)));
    }

    @Override
    public List<DiretorDTO> getAll() {
        return diretorMapper.toDto(diretorRepository.findAll());
    }

    @Override
    public void delete(Long id) {
        diretorRepository.delete(getDiretor(id));
    }

    private Diretor getDiretor(Long id) {
        return diretorRepository.findById(id).orElseThrow(() -> new RegistroNaoEncontradoException(String.format("Diretor de id %d não encontrado", id)));
    }
}
