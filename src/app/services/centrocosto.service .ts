import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CentroCostoService {

  private apiUrl = 'http://172.31.203.232:8080/centrocosto/listarCentroCosto';

  constructor(private http: HttpClient) { }

  getCentroCosto(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

}
