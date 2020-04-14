import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public user: string = "user";
  public password: string = "test";
  public urlOldSesion:string = null;

  constructor() {
  }

  isLogged() {
    let sesion = localStorage.getItem('sesion');
    if (Boolean(sesion)) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('sesion');
  }

  login(user: string, password: string) {
    if (user === this.user && password === this.password) {
      this.getSesionLocal();
      return true;
    } else {
      return false;
    }
  }

  getSesionLocal() {
    localStorage.setItem('sesion', "true");
  }

}
