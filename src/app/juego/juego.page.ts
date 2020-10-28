import { Component, OnInit } from '@angular/core';
import { JuegosService } from '../servicios/juegos.service';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.page.html',
  styleUrls: ['./juego.page.scss'],
})
export class JuegoPage implements OnInit {
  isCargando:boolean;
  juegos = [];
  constructor( private _juegosService: JuegosService) { 
    this.isCargando = false;
  }

  ngOnInit() {
    this.isCargando = true;
    this._juegosService.consultarJuegos().subscribe(
      (res) => {
        this.juegos = res;
        this.isCargando = false;
      },
      (error) => {
        console.log(<any>error);
      }
    );

  }

}
