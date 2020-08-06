import {Component, Input, OnInit} from '@angular/core';
import {Dependente} from '../../model/dependente';
import {Sexo} from '../../model/sexo';

@Component({
  selector: 'app-dependente',
  templateUrl: './dependente.component.html',
})
export class DependenteComponent implements OnInit {
  @Input() public br: any;

  @Input() public sexos: Sexo[];
  @Input() public dependentes: Dependente[];

  public dependente: Dependente;

  public visibilidadeDialog: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.initialize();
  }


  openDialog(dependente ?: Dependente) {
    this.visibilidadeDialog = true;
  }

  closeDialog() {
    this.visibilidadeDialog = false;
  }

  inserirDependente(novoDependente: Dependente) {
    this.dependentes.push(novoDependente);
    this.initialize();
  }

  initialize() {
    this.dependente = new Dependente();
  }

}
