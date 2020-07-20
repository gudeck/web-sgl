package com.ifes.gr.sgl.repository;

import com.ifes.gr.sgl.domain.Locacao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface LocacaoRepository extends JpaRepository<Locacao, Long>, JpaSpecificationExecutor<Locacao> {
}
