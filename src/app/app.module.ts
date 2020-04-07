import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PadreComponent } from './input-output/padre/padre.component';
import { HijoComponent } from './input-output/hijo/hijo.component';
import { BindingClassComponent } from './binding-class/binding-class.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    //Compoenentes del modulo
    AppComponent,
    PadreComponent,
    HijoComponent,
    BindingClassComponent
  ],
  imports: [
    //Modulos
    BrowserModule,
    FormsModule
  ],
  providers: [
    //Inyeccion de dependencias
  ],
  //Funcionaidades que se iniciaklizan al ejecutar la aplicacion
  bootstrap: [AppComponent]
})
export class AppModule { }
