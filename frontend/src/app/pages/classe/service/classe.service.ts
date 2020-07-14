import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ResourceService} from '../../../service/resourceService';
import {Classe} from '../model/classe';

@Injectable({
  providedIn: 'root'
})
export class ClasseService extends ResourceService<Classe> {
  constructor(private http: HttpClient) {
    super(http, '/api/classes');
  }
}
