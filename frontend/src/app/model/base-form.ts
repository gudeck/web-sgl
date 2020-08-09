import {ConfirmationService} from 'primeng';

export abstract class BaseForm<T> {

  confirmExclusion(selecao: T): void {
    this.confirmationService.confirm({
      message: 'Deseja excluir este registro?',
      header: 'Confirmação de Exclusão',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => this.delete(selecao)
    });
  }

  protected constructor(
    private confirmationService: ConfirmationService
  ) {
  }

  abstract create(novoRegistro: T): void ;

  abstract delete(selecao: T): void;

  abstract save(registro: T): void;

  abstract update(registro: T): void;

}
