package domain;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.math.BigDecimal;

@Getter
@Setter
public class Classe implements Serializable {

    private Long id;
    private String nome;
    private BigDecimal valor;
    private Integer prazoDevolucao;

}
