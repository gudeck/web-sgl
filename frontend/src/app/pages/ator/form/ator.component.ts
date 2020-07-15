import {Component, OnInit} from '@angular/core';
import {Ator} from '../model/ator';
import {AtorService} from '../service/ator.service';

@Component({
  selector: 'app-ator',
  templateUrl: './ator.component.html',
  styleUrls: ['./ator.component.css']
})
export class AtorComponent implements OnInit {

  public atores: Ator[];

  public novoAtor: Ator;
  public atorSelecionado: Ator;

  constructor(private atorService: AtorService) {
  }

  ngOnInit(): void {
    this.atorService.getAll().subscribe(atores => this.atores = atores);
    this.initialize();
  }

  delete(atorSelecionado: Ator) {
    this.atorService.delete(atorSelecionado.id).subscribe(() => {
      this.atores = this.atores.filter(ator => ator.id !== atorSelecionado.id);
      this.cleanSelection();
    });
  }

  post(novoAtor: Ator) {
    this.atorService.post(novoAtor).subscribe(atorRegistrado => {
      this.atores.push(atorRegistrado);
      this.initialize();
    });
  }

  isOneSelected(): boolean {
    return Boolean(this.atorSelecionado);
  }

  setFocus() {
    document.getElementById('inputNome').focus();
    this.cleanSelection();
  }

  cleanSelection() {
    this.atorSelecionado = null;
  }

  initialize() {
    this.novoAtor = new Ator();
  }

}
