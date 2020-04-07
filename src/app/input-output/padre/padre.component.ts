import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {


  public namePadre:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  recibeNombrePadre(event){
    this.namePadre = event;
    console.log(event);
  }

}