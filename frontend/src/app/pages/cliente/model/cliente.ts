import {Sexo} from './sexo';

export class Cliente {
  id: number;
  nome: string;
  dataNascimento: Date;
  ativo: boolean;
  sexo: Sexo;
}
