import {Cliente} from './cliente';
import {Dependente} from './dependente';

export class Socio extends Cliente {
  cpf: string;
  endereco: string;
  telefone: string;
  dependentes: Dependente[];

  constructor() {
    super();
    this.dependentes = [];
  }

}
