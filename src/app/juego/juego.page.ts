import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { JuegosService } from '../servicios/juegos.service';
import { JuegoEditPage } from '../juego-edit/juego-edit.page';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.page.html',
  styleUrls: ['./juego.page.scss'],
})
export class JuegoPage implements OnInit {
  isCargando:boolean;
  juegos = [];
  
  

  constructor( private _juegosService: JuegosService,
    private _modalController: ModalController) { 
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


  async presentModal(id:number) {
    const modal = await this._modalController.create({
      component: JuegoEditPage,
      cssClass: 'my-custom-class',
      componentProps: { idJuego: id
      }
    });
    await modal.present();

    const { data } = await modal.onDidDismiss();
    console.log(data);
  }



}
