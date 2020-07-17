package com.ifes.gr.sgl.service;

import com.ifes.gr.sgl.service.dto.AtorDTO;

import java.util.List;

public interface AtorService {

    AtorDTO save(AtorDTO atorDTO);

    List<AtorDTO> getAll();

    void delete(Long id);

}
