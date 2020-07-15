import {Cliente} from './cliente';
import {Socio} from './socio';

export class Dependente extends Cliente {
  responsavel: Socio;
}
