import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng';
import {Ator} from '../model/ator';
import {AtorService} from '../service/ator.service';

@Component({
  selector: 'app-ator',
  templateUrl: './ator.component.html',
})
export class AtorComponent implements OnInit {

  public atores: Ator[];

  public novoAtor: Ator;
  public atorSelecionado: Ator;

  public loading: boolean;

  constructor(
    private atorService: AtorService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {
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
      this.messageService.add({severity: 'info', summary: 'SUCESSO', detail: 'Ator excluído.'});
      this.loading = false;
      this.cleanSelection();
    }, () => {
      this.messageService.add({severity: 'error', summary: 'FALHA', detail: 'Ator associado a título(s).'});
      this.loading = false;
    });
  }

  post(novoAtor: Ator) {
    this.loading = true;
    this.atorService.post(novoAtor).subscribe(atorRegistrado => {
      this.atores.push(atorRegistrado);
      this.messageService.add({severity: 'info', summary: 'SUCESSO', detail: 'Ator cadastrado.'});
      this.loading = false;
      this.initialize();
    }, () => {
      this.messageService.add({severity: 'info', summary: 'FALHA', detail: 'Não foi possível cadastrar ator.'});
      this.loading = false;
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

  confirmExclusion(atorSelecionado: Ator) {
    this.confirmationService.confirm({
      message: 'Deseja excluir este registro?',
      header: 'Confirmação de Exclusão',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.delete(atorSelecionado);
      }
    });
  }

}
