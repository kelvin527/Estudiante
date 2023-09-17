import { Component, OnInit } from '@angular/core';
import { crearMestro } from '../interfaces/maestro.interface';

@Component({
  selector: 'app-crear-maestro',
  templateUrl: './crear-maestro.component.html',
  styleUrls: ['./crear-maestro.component.css']
})
export class CrearMaestroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Guardar(eve:crearMestro){
    console.log(eve)
  }
}
