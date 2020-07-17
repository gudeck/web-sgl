import {Component, OnInit} from '@angular/core';
import {Diretor} from '../model/diretor';
import {DiretorService} from '../service/diretor.service';

@Component({
  selector: 'app-diretor',
  templateUrl: './diretor.component.html',
  styleUrls: ['./diretor.component.css']
})
export class DiretorComponent implements OnInit {

  public diretores: Diretor[];

  public novoDiretor: Diretor;
  public diretorSelecionado: Diretor;

  public loading: boolean;

  constructor(private diretorService: DiretorService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.diretorService.getAll().subscribe(diretores => {
      this.diretores = diretores;
      this.loading = false;
    });
    this.diretores = [];
    this.initialize();
  }

  delete(diretorSelecionado: Diretor) {
    this.loading = true;
    this.diretorService.delete(diretorSelecionado.id).subscribe(() => {
      this.diretores = this.diretores.filter(diretor => diretor.id !== diretorSelecionado.id);
      this.loading = false;
      this.cleanSelection();
    });
  }

  post(novoDiretor: Diretor) {
    this.loading = true;
    this.diretorService.post(novoDiretor).subscribe(diretorRegistrado => {
      this.diretores.push(diretorRegistrado);
      this.loading = false;
      this.initialize();
    });
  }

  isOneSelected(): boolean {
    return Boolean(this.diretorSelecionado);
  }

  setFocus() {
    document.getElementById('inputNome').focus();
    this.cleanSelection();
  }

  cleanSelection() {
    this.diretorSelecionado = null;
  }

  initialize() {
    this.novoDiretor = new Diretor();
  }

}
