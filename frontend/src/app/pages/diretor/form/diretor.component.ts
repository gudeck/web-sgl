import {Component, OnInit} from '@angular/core';
import {Diretor} from '../model/diretor';
import {DiretorService} from '../service/diretor.service';

@Component({
  selector: 'app-diretor',
  templateUrl: './diretor.component.html',
  styleUrls: ['./diretor.component.css']
})
export class DiretorComponent implements OnInit {

  public novoDiretor: Diretor;
  public diretorSelecionado: Diretor;
  public diretores: Diretor[];

  constructor(private diretorService: DiretorService) {
  }

  ngOnInit(): void {
    this.diretorService.getAll().subscribe(value => this.diretores = value);
    this.novoDiretor = new Diretor();
  }

  delete(diretorSelecionado: Diretor) {
    this.diretorService.delete(diretorSelecionado.id).subscribe(() => {
      this.diretores = this.diretores.filter(value => value.id !== diretorSelecionado.id);
      this.diretorSelecionado = null;
    });
  }

  post(novoDiretor: Diretor) {
    this.diretorService.post(novoDiretor).subscribe(value => {
      this.diretores.push(value);
      this.novoDiretor = new Diretor();
    });
  }

  isOneSelected(): boolean {
    return Boolean(this.diretorSelecionado);
  }

  setFocus() {
    document.getElementById('inputNome').focus();
  }

}
