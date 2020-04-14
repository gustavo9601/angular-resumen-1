import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PadreComponent} from './input-output/padre/padre.component';
import {HijoComponent} from './input-output/hijo/hijo.component';
import {BindingClassComponent} from './binding-class/binding-class.component';
import {FormsModule} from "@angular/forms";
import {ContactsListComponent} from './components/contacts-list/contacts-list.component';
import {ContactComponent} from './components/contact/contact.component';
import {ContactDetailComponent} from './components/contact-detail/contact-detail.component';
import {RecuadroTouchDirective} from './directives/recuadro-touch.directive';
import {ComponenteNgContentComponent} from './components/componente-ng-content/componente-ng-content.component';
import {RxjsComponent} from './rxjs/rxjs.component';
import {HeaderComponent} from './components/header/header.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {RepasoComponent} from './components/repaso/repaso.component';
import {LoginComponent} from "./components/login/login.component";
import {LogoutComponent} from './components/logout/logout.component';


//Modulo de varios componentes
import {RutasModule} from "./rutas/rutas.module";

//Modulo de rutas
import {AppRoutingModule} from './app-routing.module';



@NgModule({
  declarations: [
    //Compoenentes del modulo
    AppComponent,
    PadreComponent,
    HijoComponent,
    BindingClassComponent,
    ContactsListComponent,
    ContactComponent,
    ContactDetailComponent,
    RecuadroTouchDirective,
    ComponenteNgContentComponent,
    RxjsComponent,
    HeaderComponent,
    NotFoundComponent,
    RepasoComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    //Modulos
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    //Inyeccion de dependencias
  ],
  //Funcionaidades que se iniciaklizan al ejecutar la aplicacion
  bootstrap: [AppComponent]
})
export class AppModule {
}
