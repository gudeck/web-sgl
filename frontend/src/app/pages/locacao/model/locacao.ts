import {Cliente} from '../../cliente/model/cliente';
import {Item} from '../../item/model/item';

export class Locacao {
  id: number;
  dataLocacao: Date;
  dataDevolucaoPrevista: Date;
  dataDevolucao: Date;
  valor: number;
  multa: number;
  item: Item;
  cliente: Cliente;
}
