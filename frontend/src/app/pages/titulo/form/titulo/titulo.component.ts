import {Component, OnInit} from '@angular/core';
import {Ator} from '../../../ator/model/ator';
import {AtorService} from '../../../ator/service/ator.service';
import {Classe} from '../../../classe/model/classe';
import {ClasseService} from '../../../classe/service/classe.service';
import {Diretor} from '../../../diretor/model/diretor';
import {DiretorService} from '../../../diretor/service/diretor.service';
import {Categoria} from '../../model/categoria';
import {Titulo} from '../../model/titulo';
import {CategoriaService} from '../../service/categoria.service';
import {TituloService} from '../../service/titulo.service';

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

  constructor(
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
  }

  delete(tituloSelecionado: Titulo) {
    this.diretorService.delete(tituloSelecionado.id).subscribe(() => {
      this.diretores = this.diretores.filter(value => value.id !== tituloSelecionado.id);
      this.tituloSelecionado = null;
    });
  }

  post(novoTitulo: Titulo) {
    this.diretorService.post(novoTitulo).subscribe(value => {
      this.diretores.push(value);
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
