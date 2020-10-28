import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { debounceTime } from "rxjs/operators";
import { JuegosService } from "../servicios/juegos.service";
import { ClienteService } from "../servicios/cliente.service";
import { AlquileresService } from "../servicios/alquileres.service";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-alquiler",
  templateUrl: "./alquiler.page.html",
  styleUrls: ["./alquiler.page.scss"],
})
export class AlquilerPage implements OnInit {
  documento = new FormControl("");

  registroForm = this._fb.group({
    cliente: ["", Validators.required],
    videojuego: ["", Validators.required],
    fechaAlquiler: ["", Validators.required],
    fechaEntrega: ["", Validators.required],
  });

  isCargando: boolean;

  juegos = [];
  personaMasFrecuente:string;
  juegoMasFrecuente:string;

  constructor(
    private _fb: FormBuilder,
    private _juegosService: JuegosService,
    private _clienteService: ClienteService,
    private _alquileresService: AlquileresService,
    private _datePipe: DatePipe
  ) {
    this.isCargando = false;
  }

  ngOnInit() {
    this._juegosService.consultarJuegos().subscribe(
      (res) => {
        console.log(res);
        this.juegos = res;
      },
      (error) => {
        console.log(<any>error);
      }
    );

    this.personaMasFrecuene();
    this.juegoMasFrecuene();

  }

  onSubmit() {
    console.log(this.registroForm.value);
    this.isCargando = true;
    this._alquileresService.createAlquiler(this.registroForm.value).subscribe(
      (res) => {
        console.log(res);
        this.isCargando = false;
        this.registroForm.reset();
        this.nombre = "";
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }

  nombre: string;
  buscarPersona() {
    this._clienteService.consultarCliente(this.documento.value).subscribe(
      (res) => {
        this.nombre = res.nombre;

        let date = this._datePipe.transform(Date.now(), "yyyy-MM-dd");
        this.registroForm.patchValue({
          cliente: res.id,
          fechaAlquiler: date,
        });
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }

  personaMasFrecuene(){
    this._alquileresService.consultarClienteMasRecurrente().subscribe( res => {
      this.personaMasFrecuente = res.nombre;
    },
    (error) => {
      console.log(<any>error);
    })
  }

  juegoMasFrecuene(){
    this._alquileresService.consultarJuegoMasRecurrente().subscribe( res => {
      this.juegoMasFrecuente = res.nombre;
    },
    (error) => {
      console.log(<any>error);
    })
  }

}
