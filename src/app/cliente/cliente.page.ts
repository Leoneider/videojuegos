import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ClienteService } from "../servicios/cliente.service";

@Component({
  selector: "app-cliente",
  templateUrl: "./cliente.page.html",
  styleUrls: ["./cliente.page.scss"],
})
export class ClientePage implements OnInit {
  registroForm = this._fb.group({
    documento: ["", Validators.required],
    nombre: ["", Validators.required],
    telefono: ["", [Validators.required, Validators.pattern("[0-9]{10}")]],
    fechaNacimiento: ["", Validators.required],
  });

  isCargando: boolean;

  constructor(
    private _fb: FormBuilder,
    private _clienteService: ClienteService
  ) {
    this.isCargando = false;
  }

  ngOnInit() {}

  onSubmit() {
    this.isCargando = true;
    this._clienteService.createCliente(this.registroForm.value).subscribe(
      (res) => {
        console.log(res);
        this.isCargando = false;
        this.registroForm.reset();
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }


}
