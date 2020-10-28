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
export class JuegosService {

  constructor(private _http: HttpClient) { }


  



  consultarJuego(id:number): Observable<any> {
    return this._http.get(
      `http://localhost:8080/api/juego/${id}`,
      httpOptions
    );
  }

  consultarJuegos(): Observable<any> {
    return this._http.get(
      "http://localhost:8080/api/juego",
      httpOptions
    );
  }

}
