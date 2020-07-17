import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ResourceService} from '../../../service/resourceService';
import {Titulo} from '../model/titulo';

@Injectable({
  providedIn: 'root'
})
export class TituloService extends ResourceService<Titulo> {

  constructor(private http: HttpClient) {
    super(http, '/api/titulos');
  }
}
