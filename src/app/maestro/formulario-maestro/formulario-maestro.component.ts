import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { crearMestro } from '../interfaces/maestro.interface';

@Component({
  selector: 'app-formulario-maestro',
  templateUrl: './formulario-maestro.component.html',
  styleUrls: ['./formulario-maestro.component.css']
})
export class FormularioMaestroComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  @Output()
  public enviarMestro = new EventEmitter<crearMestro>();


  form:FormGroup
  ngOnInit() {
    this.form= this.formBuilder.group ({
      nombre:['',Validators.required],
      segundoNombre:'',
      apellido1:['',Validators.required],
      apellido2:'',
      edad:[0,Validators.required],
      direccion:['',Validators.required],
      materia1:['',Validators.required],
      materia2:'',
      materia3:'',
    })
  }
  onSubmit(){
    this.enviarMestro.emit(this.form.value)
  }

}
