import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FormularioEstudianteComponent } from './estudiante/formulario-estudiante/formulario-estudiante.component';
import { CrearEstudianteComponent } from './estudiante/crear-estudiante/crear-estudiante.component';
import { EditarEstudianteComponent } from './estudiante/editar-estudiante/editar-estudiante.component';
import { CrearMaestroComponent } from './maestro/crear-maestro/crear-maestro.component';
import { EditarMaestroComponent } from './maestro/editar-maestro/editar-maestro.component';
import { FormularioMaestroComponent } from './maestro/formulario-maestro/formulario-maestro.component';

const routes: Routes = [

  {path:'', component:LandingPageComponent},
  {path:'ladingpage', component:LandingPageComponent},

  {path:'estudiante/formulario',component:FormularioEstudianteComponent},
  {path:'estudiante/crear',component:CrearEstudianteComponent},
  {path:'estudiante/editar/:id',component:EditarEstudianteComponent},

  {path:'maestro/crear',component:CrearMaestroComponent},
  {path:'maestro/editar/:id',component:EditarMaestroComponent},
  {path:'maestro/formulario',component:FormularioMaestroComponent},

  {path:'**',redirectTo:''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
