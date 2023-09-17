export interface crearMestro{
  nombre:string,
      segundoNombre:string,
      apellido1:string,
      apellido2?:string,
      edad:number,
      direccion:string,
      materia1:string,
      materia2?:string,
      materia3?:string,
}

export interface maestroDto{
      id:number,
      nombre:string,
      segundoNombre:string,
      apellido1:string,
      apellido2?:string,
      edad:number,
      direccion:string,
      materia1:string,
      materia2?:string,
      materia3?:string,
}
