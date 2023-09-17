import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { crearMestro, maestroDto } from '../interfaces/maestro.interface';

@Component({
  selector: 'app-formulario-maestro',
  templateUrl: './formulario-maestro.component.html',
  styleUrls: ['./formulario-maestro.component.css']
})
export class FormularioMaestroComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  @Output()
  public enviarMestro = new EventEmitter<crearMestro>();
  @Input()
  modelo:maestroDto

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
    if(this.modelo !==undefined){
      this.form.patchValue(this.modelo)
    }
  }
  onSubmit(){
    this.enviarMestro.emit(this.form.value)
  }

}
