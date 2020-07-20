package com.ifes.gr.sgl.repository;

import com.ifes.gr.sgl.domain.TipoItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface TipoItemRepository extends JpaRepository<TipoItem, Long>, JpaSpecificationExecutor<TipoItem> {
}
