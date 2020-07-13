package com.ifes.gr.sgl.service;

import com.ifes.gr.sgl.service.dto.ClasseDTO;

import java.util.List;

public interface ClasseService {

    ClasseDTO getById(Long id);

    ClasseDTO save(ClasseDTO classeDTO);

    List<ClasseDTO> getAll();

    void delete(Long id);

}
