package com.ifes.gr.sgl.service;

import com.ifes.gr.sgl.service.dto.DiretorDTO;

import java.util.List;

public interface DiretorService {

    DiretorDTO getById(Long id);

    DiretorDTO save(DiretorDTO diretorDTO);

    List<DiretorDTO> getAll();

    void delete(Long id);

}
