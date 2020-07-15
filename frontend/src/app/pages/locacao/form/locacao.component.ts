import {Component, OnInit} from '@angular/core';
import {Cliente} from '../../cliente/model/cliente';
import {ClienteService} from '../../cliente/service/cliente.service';
import {Item} from '../../item/model/item';
import {ItemService} from '../../item/service/item.service';
import {Locacao} from '../model/locacao';
import {LocacaoService} from '../service/locacao.service';

@Component({
  selector: 'app-locacao',
  templateUrl: './locacao.component.html',
  styleUrls: ['./locacao.component.css']
})
export class LocacaoComponent implements OnInit {

  public clientes: Cliente[];
  public itens: Item[];
  public locacoes: Locacao[];

  public novaLocacao: Locacao;
  public locacaoSelecionada: Locacao;

  public br: any;

  public clientesFiltrados: Cliente[];
  public itensFiltrados: Item[];

  constructor(
    private clienteService: ClienteService,
    private itemService: ItemService,
    private locacaoService: LocacaoService
  ) {
  }

  ngOnInit(): void {
    this.clienteService.getAll().subscribe(clientes => this.clientes = clientes);
    this.itemService.getAll().subscribe(itens => this.itens = itens);
    this.locacaoService.getAll().subscribe(locacoes => this.locacoes = locacoes);

    this.initialize();

    this.br = {
      firstDayOfWeek: 1,
      dayNames: ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'],
      dayNamesShort: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'],
      dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
      monthNames: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
      monthNamesShort: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
      today: 'Hoje',
      clear: 'Limpar'
    };
  }

  delete(locacaoSelecionado: Locacao) {
    this.locacaoService.delete(locacaoSelecionado.id).subscribe(() => {
      this.locacoes = this.locacoes.filter(value => value.id !== locacaoSelecionado.id);
      this.locacaoSelecionada = null;
    });
  }

  post(novaLocacao: Locacao) {
    this.locacaoService.post(novaLocacao).subscribe(locacaoRegistrado => {
      this.locacoes.push(locacaoRegistrado);
      this.initialize();
    });
  }

  isOneSelected(): boolean {
    return Boolean(this.locacaoSelecionada);
  }

  setFocus() {
    document.getElementById('inputNome').focus();
    this.locacaoSelecionada = null;
  }

  initialize() {
    this.novaLocacao = new Locacao();
    this.locacoes = [];
  }

  filtrarClientes(event) {
    this.clientesFiltrados = [];
    this.clientes.forEach(cliente => {
      if (cliente.nome.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
        this.clientesFiltrados.push(cliente);
      }
    });
  }

  public filtrarItens(event) {
    this.itensFiltrados = [];
    this.itens.forEach(item => {
      if (item.titulo.nome.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
        this.itensFiltrados.push(item);
      }
    });
  }
}
