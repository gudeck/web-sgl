package frontend;

import domain.Titulo;
import service.TituloService;

import javax.swing.*;
import javax.swing.table.DefaultTableModel;
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
        titulos = tituloService.get();

        populateJTable(titulos);

        setContentPane(mainPanel);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        pack();
        setLocationRelativeTo(null);
        setVisible(true);

        btnExcluir.addActionListener(e -> {
            try {
                int indexRegistro = tbTitulos.getSelectedRow();
                if (indexRegistro == -1)
                    JOptionPane.showMessageDialog(this, "Selecione um título.", "ERRO", JOptionPane.ERROR_MESSAGE);
                else {
                    tituloService.delete(titulos.get(indexRegistro).getId());
                    excluirTitulo(indexRegistro);
                    JOptionPane.showMessageDialog(this, "Título excluído.", "SUCESSO", JOptionPane.INFORMATION_MESSAGE);
                }
            } catch (Exception exception) {
                JOptionPane.showMessageDialog(this, "Título associado a item(ns).", "ERRO", JOptionPane.ERROR_MESSAGE);
            }
        });
    }

    private void excluirTitulo(int indexRegistro) {
        titulos.remove(indexRegistro);
        populateJTable(titulos);
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
