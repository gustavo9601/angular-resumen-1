import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() nameHijo:string = "";  // Recibe

  @Output() namePadre:EventEmitter<string> = new EventEmitter<string>();  //EventEmitter Clase que permite emitir eventos  <tipoQueEmitira>

  constructor() { }

  ngOnInit(): void {
  }


  emitiendoNamePadreClick(){
    this.namePadre.emit('Adolfo Marquez');
  }

}
