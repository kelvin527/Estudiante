import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FormularioEstudianteComponent } from './estudiante/formulario-estudiante/formulario-estudiante.component';
import { CrearEstudianteComponent } from './estudiante/crear-estudiante/crear-estudiante.component';
import { EditarEstudianteComponent } from './estudiante/editar-estudiante/editar-estudiante.component';

const routes: Routes = [

  {path:'', component:LandingPageComponent},
  {path:'ladingpage', component:LandingPageComponent},

  {path:'estudiante/formulario',component:FormularioEstudianteComponent},
  {path:'estudiante/crear',component:CrearEstudianteComponent},
  {path:'estudiante/editar',component:EditarEstudianteComponent},

  {path:'**',redirectTo:''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
