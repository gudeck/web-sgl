package com.ifes.gr.sgl.service.impl;

import com.ifes.gr.sgl.domain.Locacao;
import com.ifes.gr.sgl.repository.LocacaoRepository;
import com.ifes.gr.sgl.service.LocacaoService;
import com.ifes.gr.sgl.service.dto.LocacaoDTO;
import com.ifes.gr.sgl.service.exception.RegistroNaoEncontradoException;
import com.ifes.gr.sgl.service.mapper.LocacaoMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class LocacaoServiceImpl implements LocacaoService {

    private final LocacaoMapper locacaoMapper;
    private final LocacaoRepository locacaoRepository;

    @Override
    public LocacaoDTO save(LocacaoDTO locacaoDTO) {

        if (locacaoDTO.getId() == null) {
            if (locacaoDTO.getDataDevolucaoPrevista() == null)
                locacaoDTO.setDataDevolucaoPrevista(locacaoDTO.getDataLocacao().plusDays(locacaoDTO.getItem().getTitulo().getClasse().getPrazoDevolucao()));
            if (locacaoDTO.getValor() == null)
                locacaoDTO.setValor(locacaoDTO.getItem().getTitulo().getClasse().getValor());
        }

        return locacaoMapper.toDto(locacaoRepository.save(locacaoMapper.toEntity(locacaoDTO)));
    }

    @Override
    public List<LocacaoDTO> getAll() {
        return locacaoMapper.toDto(locacaoRepository.findAll());
    }

    @Override
    public void delete(Long id) {
        locacaoRepository.delete(getLocacao(id));
    }

    private Locacao getLocacao(Long id) {
        return locacaoRepository.findById(id).orElseThrow(() -> new RegistroNaoEncontradoException(String.format("Locacao de id %d não encontrado", id)));
    }

}
