import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {map} from "rxjs/operators";
import {Contact} from "../../models/contact.model";
import {ContactService} from "../../services/contact.service";

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  public idContact: any = 0;
  public contact: Contact = null;

  constructor(private activateRoute: ActivatedRoute,
              private router: Router,
              private _contactService: ContactService,
  ) {
  }

  ngOnInit(): void {

    /*
    * ActivatedRoute
    * paramMap  // retorna un observable con los parametros pasados por la url
    *
    * */
    this.activateRoute.paramMap
      .pipe(
        map((parametros: ParamMap) => {
          // .get('nombre parametro') retorna el valor pasado en la posibio del parametro
          return Number(parametros.get('id'));
        })
      )
      .subscribe(
        (id: number) => {
          console.log('id pasado', id);
          this.idContact = id;

          this.loadContact();
        }
      )

  }


  loadContact() {

    let contact = this._contactService.getContactById(this.idContact);

    if (contact != null) {
      this.contact = contact;
    } else {

      /*
      *
      * .navigate(['url', 'parametro1', 'parametro2', {otra_variable: "valor"}], { queryParams : {'parametro1' : 'valor'}})
      *  Permite navegar hacia otra pagina
      * [url principal, parametros normales, {parametros con ;}] , {queryParamas : { parametro_con ? : valor}}
      * */
      this.router.navigate(['/contacts', {dato1: "pruebas1"}],
        {
          queryParams: {
            'error': 'No se encontro el contacto con el ID ' + this.idContact
          }
        });
    }

  }

}
