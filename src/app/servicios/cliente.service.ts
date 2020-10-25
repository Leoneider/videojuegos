import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
 

  constructor(private _http: HttpClient) { }

  createCliente(data: any): Observable<any> {
    // let json = JSON.stringify(data);
    console.log(data);
    return this._http.post(
      "http://localhost:8080/api/cliente",
      data,
      httpOptions
    );
  }
}
