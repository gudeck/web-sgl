import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ResourceService} from '../../../service/resourceService';
import {Sexo} from '../model/sexo';

@Injectable({
  providedIn: 'root'
})
export class SexoService extends ResourceService<Sexo> {
  constructor(private http: HttpClient) {
    super(http, '/api/sexos');
  }
}
