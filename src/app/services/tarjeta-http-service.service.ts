import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TarjetaHttpServiceService {

 
  private apiUrl = 'http://172.31.203.232:8080/Tarjeta/listTarjeta';

  constructor(private http: HttpClient) { }

  getTarjeta(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
