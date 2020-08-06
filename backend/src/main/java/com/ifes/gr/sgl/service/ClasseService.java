package com.ifes.gr.sgl.service;

import com.ifes.gr.sgl.repository.ClasseRepository;
import com.ifes.gr.sgl.service.dto.ClasseDTO;
import com.ifes.gr.sgl.service.mapper.ClasseMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class ClasseService {
    private final ClasseMapper classeMapper;
    private final ClasseRepository classeRepository;

    public ClasseDTO save(ClasseDTO classeDTO) {
        return classeMapper.toDto(classeRepository.save(classeMapper.toEntity(classeDTO)));
    }

    public List<ClasseDTO> getAll() {
        return classeMapper.toDto(classeRepository.findAll());
    }

    public void delete(Long id) {
        classeRepository.deleteById(id);
    }

}
