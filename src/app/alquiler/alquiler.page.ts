import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-alquiler',
  templateUrl: './alquiler.page.html',
  styleUrls: ['./alquiler.page.scss'],
})
export class AlquilerPage implements OnInit {

  registroForm = this._fb.group({
    documento: ["", Validators.required],
    videojuego: ["", Validators.required],
    fechaEntrega: ["", Validators.required]
  });

  isCargando:boolean;

  constructor(private _fb: FormBuilder) { 
    this.isCargando = false;
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.registroForm.value);
  }

}
