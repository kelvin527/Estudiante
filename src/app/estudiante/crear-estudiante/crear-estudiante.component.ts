import { Component, OnInit } from '@angular/core';
import { crearEstudisnte } from '../interfaces/estudiante.interface';

@Component({
  selector: 'app-crear-estudiante',
  templateUrl: './crear-estudiante.component.html',
  styleUrls: ['./crear-estudiante.component.css']
})
export class CrearEstudianteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  guardar(event:crearEstudisnte){
    console.log(event)
  }
}
