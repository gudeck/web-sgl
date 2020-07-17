package com.ifes.gr.sgl.service.impl;

import com.ifes.gr.sgl.domain.Classe;
import com.ifes.gr.sgl.repository.ClasseRepository;
import com.ifes.gr.sgl.service.ClasseService;
import com.ifes.gr.sgl.service.dto.ClasseDTO;
import com.ifes.gr.sgl.service.exception.BadRequestException;
import com.ifes.gr.sgl.service.mapper.ClasseMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class ClasseServiceImpl implements ClasseService {
    private final ClasseMapper classeMapper;
    private final ClasseRepository classeRepository;

    @Override
    public ClasseDTO save(ClasseDTO classeDTO) {
        return classeMapper.toDto(classeRepository.save(classeMapper.toEntity(classeDTO)));
    }

    @Override
    public List<ClasseDTO> getAll() {
        return classeMapper.toDto(classeRepository.findAll());
    }

    @Override
    public void delete(Long id) {
        classeRepository.delete(getClasse(id));
    }

    private Classe getClasse(Long id) {
        return classeRepository.findById(id).orElseThrow(() -> new BadRequestException(String.format("Classe de id %d não encontrado", id)));
    }
}
