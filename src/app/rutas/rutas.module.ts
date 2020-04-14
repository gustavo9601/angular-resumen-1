import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Router, Routes} from "@angular/router";

import {RutaPadreComponent} from "./ruta-padre/ruta-padre.component";
import {RutaHijaComponent} from "./ruta-hija/ruta-hija.component";
import {RutaVaciaComponent} from "./ruta-vacia/ruta-vacia.component";
import {LoginGuard} from "../guards/login.guard";


const rutasFamilia: Routes = [
  {
    path: '',  //rutasPadre    // Se define en vacio ya que rutasPadre ya existe en el router principal desde don de se llama
    // si se dejara aca rutasPadre se duplicaria el path
    component: RutaPadreComponent,
    data: {'title': 'Ruta Padre'},
    children: [  //con children permite cerar rutas hijas de forma que el path queda padre/hija
      {'path': 'rutaHija', component: RutaHijaComponent},
      {'path': 'rutaVacia', component: RutaVaciaComponent},
    ],
    canActivate: [LoginGuard]
  },
];

/*
* Modularizando la aplicacion
* */
@NgModule({
  declarations: [
    RutaPadreComponent,
    RutaHijaComponent,
    RutaVaciaComponent,
  ],
  imports: [
    //Modulos
    CommonModule,
    RouterModule.forChild(rutasFamilia)  //forChild(rutas:Routes)  ya que no es el directorio principal
  ]
})
export class RutasModule {
}
