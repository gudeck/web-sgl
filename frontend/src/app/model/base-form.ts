import {ConfirmationService} from 'primeng';

export class BaseForm<T> {

  constructor(
    private confirmationService: ConfirmationService
  ) {
  }

  create(novoRegistro: T): void {
    throw new Error('You have to implement the method doSomething!');
  }

  update(registro: T): void {
    throw new Error('You have to implement the method doSomething!');
  }

  save(registro: T): void {
    throw new Error('You have to implement the method doSomething!');
  }

  delete(selecao: T): void {
    throw new Error('You have to implement the method doSomething!');
  }

  confirmExclusion(selecao: T): void {
    this.confirmationService.confirm({
      message: 'Deseja excluir este registro?',
      header: 'Confirmação de Exclusão',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => this.delete(selecao)
    });
  }

}
