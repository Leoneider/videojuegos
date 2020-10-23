import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {

  registroForm = this._fb.group({
    documento: ["", Validators.required],
    nombre: ["", Validators.required],
    telefono: ["", [Validators.required, Validators.pattern("[0-9]{10}")]],
    fechaNacimiento: ["", Validators.required]
  });

  isCargando: boolean;

  constructor( private _fb: FormBuilder ) { 
    this.isCargando = false;
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.registroForm.value);
  }

  

}
