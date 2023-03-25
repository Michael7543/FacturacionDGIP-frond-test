import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TipoconsumidorService {
  private apiUrl = 'http://172.31.203.232:8080/Cosumidor/listaConsumidor';

  constructor(private http: HttpClient) {}

  getTipoConsumidor(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
