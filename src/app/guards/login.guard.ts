import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {LoginService} from "../services/login.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {


  constructor(private _loginService: LoginService,
              private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this._loginService.isLogged()) {
      console.log("Pasa por el guarda");
      return true;
    } else {
      this._loginService.urlOldSesion = state.url;   //state.url Almaceno la ruta antigua visitada
      console.log("No paso el guarda y url antigua es", this._loginService.urlOldSesion);
      this.router.navigate(['/login']);
      return false;
    }


  }

}
