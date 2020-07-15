import {Component, OnInit} from '@angular/core';
import {Classe} from '../model/classe';
import {ClasseService} from '../service/classe.service';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent implements OnInit {

  public classes: Classe[];

  public novaClasse: Classe;
  public classeSelecionada: Classe;

  constructor(private classeService: ClasseService) {
  }

  ngOnInit(): void {
    this.classeService.getAll().subscribe(classes => this.classes = classes);
    this.initialize();
  }

  delete(classeSelecionada: Classe) {
    this.classeService.delete(classeSelecionada.id).subscribe(() => {
      this.classes = this.classes.filter(classe => classe.id !== classeSelecionada.id);
      this.cleanSelection();
    });
  }

  post(novaClasse: Classe) {
    this.classeService.post(novaClasse).subscribe(classeRegistrada => {
      this.classes.push(classeRegistrada);
      this.initialize();
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

}
