import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bancos } from '../entities/Bancos';

@Injectable({
  providedIn: 'root'
})
export class BancosService {

  private apiUrl = 'http://172.31.203.232:8080/bancos/listarBancos';
  private apiUrl1= 'http://localhost:8080/bancos/guardarBancos'

  constructor(private http: HttpClient) { }

  getBancos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  delete(id:number): Observable <any> {
    const url = `${this.apiUrl}/${id}`;
    const Response = this.http.delete<any>(url);
    return Response;
  }



  //  store(product:CreateProductDto):Observable<ProductModel[]> {
  //   const url = `${this.API_URL}`;
  //   return this.httpClient.post<ProductModel[]>(url, product)
  }

