import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ResourceService} from '../../../service/resourceService';
import {Ator} from '../model/ator';

@Injectable({
  providedIn: 'root'
})
export class AtorService extends ResourceService<Ator> {
  constructor(private http: HttpClient) {
    super(http, '/api/atores');
  }
}
