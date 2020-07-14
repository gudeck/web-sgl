import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ResourceService} from '../../../service/resourceService';
import {TipoItem} from '../model/tipo-item';

@Injectable({
  providedIn: 'root'
})
export class TipoItemService extends ResourceService<TipoItem> {
  constructor(private http: HttpClient) {
    super(http, '/api/tipos-item');
  }
}
