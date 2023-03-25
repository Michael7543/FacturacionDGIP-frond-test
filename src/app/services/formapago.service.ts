import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormapagoService {

  private apiUrl = 'http://172.31.203.232:8080/pago/listaFormaPago';

  constructor(private http: HttpClient) { }

  getFormaPago(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

}
