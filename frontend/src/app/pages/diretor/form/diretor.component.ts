import {Component, OnInit} from '@angular/core';
import {ConfirmationService, Message} from 'primeng';
import {Diretor} from '../model/diretor';
import {DiretorService} from '../service/diretor.service';

@Component({
  selector: 'app-diretor',
  templateUrl: './diretor.component.html',
  styleUrls: ['./diretor.component.css']
})
export class DiretorComponent implements OnInit {

  public diretores: Diretor[];

  public novoDiretor: Diretor;
  public diretorSelecionado: Diretor;

  public loading: boolean;

  public messages: Message[];

  constructor(
    private diretorService: DiretorService,
    private confirmationService: ConfirmationService
  ) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.diretorService.getAll().subscribe(diretores => {
      this.diretores = diretores;
      this.loading = false;
    });
    this.diretores = [];
    this.messages = [];
    this.initialize();
  }

  delete(diretorSelecionado: Diretor) {
    this.loading = true;
    this.diretorService.delete(diretorSelecionado.id).subscribe(() => {
      this.diretores = this.diretores.filter(diretor => diretor.id !== diretorSelecionado.id);
      this.messages = [{severity: 'info', summary: 'SUCESSO', detail: 'Diretor excluído.'}];
      this.loading = false;
      this.cleanSelection();
    }, () => {
      this.messages = [{severity: 'error', summary: 'FALHA', detail: 'Diretor associado a título(s).'}];
      this.loading = false;
    });
  }

  post(novoDiretor: Diretor) {
    this.loading = true;
    this.diretorService.post(novoDiretor).subscribe(diretorRegistrado => {
      this.diretores.push(diretorRegistrado);
      this.messages = [{severity: 'info', summary: 'SUCESSO', detail: 'Diretor cadastrado.'}];
      this.loading = false;
      this.initialize();
    }, () => {
      this.messages = [{severity: 'info', summary: 'FALHA', detail: 'Não foi possível cadastrar diretor.'}];
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
    this.novoDiretor = new Diretor();
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

}
