import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from "src/app/models/contact.model";

//import {ContactsListComponent} from "src/app/components/contacts-list/contacts-list.component";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() contact: Contact;
  @Input() expanded: boolean = false;
  @Output() clickedId: EventEmitter<number> = new EventEmitter();  //Emitira por evento el id clicked
  /*
  * usando el parent, permite hacer inyeccion de dependencias de ese componente en el actual
  * de forma que se pueden usar las propiedades y funciones de dicho componente en el actual
  *
  * */

  /*constructor(public parent:ContactsListComponent) { }*/
  constructor() {
  }

  ngOnInit(): void {
  }

  onClickId() {
    this.clickedId.emit(this.contact.id);
  }


}
