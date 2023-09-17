import { Component, OnInit } from '@angular/core';
import { crearMestro, maestroDto } from '../interfaces/maestro.interface';

@Component({
  selector: 'app-editar-maestro',
  templateUrl: './editar-maestro.component.html',
  styleUrls: ['./editar-maestro.component.css']
})
export class EditarMaestroComponent implements OnInit {

  modelo:maestroDto={
    id:1, nombre:'milca',segundoNombre:'meralis',apellido1:'robles',apellido2:'sanchez',
    edad:26,direccion:'sector puerto rico',materia1:'contabilidad'
  }

  constructor() { }
  ngOnInit() {
  }
  guardar(eve:crearMestro){
    console.log( eve);
  }
}
