import {Component, OnInit, ViewChild} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng';
import {BaseForm} from '../../../model/base-form';
import {AtorListComponent} from '../list/ator-list.component';
import {Ator} from '../model/ator';
import {AtorService} from '../service/ator.service';

@Component({
  selector: 'app-ator-form',
  templateUrl: './ator-form.component.html'
})
export class AtorFormComponent extends BaseForm<Ator> implements OnInit {

  public isOneSelected: boolean;

  @ViewChild('formAtor') formAtor;
  @ViewChild(AtorListComponent) listAtor: AtorListComponent;

  constructor(
    private atorService: AtorService,
    private confService: ConfirmationService,
    private messageService: MessageService
  ) {
    super(confService);
  }

  delete(atorSelecionado: Ator): void {
    this.atorService.delete(atorSelecionado.id).subscribe(() => {
      this.listAtor.registros = this.listAtor.registros.filter(ator => ator.id !== atorSelecionado.id);
      this.listAtor.registro = new Ator();
      this.listAtor.cleanSelection();
      this.messageService.add({severity: 'info', summary: 'SUCESSO', detail: 'Ator excluído.'});
    }, () => {
      this.messageService.add({severity: 'error', summary: 'FALHA', detail: 'Ator associado a título(s).'});
    });
  }

  ngOnInit(): void {
  }

  onOneSelected(event: boolean): void {
    this.isOneSelected = event;
  }

  create(novoAtor: Ator): void {
    this.atorService.post(novoAtor).subscribe(atorRegistrado => {
      this.listAtor.registros.push(atorRegistrado);
      this.listAtor.cleanSelection();
      this.messageService.add({severity: 'info', summary: 'SUCESSO', detail: 'Ator cadastrado.'});
    }, () => {
      this.messageService.add({severity: 'info', summary: 'FALHA', detail: 'Não foi possível cadastrar ator.'});
    });
  }

  update(ator: Ator): void {
    this.atorService.put(ator).subscribe(atorAtualizado => {
      Object.assign(this.listAtor.registros.find(atorListado => atorListado.id === atorAtualizado.id), atorAtualizado);
      this.listAtor.cleanSelection();
      this.messageService.add({severity: 'info', summary: 'SUCESSO', detail: 'Ator atualizado.'});
    }, () => {
      this.messageService.add({severity: 'info', summary: 'FALHA', detail: 'Não foi possível atualizar ator.'});
    });
  }

  save(ator: Ator): void {
    if (ator.id) {
      this.update(ator);
    } else {
      this.create(ator);
    }
  }
}
