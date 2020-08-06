import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng';
import {Diretor} from '../model/diretor';
import {DiretorService} from '../service/diretor.service';

@Component({
  selector: 'app-diretor',
  templateUrl: './diretor.component.html',
})
export class DiretorComponent implements OnInit {

  public diretores: Diretor[];

  public diretor: Diretor;
  public diretorSelecionado: Diretor;

  public loading: boolean;

  constructor(
    private confirmationService: ConfirmationService,
    private diretorService: DiretorService,
    private messageService: MessageService
  ) {
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
      this.messageService.add({severity: 'info', summary: 'SUCESSO', detail: 'Diretor excluído.'});
      this.loading = false;
      this.cleanSelection();
    }, () => {
      this.messageService.add({severity: 'error', summary: 'FALHA', detail: 'Diretor associado a título(s).'});
      this.loading = false;
    });
  }

  post(novoDiretor: Diretor) {
    this.loading = true;
    this.diretorService.post(novoDiretor).subscribe(diretorRegistrado => {
      this.diretores.push(diretorRegistrado);
      this.messageService.add({severity: 'info', summary: 'SUCESSO', detail: 'Diretor cadastrado.'});
      this.loading = false;
      this.initialize();
    }, () => {
      this.messageService.add({severity: 'info', summary: 'FALHA', detail: 'Não foi possível cadastrar diretor.'});
      this.loading = false;
    });
  }

  put(diretor: Diretor) {
    this.loading = true;
    this.diretorService.put(diretor).subscribe(diretorAtualizado => {
      Object.assign(this.diretores.find(diretorListado => diretorListado.id === diretorAtualizado.id), diretorAtualizado);
      this.messageService.add({severity: 'info', summary: 'SUCESSO', detail: 'Diretor atualizado.'});
      this.loading = false;
      this.initialize();
    }, () => {
      this.messageService.add({severity: 'info', summary: 'FALHA', detail: 'Não foi possível atualizar diretor.'});
      this.loading = false;
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
    this.diretor = new Diretor();
  }

  confirmExclusion(diretorSelecionado: Diretor) {
    this.confirmationService.confirm({
      message: 'Deseja excluir este registro?',
      header: 'Confirmação de Exclusão',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.delete(diretorSelecionado);
      }
    });
  }

  enableEdit() {
    this.diretor = Object.assign({}, this.diretorSelecionado);
  }

  disableEdit() {
    this.diretor = new Diretor();
  }

  save(diretor: Diretor) {
    if (diretor.id) {
      this.put(diretor);
    } else {
      this.post(diretor);
    }
  }

}
