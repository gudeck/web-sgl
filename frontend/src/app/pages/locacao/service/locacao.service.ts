import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ResourceService} from '../../../service/resourceService';
import {Locacao} from '../model/locacao';

@Injectable({
  providedIn: 'root'
})
export class LocacaoService extends ResourceService<Locacao> {
  constructor(private http: HttpClient) {
    super(http, '/api/locacoes');
  }
}
