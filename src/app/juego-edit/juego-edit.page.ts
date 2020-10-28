import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { JuegosService } from '../servicios/juegos.service';

@Component({
  selector: 'app-juego-edit',
  templateUrl: './juego-edit.page.html',
  styleUrls: ['./juego-edit.page.scss'],
})
export class JuegoEditPage implements OnInit {

  registroForm = this._fb.group({
    id: ["", Validators.required],
    nombre: ["", Validators.required],
    director: ["", Validators.required],
    protagonista: ["", Validators.required],
    productor: ["", Validators.required],
    marca: ["", Validators.required],
    anio: ["", Validators.required],
    precio: ["", Validators.required]
  });

  isCargando:boolean;

  @Input() idJuego:number;

  juego:any;

  constructor(private _modalController: ModalController,
    private _JuegosService: JuegosService,
    private _fb: FormBuilder) { 
      this.isCargando = false;
    }

  ngOnInit() {
    this.conslultarJuego(this.idJuego);
  }

  onSubmit(){
    console.log(this.registroForm.value);
    // this.isCargando = true;
    // this._JuegosService.consultarJuego(idJuego).subscribe( res => {
    //   this.registroForm.setValue(res);
    //   this.isCargando = false;
    // },
    // (error) => {
    //   console.log(<any>error);
    // });

  }

  conslultarJuego(idJuego:number){
    this.isCargando = true;
    this._JuegosService.consultarJuego(idJuego).subscribe( res => {
      this.registroForm.setValue(res);
      this.isCargando = false;
    },
    (error) => {
      console.log(<any>error);
    });

  }

  dismissModal() {
    this._modalController.dismiss({
       nombre: 'Leoneider',
       pais: 'Colombia'
    });
  }
 

}
