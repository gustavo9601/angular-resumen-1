import {Injectable} from '@angular/core';

import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter, mapTo, switchMap, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  public title: string = null;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.init();
  }

  init() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      mapTo(this.activatedRoute),   //Transforma a string
      switchMap(route => route.firstChild.data),  //firstChild permite acceder a las rutas por encima del ornde router-outlet
      tap(data => console.log("data", data))
    ).subscribe((data: any) => {
      this.title = data.title;
    });

  }
}
