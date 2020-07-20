import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ResourceService} from '../../../service/resourceService';
import {Categoria} from '../model/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService extends ResourceService<Categoria> {
  constructor(private http: HttpClient) {
    super(http, '/api/categorias');
  }
}
