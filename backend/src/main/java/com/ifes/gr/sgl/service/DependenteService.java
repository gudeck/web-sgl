package com.ifes.gr.sgl.service;

import com.ifes.gr.sgl.service.dto.DependenteDTO;

import java.util.List;

public interface DependenteService {

    DependenteDTO getById(Long id);

    DependenteDTO save(DependenteDTO dependenteDTO);

    List<DependenteDTO> getAll();

    void delete(Long id);

}
