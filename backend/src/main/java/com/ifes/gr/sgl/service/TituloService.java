package com.ifes.gr.sgl.service;

import com.ifes.gr.sgl.service.dto.TituloDTO;

import java.util.List;

public interface TituloService {

    TituloDTO getById(Long id);

    TituloDTO save(TituloDTO tituloDTO);

    List<TituloDTO> getAll();

    void delete(Long id);

}
