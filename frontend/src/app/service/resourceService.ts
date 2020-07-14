import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export class ResourceService<T> {

  constructor(private httpClient: HttpClient, protected url: string) {
  }

  getAll(): Observable<T[]> {
    return this.httpClient.get<T[]>(`${this.url}`);
  }

  post(newEntry: T): Observable<T> {
    return this.httpClient.post<T>(this.url, newEntry);
  }

  delete(id: number): Observable<{}> {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

}
