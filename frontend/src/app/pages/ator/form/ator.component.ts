import {Component, OnInit} from '@angular/core';
import {Ator} from '../model/ator';
import {AtorService} from '../service/ator.service';

@Component({
  selector: 'app-ator',
  templateUrl: './ator.component.html',
  styleUrls: ['./ator.component.css']
})
export class AtorComponent implements OnInit {

  public novoAtor: Ator;
  public atorSelecionado: Ator;
  public atores: Ator[];

  constructor(private atorService: AtorService) {
  }

  ngOnInit(): void {
    this.atorService.getAll().subscribe(value => this.atores = value);
    this.novoAtor = new Ator();
  }

  delete(atorSelecionado: Ator) {
    this.atorService.delete(atorSelecionado.id).subscribe(() => {
      this.atores = this.atores.filter(value => value.id !== atorSelecionado.id);
      this.atorSelecionado = null;
    });
  }

  post(novoAtor: Ator) {
    this.atorService.post(novoAtor).subscribe(value => {
      this.atores.push(value);
      this.novoAtor = new Ator();
    });
  }

  isOneSelected(): boolean {
    return Boolean(this.atorSelecionado);
  }

  setFocus() {
    document.getElementById('inputNome').focus();
  }

}
