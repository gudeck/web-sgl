package com.ifes.gr.sgl.repository;

import com.ifes.gr.sgl.domain.Ator;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface AtorRepository extends JpaRepository<Ator, Long>, JpaSpecificationExecutor<Ator> {
}
