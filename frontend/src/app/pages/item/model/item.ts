import {Titulo} from '../../titulo/model/titulo';
import {TipoItem} from './tipo-item';

export class Item {
  id: number;
  numeroSerie: number;
  dataAquisicao: Date;
  titulo: Titulo;
  tipoItem: TipoItem;
}
