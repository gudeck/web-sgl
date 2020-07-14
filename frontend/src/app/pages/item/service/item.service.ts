import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ResourceService} from '../../../service/resourceService';
import {Item} from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService extends ResourceService<Item> {
  constructor(private http: HttpClient) {
    super(http, '/api/itens');
  }
}
