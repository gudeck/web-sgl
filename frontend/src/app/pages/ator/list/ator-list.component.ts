import {Component, OnInit} from '@angular/core';
import {ListTable} from '../../../model/list-table';
import {ConstantService} from '../../../service/constant.service';
import {Ator} from '../model/ator';
import {AtorService} from '../service/ator.service';

@Component({
  selector: 'app-ator-list',
  templateUrl: './ator-list.component.html'
})
export class AtorListComponent extends ListTable<Ator> implements OnInit {

  constructor(
    private atorService: AtorService,
    private constService: ConstantService
  ) {
    super(constService);
  }

  disableEdit(): void {
    this.registro = new Ator();
  }

  ngOnInit(): void {
    this.numeroRegistros = this.constService.quantidadeRegistrosLista;

    this.registro = new Ator();
    this.registros = [];
    this.atorService.getAll().subscribe(atores => {
      this.registros = atores;
    });
  }

}
