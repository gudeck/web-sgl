package com.ifes.gr.sgl.repository;

import com.ifes.gr.sgl.domain.Sexo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface SexoRepository extends JpaRepository<Sexo, Long>, JpaSpecificationExecutor<Sexo> {
}
