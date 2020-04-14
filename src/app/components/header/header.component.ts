import {Component, OnInit} from '@angular/core';

import {TitleService} from "../../services/title.service";
import {LoginService} from "../../services/login.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(public _titleService: TitleService,
              public _loginService:LoginService) {
  }

  ngOnInit(): void {
  }

}
