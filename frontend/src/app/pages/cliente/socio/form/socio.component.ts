import {Component, OnInit, ViewChild} from '@angular/core';
import {ConfirmationService, Message} from 'primeng';
import {ConstantService} from '../../../../service/constant.service';
import {DependenteComponent} from '../../dependente/form/dependente.component';
import {Sexo} from '../../model/sexo';
import {Socio} from '../../model/socio';
import {DependenteService} from '../../service/dependente.service';
import {SexoService} from '../../service/sexo.service';
import {SocioService} from '../../service/socio.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './socio.component.html',
  styleUrls: ['./socio.component.css']
})
export class SocioComponent implements OnInit {

  public sexos: Sexo[];
  public socios: Socio[];

  public novoSocio: Socio;
  public socioSelecionado: Socio;

  public br: any;
  public loading: boolean;

  public messages: Message[];
  @ViewChild('dialogDependente') public dialogDependente: DependenteComponent;

  constructor(
    private confirmationService: ConfirmationService,
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
    this.messages = [];
    this.initialize();

    this.br = this.constantService.br;
  }

  delete(socioSelecionado: Socio) {
    this.loading = true;
    this.socioService.delete(socioSelecionado.id).subscribe(() => {
      this.socios = this.socios.filter(socio => socio.id !== socioSelecionado.id);
      this.messages = [{severity: 'info', summary: 'SUCESSO', detail: 'Sócio excluído.'}];
      this.loading = false;
      this.cleanSelection();
    }, () => {
      this.messages = [{severity: 'error', summary: 'FALHA', detail: 'Sócio associado a locação(ões).'}];
      this.loading = false;
    });
  }

  post(novoSocio: Socio) {
    this.loading = true;
    this.socioService.post(novoSocio).subscribe(socioRegistrado => {
      this.socios.push(socioRegistrado);
      this.messages = [{severity: 'info', summary: 'SUCESSO', detail: 'Sócio cadastrado.'}];
      this.loading = false;
      this.initialize();
    }, () => {
      this.messages = [{severity: 'info', summary: 'FALHA', detail: 'Não foi possível cadastrar sócio.'}];
      this.loading = false;
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
  }

  isLimiteDependentes() {
    return this.novoSocio.dependentes.length >= 3;
  }

  removerDependente(i: number) {
    this.novoSocio.dependentes.splice(i, 1);
  }

  confirmExclusion(socioSelecionado: Socio) {
    this.confirmationService.confirm({
      message: 'Deseja excluir este registro?',
      header: 'Confirmação de Exclusão',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.delete(socioSelecionado);
      }
    });
  }

  abrirDialog() {
    this.dialogDependente.openDialog();
  }

}
