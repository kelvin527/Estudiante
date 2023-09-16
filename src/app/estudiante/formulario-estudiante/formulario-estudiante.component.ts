import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { crearEstudisnte, estudiante } from '../interfaces/estudiante.interface';

@Component({
  selector: 'app-formulario-estudiante',
  templateUrl: './formulario-estudiante.component.html',
  styleUrls: ['./formulario-estudiante.component.css']
})
export class FormularioEstudianteComponent implements OnInit {

  @Output()
  enviarFormulario = new EventEmitter<crearEstudisnte>();

  @Input()
  modelo:estudiante

  constructor(private formBuilder:FormBuilder) { }

  form:FormGroup
  ngOnInit() {
    this.form= this.formBuilder.group ({
      nombre:['',Validators.required],
      segundoNombre:'',
      apellido1:['',Validators.required],
      apellido2:'',
      edad:[0,
        {validators: [Validators.required]}],
      direccion:['',Validators.required],
      curso:['',Validators.required]


      })
      if(this.modelo !== undefined){
        this.form.patchValue(this.modelo)

      }
  }

  onSubmit(){
    this.enviarFormulario.emit(this.form.value)
  }


}



