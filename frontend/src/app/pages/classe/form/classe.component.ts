import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng';
import {Classe} from '../model/classe';
import {ClasseService} from '../service/classe.service';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
})
export class ClasseComponent implements OnInit {

  public classes: Classe[];

  public novaClasse: Classe;
  public classeSelecionada: Classe;

  public loading: boolean;

  constructor(
    private classeService: ClasseService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.classeService.getAll().subscribe(classes => {
      this.classes = classes;
      this.loading = false;
    });
    this.classes = [];
    this.initialize();
  }

  delete(classeSelecionada: Classe) {
    this.loading = true;
    this.classeService.delete(classeSelecionada.id).subscribe(() => {
      this.classes = this.classes.filter(classe => classe.id !== classeSelecionada.id);
      this.messageService.add({severity: 'info', summary: 'SUCESSO', detail: 'Classe excluída.'});
      this.loading = false;
      this.cleanSelection();
    }, () => {
      this.messageService.add({severity: 'error', summary: 'FALHA', detail: 'Classe associada a título(s).'});
      this.loading = false;
    });
  }

  post(novaClasse: Classe) {
    this.loading = true;
    this.classeService.post(novaClasse).subscribe(classeRegistrada => {
      this.classes.push(classeRegistrada);
      this.messageService.add({severity: 'info', summary: 'SUCESSO', detail: 'Classe cadastrada.'});
      this.loading = false;
      this.initialize();
    }, () => {
      this.messageService.add({severity: 'info', summary: 'FALHA', detail: 'Não foi possível cadastrar classe.'});
      this.loading = false;
    });
  }

  isOneSelected(): boolean {
    return Boolean(this.classeSelecionada);
  }

  setFocus() {
    document.getElementById('inputNome').focus();
    this.cleanSelection();
  }

  cleanSelection() {
    this.classeSelecionada = null;
  }

  initialize() {
    this.novaClasse = new Classe();
  }

  confirmExclusion(classeSelecionada: Classe) {
    this.confirmationService.confirm({
      message: 'Deseja excluir este registro?',
      header: 'Confirmação de Exclusão',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.delete(classeSelecionada);
      }
    });
  }
}
