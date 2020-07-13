import {Component, OnInit} from '@angular/core';
import {Classe} from '../model/classe';
import {ClasseService} from '../service/classe.service';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent implements OnInit {

  public novaClasse: Classe;
  public classeSelecionada: Classe;
  public classes: Classe[];

  constructor(private classeService: ClasseService) {
  }

  ngOnInit(): void {
    this.classeService.getAll().subscribe(value => this.classes = value);
    this.novaClasse = new Classe();
  }

  delete(classeSelecionado: Classe) {
    this.classeService.delete(classeSelecionado.id).subscribe(() => {
      this.classes = this.classes.filter(value => value.id !== classeSelecionado.id);
      this.classeSelecionada = null;
    });
  }

  post(novoClasse: Classe) {
    this.classeService.post(novoClasse).subscribe(value => {
      this.classes.push(value);
      this.novaClasse = new Classe();
    });
  }

  isOneSelected(): boolean {
    return Boolean(this.classeSelecionada);
  }

  setFocus() {
    document.getElementById('inputNome').focus();
  }

}
