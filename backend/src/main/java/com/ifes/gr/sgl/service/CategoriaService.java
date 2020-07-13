package com.ifes.gr.sgl.service;

import com.ifes.gr.sgl.service.dto.CategoriaDTO;

import java.util.List;

public interface CategoriaService {

    CategoriaDTO getById(Long id);

    CategoriaDTO save(CategoriaDTO categoriaDTO);

    List<CategoriaDTO> getAll();

    void delete(Long id);

}
