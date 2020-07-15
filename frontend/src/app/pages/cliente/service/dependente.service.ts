import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ResourceService} from '../../../service/resourceService';
import {Dependente} from '../model/dependente';

@Injectable({
  providedIn: 'root'
})
export class DependenteService extends ResourceService<Dependente> {
  constructor(private http: HttpClient) {
    super(http, '/api/dependentes');
  }
}
