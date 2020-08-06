package com.ifes.gr.sgl.web.rest;

import com.ifes.gr.sgl.service.ClasseService;
import com.ifes.gr.sgl.service.dto.ClasseDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/classes")
@RequiredArgsConstructor
public class ClasseResource {

    private final ClasseService classeService;

    @PostMapping
    public ResponseEntity<ClasseDTO> create(@RequestBody ClasseDTO classeDTO) {
        return save(classeDTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        classeService.delete(id);
        return ResponseEntity.ok().build();
    }

    @Transactional(readOnly = true)
    @GetMapping
    public ResponseEntity<List<ClasseDTO>> getAll() {
        List<ClasseDTO> classes = classeService.getAll();
        return ResponseEntity.ok().body(classes);
    }

    private ResponseEntity<ClasseDTO> save(ClasseDTO classeDTO) {
        ClasseDTO classe = classeService.save(classeDTO);
        return ResponseEntity.ok().body(classe);
    }

    @PutMapping
    public ResponseEntity<ClasseDTO> update(@RequestBody ClasseDTO classeDTO) {
        return save(classeDTO);
    }

}
