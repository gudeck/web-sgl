package frontend;

import domain.Titulo;
import service.TituloService;

import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.List;

public class TituloCrud extends JFrame {

    private final List<Titulo> titulos;
    private JPanel mainPanel;
    private JTable tbTitulos;
    private JButton btnExcluir;
    private JScrollPane scroll;

    public TituloCrud(String tituloPagina) {
        super(tituloPagina);
        TituloService tituloService = new TituloService();
        titulos = tituloService.getTitulos();

        populateJTable(titulos);

        setContentPane(mainPanel);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        pack();
        setLocationRelativeTo(null);
        setVisible(true);

        btnExcluir.addActionListener(e -> System.out.println(titulos.get(tbTitulos.getSelectedRow()).getId()));
    }

    public static void main(String[] args) {
        new TituloCrud("App");
    }

    private void populateJTable(List<Titulo> titulos) {
        Object[][] objects = new Object[titulos.size()][];
        final Integer[] i = {0};

        titulos.forEach(titulo -> {
            Object[] novoObjeto = {titulo.getId(), titulo.getNome(), titulo.getAno(),
                    titulo.getCategoria().getDescricao(), titulo.getDiretor().getNome(), titulo.getClasse().getNome()};

            objects[i[0]++] = novoObjeto;
        });
        tbTitulos.setModel(new DefaultTableModel(
                objects,
                new String[]{"Código", "Nome", "Ano", "Categoria", "Diretor", "Classe"}
        ));
    }
}
