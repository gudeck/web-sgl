package com.ifes.gr.sgl.service;

import com.ifes.gr.sgl.service.dto.LocacaoDTO;

import java.util.List;

public interface LocacaoService {

    LocacaoDTO save(LocacaoDTO locacaoDTO);

    List<LocacaoDTO> getAll();

    void delete(Long id);

}
