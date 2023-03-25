import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoConcepto } from '../entities/TipoConcepto';

@Injectable({
  providedIn: 'root'
})
export class TipoconceptoService {

  private apiUrl = 'http://localhost:8080/tipoconcepto/listaTipoConcepto';

  private url = 'http://localhost:8080/tipoconcepto';

  constructor(private http: HttpClient) { }

  getTipoconcepto(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  createTipoConcepto(tipoconcepto: TipoConcepto): Observable<any>{

    return this.http.post(`${this.url}/guardarTipoConcepto`, tipoconcepto);
  }
}
