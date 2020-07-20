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

  public loading: boolean;

  constructor(private atorService: AtorService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.atorService.getAll().subscribe(atores => {
      this.atores = atores;
      this.loading = false;
    });
    this.atores = [];
    this.initialize();
  }

  delete(atorSelecionado: Ator) {
    this.loading = true;
    this.atorService.delete(atorSelecionado.id).subscribe(() => {
      this.atores = this.atores.filter(ator => ator.id !== atorSelecionado.id);
      this.loading = false;
      this.cleanSelection();
    });
  }

  post(novoAtor: Ator) {
    this.loading = true;
    this.atorService.post(novoAtor).subscribe(atorRegistrado => {
      this.atores.push(atorRegistrado);
      this.loading = false;
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
