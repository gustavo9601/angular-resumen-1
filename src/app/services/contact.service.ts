import {Injectable} from '@angular/core';

import {Contact, PhoneType} from "src/app/models/contact.model";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() {
  }


  getContacts() {
    return [
      new Contact(1, "Gustavo", "assets/default-user-img.jpg"),
      new Contact(2, "Laura", "assets/default-user-img.jpg", [{type: PhoneType.mobile, number: 123456}]),
      new Contact(3, "Meliza", "assets/default-user-img.jpg", [
        {
          type: PhoneType.mobile,
          number: 123456
        }, {
          type: PhoneType.work,
          number: 456789
        }])
    ]

  }
}
