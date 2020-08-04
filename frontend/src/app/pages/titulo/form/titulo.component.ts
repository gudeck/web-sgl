import {Component, OnInit} from '@angular/core';
import {ConfirmationService, Message} from 'primeng';
import {ConstantService} from '../../../service/constant.service';
import {Ator} from '../../ator/model/ator';
import {AtorService} from '../../ator/service/ator.service';
import {Classe} from '../../classe/model/classe';
import {ClasseService} from '../../classe/service/classe.service';
import {Diretor} from '../../diretor/model/diretor';
import {DiretorService} from '../../diretor/service/diretor.service';
import {Categoria} from '../model/categoria';
import {Titulo} from '../model/titulo';
import {CategoriaService} from '../service/categoria.service';
import {TituloService} from '../service/titulo.service';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
})
export class TituloComponent implements OnInit {

  public atores: Ator[];
  public categorias: Categoria[];
  public classes: Classe[];
  public diretores: Diretor[];
  public titulos: Titulo[];

  public diretoresFiltrados: Diretor[];


  public novoTitulo: Titulo;
  public tituloSelecionado: Titulo;

  public br: any;
  public loading: boolean;

  public messages: Message[];

  constructor(
    private constantService: ConstantService,
    private atorService: AtorService,
    private categoriaService: CategoriaService,
    private classeService: ClasseService,
    private confirmationService: ConfirmationService,
    private diretorService: DiretorService,
    private tituloService: TituloService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.atorService.getAll().subscribe(atores => this.atores = atores);
    this.categoriaService.getAll().subscribe(categorias => this.categorias = categorias);
    this.classeService.getAll().subscribe(classes => this.classes = classes);
    this.diretorService.getAll().subscribe(diretores => this.diretores = diretores);
    this.tituloService.getAll().subscribe(titulos => {
      this.titulos = titulos;
      this.loading = false;
    });

    this.titulos = [];
    this.messages = [];
    this.initialize();

    this.br = this.constantService.br;
  }

  delete(tituloSelecionado: Titulo) {
    this.loading = true;
    this.tituloService.delete(tituloSelecionado.id).subscribe(() => {
      this.titulos = this.titulos.filter(titulo => titulo.id !== tituloSelecionado.id);
      this.messages = [{severity: 'info', summary: 'SUCESSO', detail: 'Título excluído.'}];
      this.loading = false;
      this.cleanSelection();
    }, () => {
      this.messages = [{severity: 'error', summary: 'FALHA', detail: 'Título associado a item(ns).'}];
      this.loading = false;
    });
  }

  post(novoTitulo: Titulo) {
    this.loading = true;
    this.tituloService.post(novoTitulo).subscribe(tituloRegistrado => {
      this.titulos.push(tituloRegistrado);
      this.messages = [{severity: 'info', summary: 'SUCESSO', detail: 'Título cadastrado.'}];
      this.loading = false;
      this.initialize();
    }, () => {
      this.messages = [{severity: 'info', summary: 'FALHA', detail: 'Não foi possível cadastrar título.'}];
      this.loading = false;
    });
  }

  isOneSelected(): boolean {
    return Boolean(this.tituloSelecionado);
  }

  setFocus() {
    document.getElementById('inputNome').focus();
    this.cleanSelection();
  }

  cleanSelection() {
    this.tituloSelecionado = null;
  }

  initialize() {
    this.novoTitulo = new Titulo();
  }


  public filtrarDiretores(event) {
    this.diretoresFiltrados = [];
    this.diretores.forEach(diretor => {
      if (diretor.nome.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
        this.diretoresFiltrados.push(diretor);
      }
    });
  }

  confirmExclusion(tituloSelecionado: Titulo) {
    this.confirmationService.confirm({
      message: 'Deseja excluir este registro?',
      header: 'Confirmação de Exclusão',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.delete(tituloSelecionado);
      }
    });
  }

}
