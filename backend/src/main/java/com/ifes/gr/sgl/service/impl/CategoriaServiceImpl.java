package com.ifes.gr.sgl.service.impl;

import com.ifes.gr.sgl.domain.Categoria;
import com.ifes.gr.sgl.repository.CategoriaRepository;
import com.ifes.gr.sgl.service.CategoriaService;
import com.ifes.gr.sgl.service.dto.CategoriaDTO;
import com.ifes.gr.sgl.service.exception.BadRequestException;
import com.ifes.gr.sgl.service.mapper.CategoriaMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class CategoriaServiceImpl implements CategoriaService {
    private final CategoriaMapper categoriaMapper;
    private final CategoriaRepository categoriaRepository;

    @Override
    public CategoriaDTO getById(Long id) {
        return categoriaMapper.toDto(getCategoria(id));
    }

    @Override
    public CategoriaDTO save(CategoriaDTO categoriaDTO) {
        return categoriaMapper.toDto(categoriaRepository.save(categoriaMapper.toEntity(categoriaDTO)));
    }

    @Override
    public List<CategoriaDTO> getAll() {
        return categoriaMapper.toDto(categoriaRepository.findAll());
    }

    @Override
    public void delete(Long id) {
        categoriaRepository.delete(getCategoria(id));
    }

    private Categoria getCategoria(Long id) {
        return categoriaRepository.findById(id).orElseThrow(() -> new BadRequestException(String.format("Categoria de id %d não encontrado", id)));
    }
}
