package com.ifes.gr.sgl.repository;

import com.ifes.gr.sgl.domain.Dependente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface DependenteRepository extends JpaRepository<Dependente, Long>, JpaSpecificationExecutor<Dependente> {
}
