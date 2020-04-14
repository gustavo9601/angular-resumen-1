import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: string = "";
  public password: string = "";


  constructor(private _loginService: LoginService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  iniciarSesion() {
    let sesion = this._loginService.login(this.user, this.password);
    if (sesion) {

      let oldUrl = (this._loginService.urlOldSesion) ? this._loginService.urlOldSesion : '/contacts';
      this.router.navigate([oldUrl]);
    } else {
      alert("Graves contraseña invalida");
    }
  }

}
