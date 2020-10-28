import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  }),
};

@Injectable({
  providedIn: "root",
})
export class AlquileresService {

  constructor(private _http: HttpClient) {}

  createAlquiler(data: any): Observable<any> {
    // let json = JSON.stringify(data);
    console.log(data);
    return this._http.post(
      "http://localhost:8080/api/alquiler",
      data,
      httpOptions
    );
  }

  consultarClienteMasRecurrente(): Observable<any> {
    return this._http.get(
      "http://localhost:8080/api/alquiler/climax",
      httpOptions
    );
  }

  consultarJuegoMasRecurrente(): Observable<any> {
    return this._http.get(
      "http://localhost:8080/api/alquiler/gamemax",
      httpOptions
    );
  }



}
