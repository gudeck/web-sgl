import {Component, Input, OnInit} from '@angular/core';
import * as lodash from 'lodash';
import {Dependente} from '../../model/dependente';
import {Sexo} from '../../model/sexo';
import {Socio} from '../../model/socio';
import {DependenteService} from '../../service/dependente.service';

@Component({
  selector: 'app-dependente',
  templateUrl: './dependente.component.html'
})
export class DependenteComponent implements OnInit {
  @Input() public br: any;
  public visibilidadeDialog: boolean;

  public dependente: Dependente;
  @Input() public responsavel: Socio;
  @Input() public sexos: Sexo[];

  closeDialog() {
    this.visibilidadeDialog = false;
  }

  constructor(
    private dependenteService: DependenteService
  ) {
  }

  ngOnInit(): void {
    this.dependente = new Dependente();
  }

  openDialog() {
    this.visibilidadeDialog = true;
  }

  openDialogForEdit(dependente: Dependente) {
    dependente.dataNascimento = new Date(dependente.dataNascimento);
    this.dependente = lodash.cloneDeep(dependente);
    this.visibilidadeDialog = true;
  }

  save(dependente: Dependente) {
    if (this.responsavel.id) {
      if (dependente.id) {
        this.dependenteService.put(dependente).subscribe(
          dependenteAtualizado => {
            this.dependente = new Dependente();
            const indexRegistro = this.responsavel.dependentes
              .findIndex(dependenteListado => dependenteListado.id === dependenteAtualizado.id);
            this.responsavel.dependentes[indexRegistro] = dependenteAtualizado;
          }
        );
      } else {
        this.dependenteService.post(dependente).subscribe(novoDependente => {
          this.dependente = new Dependente();
          this.responsavel.dependentes.push(novoDependente);
        });
      }
    } else {
      this.responsavel.dependentes.push(dependente);
      this.dependente = new Dependente();
    }
  }

}
