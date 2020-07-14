import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ResourceService} from '../../../service/resourceService';
import {Diretor} from '../model/diretor';

@Injectable({
  providedIn: 'root'
})
export class DiretorService extends ResourceService<Diretor> {
  constructor(private http: HttpClient) {
    super(http, '/api/diretores');
  }
}
