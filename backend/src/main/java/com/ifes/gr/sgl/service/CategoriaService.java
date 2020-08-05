package com.ifes.gr.sgl.service;

import com.ifes.gr.sgl.repository.CategoriaRepository;
import com.ifes.gr.sgl.service.dto.CategoriaDTO;
import com.ifes.gr.sgl.service.mapper.CategoriaMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class CategoriaService {
    private final CategoriaMapper categoriaMapper;
    private final CategoriaRepository categoriaRepository;

    public List<CategoriaDTO> getAll() {
        return categoriaMapper.toDto(categoriaRepository.findAll());
    }

}
