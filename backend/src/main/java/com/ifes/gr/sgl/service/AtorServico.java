package com.ifes.gr.sgl.service;

import com.ifes.gr.sgl.service.dto.AtorDTO;

public interface AtorServico {

    AtorDTO getById(Long id);

    AtorDTO save(AtorDTO atorDTO);

    void delete(Long id);

}
