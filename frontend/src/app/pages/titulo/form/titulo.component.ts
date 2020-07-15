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

  public novoTitulo: Titulo;
  public tituloSelecionado: Titulo;

  public br: any;

  constructor(
    private constantService: ConstantService,
    private atorService: AtorService,
    private categoriaService: CategoriaService,
    private classeService: ClasseService,
    private diretorService: DiretorService,
    private tituloService: TituloService) {
  }

  ngOnInit(): void {
    this.atorService.getAll().subscribe(value => this.atores = value);
    this.categoriaService.getAll().subscribe(value => this.categorias = value);
    this.classeService.getAll().subscribe(value => this.classes = value);
    this.diretorService.getAll().subscribe(value => this.diretores = value);
    this.tituloService.getAll().subscribe(value => this.titulos = value);

    this.novoTitulo = new Titulo();

    this.br = this.constantService.br;
  }

  delete(tituloSelecionado: Titulo) {
    this.tituloService.delete(tituloSelecionado.id).subscribe(() => {
      this.titulos = this.titulos.filter(value => value.id !== tituloSelecionado.id);
      this.tituloSelecionado = null;
    });
  }

  post(novoTitulo: Titulo) {
    this.tituloService.post(novoTitulo).subscribe(value => {
      this.titulos.push(value);
      this.novoTitulo = new Titulo();
    });
  }

  isOneSelected(): boolean {
    return Boolean(this.tituloSelecionado);
  }

  setFocus() {
    document.getElementById('inputNome').focus();
  }

}
