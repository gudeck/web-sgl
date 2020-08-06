import {Component, OnInit, ViewChild} from '@angular/core';
import * as lodash from 'lodash';
import {ConfirmationService, MessageService} from 'primeng';
import {ConstantService} from '../../../../service/constant.service';
import {DependenteComponent} from '../../dependente/form/dependente.component';
import {Sexo} from '../../model/sexo';
import {Socio} from '../../model/socio';
import {DependenteService} from '../../service/dependente.service';
import {SexoService} from '../../service/sexo.service';
import {SocioService} from '../../service/socio.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './socio.component.html'
})
export class SocioComponent implements OnInit {

  public sexos: Sexo[];
  public socios: Socio[];

  public socio: Socio;
  public socioSelecionado: Socio;

  public br: any;
  public loading: boolean;

  @ViewChild('dialogDependente') public dialogDependente: DependenteComponent;

  constructor(
    private confirmationService: ConfirmationService,
    private constantService: ConstantService,
    private dependenteService: DependenteService,
    private messageService: MessageService,
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
      this.messageService.add({severity: 'info', summary: 'SUCESSO', detail: 'Sócio excluído.'});
      this.loading = false;
      this.cleanSelection();
    }, () => {
      this.messageService.add({severity: 'error', summary: 'FALHA', detail: 'Sócio associado a locação(ões).'});
      this.loading = false;
    });
  }

  post(novoSocio: Socio) {
    this.loading = true;
    this.socioService.post(novoSocio).subscribe(socioRegistrado => {
      this.socios.push(socioRegistrado);
      this.messageService.add({severity: 'info', summary: 'SUCESSO', detail: 'Sócio cadastrado.'});
      this.loading = false;
      this.initialize();
    }, () => {
      this.messageService.add({severity: 'info', summary: 'FALHA', detail: 'Não foi possível cadastrar sócio.'});
      this.loading = false;
    });
  }

  put(socio: Socio) {
    this.loading = true;
    this.socioService.put(socio).subscribe(socioAtualizado => {
      const indexRegistro = this.socios.findIndex(socioListado => socioListado.id === socioAtualizado.id);
      this.socios[indexRegistro] = lodash.cloneDeep(socioAtualizado);
      this.messageService.add({severity: 'info', summary: 'SUCESSO', detail: 'Sócio atualizado.'});
      this.loading = false;
      this.initialize();
    }, () => {
      this.messageService.add({severity: 'info', summary: 'FALHA', detail: 'Não foi possível atualizar sócio.'});
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
    this.socio = new Socio();
  }

  isLimiteDependentes() {
    return this.socio.dependentes.length >= 3;
  }

  removerDependente(i: number) {
    this.socio.dependentes.splice(i, 1);
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

  enableEdit() {
    this.socioSelecionado.dataNascimento = new Date(this.socioSelecionado.dataNascimento);
    this.socio = lodash.cloneDeep(this.socioSelecionado);
  }

  disableEdit() {
    this.socio = new Socio();
  }

  save(socio: Socio) {
    if (socio.id) {
      this.put(socio);
    } else {
      this.post(socio);
    }
  }

}
