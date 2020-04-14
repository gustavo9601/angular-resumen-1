import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule, PreloadAllModules} from "@angular/router";


//Componentes
import {LoginComponent} from "./components/login/login.component";
import {LogoutComponent} from "./components/logout/logout.component";
import {ContactsListComponent} from "./components/contacts-list/contacts-list.component";
import {ContactDetailComponent} from "./components/contact-detail/contact-detail.component";
import {RepasoComponent} from "./components/repaso/repaso.component";
import {RxjsComponent} from "./rxjs/rxjs.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";

//Guards
import {LoginGuard} from "./guards/login.guard";


const appRoutes: Routes = [


  /*
  * Usamos carga perezoza o lazy loading
  *
  * Versiones < 7
  * loadChildren: "ruta/archivo#nombreModulo"
  *
  * Versiones >= 8
  * recibe un promesa, que se le pasa un import, y retorna la clase exportada
  * loadChildren: () => import(rutaModulo).then( result => result.Clase_Exportada )
  * */
  {
    path: 'rutaPadre',
    loadChildren: () => import('./rutas/rutas.module').then( resultado => resultado.RutasModule )
  },

  //data : {}  recibe un objeto con informacion que enviara a la ruta
  {path: 'login', component: LoginComponent, data: {'title': 'Login'}},
  {path: 'logout', component: LogoutComponent, data: {'title': 'Logout'}},
  {
    path: 'contacts',
    component: ContactsListComponent,
    data: {'title': 'Contactos'},
    canActivate: [LoginGuard]  //[Recibe un array de diferentes guards de validacions]
  },
  {
    path: 'contact-detail/:id',
    component: ContactDetailComponent,
    data: {'title': 'Detalle de contacto'},
    canActivate: [LoginGuard]
  },
  {path: 'repaso', component: RepasoComponent, data: {'title': 'Repaso'}, canActivate: [LoginGuard]},
  {path: 'rxjs', component: RxjsComponent, data: {'title': 'Rxjs'}, canActivate: [LoginGuard]},
  {path: '', redirectTo: 'contacts', pathMatch: 'full', canActivate: [LoginGuard]},
  {path: '**', component: NotFoundComponent, data: {'title': 'Upss ruta no encontrada'}},

];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})

    /*
    Esta configuraccion en el forRoot()  permite que se carguen los modulos de forma asincrona una ves el bundle inicial esta cargado
    * {preloadingStrategy: PreloadAllModules}
    * */
  ],
  //Se exporta para que otros modulos o componentes visualicen estos componentes
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
