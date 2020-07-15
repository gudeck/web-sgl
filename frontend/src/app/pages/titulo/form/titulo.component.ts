import {Component, OnInit} from '@angular/core';
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
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {

  public atores: Ator[];
  public categorias: Categoria[];
  public classes: Classe[];
  public diretores: Diretor[];
  public titulos: Titulo[];

  public diretoresFiltrados: Diretor[];
  public categoriasFiltradas: Categoria[];

  public novoTitulo: Titulo;
  public tituloSelecionado: Titulo;

  public br: any;
  public loading: boolean;

  constructor(
    private constantService: ConstantService,
    private atorService: AtorService,
    private categoriaService: CategoriaService,
    private classeService: ClasseService,
    private diretorService: DiretorService,
    private tituloService: TituloService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.atorService.getAll().subscribe(value => this.atores = value);
    this.categoriaService.getAll().subscribe(value => this.categorias = value);
    this.classeService.getAll().subscribe(value => this.classes = value);
    this.diretorService.getAll().subscribe(value => this.diretores = value);
    this.tituloService.getAll().subscribe(value => {
      this.titulos = value;
      this.loading = false;
    });

    this.titulos = [];
    this.initialize();

    this.br = this.constantService.br;
  }

  delete(tituloSelecionado: Titulo) {
    this.loading = true;
    this.tituloService.delete(tituloSelecionado.id).subscribe(() => {
      this.titulos = this.titulos.filter(value => value.id !== tituloSelecionado.id);
      this.loading = false;
      this.cleanSelection();
    });
  }

  post(novoTitulo: Titulo) {
    this.loading = true;
    this.tituloService.post(novoTitulo).subscribe(value => {
      this.titulos.push(value);
      this.loading = false;
      this.initialize();
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

  public filtrarCategorias(event) {
    this.categoriasFiltradas = [];
    this.categorias.forEach(categoria => {
      if (categoria.descricao.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
        this.categoriasFiltradas.push(categoria);
      }
    });
  }

}
