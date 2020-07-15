import {Component, OnInit} from '@angular/core';
import {ConstantService} from '../../../service/constant.service';
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
  public loading: boolean;

  constructor(
    private constantService: ConstantService,
    private dependenteService: DependenteService,
    private sexoService: SexoService,
    private socioService: SocioService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.sexoService.getAll().subscribe(sexos => this.sexos = sexos);
    this.socioService.getAll().subscribe(socios => {
      this.socios = socios;
      this.loading = false;
    });

    this.socios = [];
    this.initialize();

    this.br = this.constantService.br;
  }

  delete(socioSelecionado: Socio) {
    this.loading = true;
    this.socioService.delete(socioSelecionado.id).subscribe(() => {
      this.socios = this.socios.filter(socio => socio.id !== socioSelecionado.id);
      this.loading = false;
      this.cleanSelection();
    });
  }

  post(novoSocio: Socio) {
    this.loading = true;
    this.socioService.post(novoSocio).subscribe(socioRegistrado => {
      this.dependentes.forEach(dependente => {
        dependente.responsavel = socioRegistrado;
        this.dependenteService.post(dependente).subscribe();
      });
      this.socios.push(socioRegistrado);
      this.loading = false;
      this.initialize();
    });
  }

  isOneSelected(): boolean {
    return Boolean(this.socioSelecionado);
  }

  setFocus() {
    document.getElementById('inputNome').focus();
    this.cleanSelection();
  }

  cleanSelection() {
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
