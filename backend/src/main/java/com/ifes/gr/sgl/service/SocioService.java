package com.ifes.gr.sgl.service;

import com.ifes.gr.sgl.service.dto.SocioDTO;

import java.util.List;

public interface SocioService {

    SocioDTO getById(Long id);

    SocioDTO save(SocioDTO socioDTO);

    List<SocioDTO> getAll();

    void delete(Long id);

}
