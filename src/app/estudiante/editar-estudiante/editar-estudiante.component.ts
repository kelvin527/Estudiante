import { Component, OnInit } from '@angular/core';
import { crearEstudisnte, estudiante } from '../interfaces/estudiante.interface';

@Component({
  selector: 'app-editar-estudiante',
  templateUrl: './editar-estudiante.component.html',
  styleUrls: ['./editar-estudiante.component.css']
})
export class EditarEstudianteComponent implements OnInit {

  constructor() { }
modelo:estudiante={
  nombre:'kelvin',
  apellido1:'angustia',
  apellido2:'felix',
  edad:33,
  direccion:'san cristobal',
  curso:'uni'
}
  ngOnInit() {
  }

  actualizar(ev:crearEstudisnte){
    console.log(ev);
  }
}
