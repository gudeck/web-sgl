import {Component, OnInit} from '@angular/core';
import * as lodash from 'lodash';
import {ConfirmationService, MessageService} from 'primeng';
import {ConstantService} from '../../../service/constant.service';
import {Cliente} from '../../cliente/model/cliente';
import {ClienteService} from '../../cliente/service/cliente.service';
import {Item} from '../../item/model/item';
import {ItemService} from '../../item/service/item.service';
import {Locacao} from '../model/locacao';
import {LocacaoService} from '../service/locacao.service';

@Component({
  selector: 'app-locacao',
  templateUrl: './locacao.component.html'
})
export class LocacaoComponent implements OnInit {

  public clientes: Cliente[];
  public itens: Item[];
  public locacoes: Locacao[];

  public clientesFiltrados: Cliente[];

  public locacao: Locacao;
  public locacaoSelecionada: Locacao;

  public br: any;
  public loading: boolean;

  constructor(
    private clienteService: ClienteService,
    private confirmationService: ConfirmationService,
    private constantService: ConstantService,
    private itemService: ItemService,
    private locacaoService: LocacaoService,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.clienteService.getAll().subscribe(clientes => this.clientes = clientes);
    this.itemService.getAll().subscribe(itens => this.itens = itens);
    this.locacaoService.getAll().subscribe(locacoes => {
      this.locacoes = locacoes;
      this.loading = false;
    });

    this.locacoes = [];
    this.initialize();

    this.br = this.constantService.br;
  }

  delete(locacaoSelecionado: Locacao) {
    this.loading = true;
    this.locacaoService.delete(locacaoSelecionado.id).subscribe(() => {
      this.locacoes = this.locacoes.filter(value => value.id !== locacaoSelecionado.id);
      this.messageService.add({severity: 'info', summary: 'SUCESSO', detail: 'Locação excluída.'});
      this.loading = false;
      this.cleanSelection();
    });
  }

  post(novaLocacao: Locacao) {
    this.loading = true;
    this.locacaoService.post(novaLocacao).subscribe(locacaoRegistrado => {
      this.locacoes.push(locacaoRegistrado);
      this.messageService.add({severity: 'info', summary: 'SUCESSO', detail: 'Locação efetuada.'});
      this.loading = false;
      this.initialize();
    }, () => {
      this.messageService.add({severity: 'info', summary: 'FALHA', detail: 'Não foi possível efetuar locação.'});
      this.loading = false;
    });
  }

  put(locacao: Locacao) {
    this.loading = true;
    this.locacaoService.put(locacao).subscribe(locacaoAtualizada => {
      const indexRegistro = this.locacoes.findIndex(locacaoListada => locacaoListada.id === locacaoAtualizada.id);
      this.locacoes[indexRegistro] = lodash.cloneDeep(locacaoAtualizada);
      this.messageService.add({severity: 'info', summary: 'SUCESSO', detail: 'Locação atualizada.'});
      this.loading = false;
      this.initialize();
    }, () => {
      this.messageService.add({severity: 'info', summary: 'FALHA', detail: 'Não foi possível atualizar locação.'});
      this.loading = false;
    });
  }

  isOneSelected(): boolean {
    return Boolean(this.locacaoSelecionada);
  }

  setFocus() {
    document.getElementById('inputNome').focus();
    this.cleanSelection();
  }

  cleanSelection() {
    this.locacaoSelecionada = null;
  }

  initialize() {
    this.locacao = new Locacao();
  }

  filtrarClientes(event) {
    this.clientesFiltrados = [];
    this.clientes.forEach(cliente => {
      if (cliente.nome.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
        this.clientesFiltrados.push(cliente);
      }
    });
  }

  confirmExclusion(locacaoSelecionada: Locacao) {
    this.confirmationService.confirm({
      message: 'Deseja excluir este registro?',
      header: 'Confirmação de Exclusão',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.delete(locacaoSelecionada);
      }
    });
  }

  enableEdit() {
    this.locacaoSelecionada.dataDevolucaoPrevista = new Date(this.locacaoSelecionada.dataDevolucaoPrevista);
    this.locacao = lodash.cloneDeep(this.locacaoSelecionada);
  }

  disableEdit() {
    this.locacao = new Locacao();
  }

  save(locacao: Locacao) {
    if (locacao.id) {
      this.put(locacao);
    } else {
      this.post(locacao);
    }
  }

  preencherDataDevolucaoPrevista() {
    const dataDevolucaoPrevista = new Date();
    dataDevolucaoPrevista.setDate(dataDevolucaoPrevista.getDate() + this.locacao.item.titulo.classe.prazoDevolucao);
    this.locacao.dataDevolucaoPrevista = dataDevolucaoPrevista;
  }

  preencherValor() {
    this.locacao.valor = this.locacao.item.titulo.classe.valor;
  }

}
