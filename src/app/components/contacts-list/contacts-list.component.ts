import {Component, OnInit, HostListener} from '@angular/core';

//Models
import {Contact, PhoneType} from "src/app/models/contact.model";
import {ContactService} from "src/app/services/contact.service";


@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  /*
  *
  *
  * Orden de ejecucion life Ciclye
  *
  * 1. constructor()
  * 2. OnChanges() // Identifica los bindigs de imputs del componente
  * 3. ngOnInit()  // Se inicializa la directiva o componente, ya se tiene acceso a los inputs
  * 4. DoCheck()   // identifica posibles cambios que alteren estados o informacion
  * 5. AfterContentInit()
  * 6. AfterContentChecked()
  * 7. AfterViewInit()
  * 8. AfterViewChecked()
  * 9. OnDestroy()  // liberar subscriptions y liberar memoria
  *
  * */
  public contacts: Contact[] = [];
  public selectedContactId: number = null;
  public scrollTopNumber:any = 0;

  constructor(public _contactService: ContactService) {

  }

  ngOnInit(): void {


    this.contacts = this._contactService.getContacts();

    console.log(this.contacts);
  }

  onContactSelected(id: number) {
    //Esta pequeña logica valida que si el id seleccionado aneriormente vuelve a ser precionado pase a null
    //en caso contrario le asignara el id
    this.selectedContactId = this.selectedContactId === id ? null : id;
    console.log("Id pasado por inyeccion el hijo al padre ", id);
  }


  /*El hostlistener, permite decorar funciones, en este caso eventos que se ejecutaran y llamaran la funcion siguiente
  *
  * @HostListener('nombre_evento_js', ['parametros_a_recibir'])
  * */
  @HostListener('window:scroll', ['$event'])
  eventFunctionScroll($event:any){

    //$event.srcElement.children[0].scrollTop  accedemos dentro de la estructura para obtener el valor
    //scrollTop => permite obtener el recorrido de la pagina desde el inicio
    //console.log("Haciendo scroll", $event.srcElement.children[0].scrollTop)

    this.scrollTopNumber = $event.srcElement.children[0].scrollTop;
  }

}
