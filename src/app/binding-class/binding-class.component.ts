import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-binding-class',
  templateUrl: './binding-class.component.html',
  styleUrls: ['./binding-class.component.css']
})
export class BindingClassComponent implements OnInit {

  toggle: boolean = false;
  color: string = 'black';
  sizeText: number = 70;
  nameTest:string = "";
  constructor() {
  }

  ngOnInit(): void {
  }

}
