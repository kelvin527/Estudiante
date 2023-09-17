import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GmaterialModule } from './material/gmaterial/gmaterial.module';
import { CrearEstudianteComponent } from './estudiante/crear-estudiante/crear-estudiante.component';
import { EditarEstudianteComponent } from './estudiante/editar-estudiante/editar-estudiante.component';
import { FormularioEstudianteComponent } from './estudiante/formulario-estudiante/formulario-estudiante.component';
import { MenuComponent } from './menu/menu.component';
import { FormularioMaestroComponent } from './maestro/formulario-maestro/formulario-maestro.component';
import { CrearMaestroComponent } from './maestro/crear-maestro/crear-maestro.component';
import { EditarMaestroComponent } from './maestro/editar-maestro/editar-maestro.component';

@NgModule({
  declarations: [
    AppComponent,
      LandingPageComponent,
      CrearEstudianteComponent,
      EditarEstudianteComponent,
      LandingPageComponent,
      FormularioEstudianteComponent,
      MenuComponent,
      FormularioMaestroComponent,
      CrearMaestroComponent,
      EditarMaestroComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GmaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
