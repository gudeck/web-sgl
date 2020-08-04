import {Component, OnInit} from '@angular/core';
import {ConfirmationService, Message} from 'primeng';
import {ConstantService} from '../../../service/constant.service';
import {Cliente} from '../../cliente/model/cliente';
import {ClienteService} from '../../cliente/service/cliente.service';
import {Item} from '../../item/model/item';
import {ItemService} from '../../item/service/item.service';
import {Locacao} from '../model/locacao';
import {LocacaoService} from '../service/locacao.service';

@Component({
  selector: 'app-locacao',
  templateUrl: './locacao.component.html',
})
export class LocacaoComponent implements OnInit {

  public clientes: Cliente[];
  public itens: Item[];
  public locacoes: Locacao[];

  public clientesFiltrados: Cliente[];
  public itensFiltrados: Item[];

  public novaLocacao: Locacao;
  public locacaoSelecionada: Locacao;

  public br: any;
  public loading: boolean;

  public messages: Message[];

  constructor(
    private confirmationService: ConfirmationService,
    private constantService: ConstantService,
    private clienteService: ClienteService,
    private itemService: ItemService,
    private locacaoService: LocacaoService
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
    this.messages = [];
    this.initialize();

    this.br = this.constantService.br;
  }

  delete(locacaoSelecionado: Locacao) {
    this.loading = true;
    this.locacaoService.delete(locacaoSelecionado.id).subscribe(() => {
      this.locacoes = this.locacoes.filter(value => value.id !== locacaoSelecionado.id);
      this.messages = [{severity: 'info', summary: 'SUCESSO', detail: 'Locação excluída.'}];
      this.loading = false;
      this.cleanSelection();
    });
  }

  post(novaLocacao: Locacao) {
    this.loading = true;
    this.locacaoService.post(novaLocacao).subscribe(locacaoRegistrado => {
      this.locacoes.push(locacaoRegistrado);
      this.messages = [{severity: 'info', summary: 'SUCESSO', detail: 'Locação efetuada.'}];
      this.loading = false;
      this.initialize();
    }, () => {
      this.messages = [{severity: 'info', summary: 'FALHA', detail: 'Não foi possível efetuar locação.'}];
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
    this.novaLocacao = new Locacao();
  }

  filtrarClientes(event) {
    this.clientesFiltrados = [];
    this.clientes.forEach(cliente => {
      if (cliente.nome.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
        this.clientesFiltrados.push(cliente);
      }
    });
  }

  filtrarItens(event) {
    this.itensFiltrados = [];
    this.itens.forEach(item => {
      if (item.numeroSerie.toString().indexOf(event.query.toLowerCase()) === 0) {
        this.itensFiltrados.push(item);
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
}
