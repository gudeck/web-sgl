import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ResourceService} from '../../../service/resourceService';
import {Socio} from '../model/socio';

@Injectable({
  providedIn: 'root'
})
export class SocioService extends ResourceService<Socio> {
  constructor(private http: HttpClient) {
    super(http, '/api/socios');
  }
}
