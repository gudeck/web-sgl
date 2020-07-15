import {Component, OnInit} from '@angular/core';
import {Dependente} from '../model/dependente';
import {Sexo} from '../model/sexo';
import {Socio} from '../model/socio';
import {DependenteService} from '../service/dependente.service';
import {SexoService} from '../service/sexo.service';
import {SocioService} from '../service/socio.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  public dependentes: Dependente[];
  public sexos: Sexo[];
  public socios: Socio[];

  public novoSocio: Socio;
  public socioSelecionado: Socio;

  public br: any;

  constructor(
    private dependenteService: DependenteService,
    private sexoService: SexoService,
    private socioService: SocioService) {
  }

  ngOnInit(): void {
    this.sexoService.getAll().subscribe(value => this.sexos = value);
    this.socioService.getAll().subscribe(value => this.socios = value);

    this.initialize();

    this.br = {
      firstDayOfWeek: 1,
      dayNames: ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'],
      dayNamesShort: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'],
      dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
      monthNames: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
      monthNamesShort: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
      today: 'Hoje',
      clear: 'Limpar'
    };
  }

  delete(socioSelecionado: Socio) {
    this.socioService.delete(socioSelecionado.id).subscribe(() => {
      this.socios = this.socios.filter(value => value.id !== socioSelecionado.id);
      this.socioSelecionado = null;
    });
  }

  post(novoSocio: Socio) {
    this.socioService.post(novoSocio).subscribe(socioRegistrado => {
      this.dependentes.forEach(dependente => {
        dependente.responsavel = socioRegistrado;
        this.dependenteService.post(dependente).subscribe();
      });
      this.socios.push(socioRegistrado);
      this.initialize();
    });
  }

  isOneSelected(): boolean {
    return Boolean(this.socioSelecionado);
  }

  setFocus() {
    document.getElementById('inputNome').focus();
    this.socioSelecionado = null;
  }

  initialize() {
    this.novoSocio = new Socio();
    this.dependentes = [];
  }

  criarDependente() {
    if (!this.isLimiteDependentes()) {
      this.dependentes.push(new Dependente());
    }
  }

  isLimiteDependentes() {
    return this.dependentes.length >= 3;
  }

  public removerDependente(i: number) {
    this.dependentes.splice(i, 1);
  }
}
