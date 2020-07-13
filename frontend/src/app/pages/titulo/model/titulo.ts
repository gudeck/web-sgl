import {Classe} from '../../classe/model/classe';
import {Diretor} from '../../diretor/model/diretor';
import {Categoria} from './categoria';

export class Titulo {
  id: number;
  nome: string;
  ano: Date;
  sinopse: string;
  categoria: Categoria;
  diretor: Diretor;
  classe: Classe;
}
