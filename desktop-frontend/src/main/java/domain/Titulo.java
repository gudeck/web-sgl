package domain;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;

@Getter
@Setter
public class Titulo implements Serializable {

    private Long id;
    private String nome;
    private String ano;
    private String sinopse;
    private Categoria categoria;
    private Diretor diretor;
    private Classe classe;
    private List<Ator> atores;

}
