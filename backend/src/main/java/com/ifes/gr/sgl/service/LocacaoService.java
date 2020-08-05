package com.ifes.gr.sgl.service;

import com.ifes.gr.sgl.repository.LocacaoRepository;
import com.ifes.gr.sgl.service.dto.LocacaoDTO;
import com.ifes.gr.sgl.service.mapper.LocacaoMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class LocacaoService {

    private final LocacaoMapper locacaoMapper;
    private final LocacaoRepository locacaoRepository;

    public LocacaoDTO create(LocacaoDTO locacaoDTO) {
        if (locacaoDTO.getDataDevolucaoPrevista() == null)
            locacaoDTO.setDataDevolucaoPrevista(locacaoDTO.getDataLocacao().plusDays(locacaoDTO.getItem().getTitulo()
                    .getClasse().getPrazoDevolucao()));
        if (locacaoDTO.getValor() == null)
            locacaoDTO.setValor(locacaoDTO.getItem().getTitulo().getClasse().getValor());

        return locacaoMapper.toDto(locacaoRepository.save(locacaoMapper.toEntity(locacaoDTO)));
    }

    public LocacaoDTO update(LocacaoDTO locacaoDTO) {
        return locacaoMapper.toDto(locacaoRepository.save(locacaoMapper.toEntity(locacaoDTO)));
    }

    public List<LocacaoDTO> getAll() {
        return locacaoMapper.toDto(locacaoRepository.findAll());
    }

    public void delete(Long id) {
        locacaoRepository.deleteById(id);
    }

}
