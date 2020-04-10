import {Directive, ElementRef, Input, OnChanges} from '@angular/core';

@Directive({
  selector: '[appRecuadroTouch]'   //Forma en la que se llamara la directiva
})
export class RecuadroTouchDirective implements OnChanges {


  /*
  * La directiva funcion como un componente sin template html ni css
  *
  * Al colocar Input('nombreReferencia') igual al selector, este asumira que recibe este paraemtro
  * */
  @Input('appRecuadroTouch') appRecuadroTouch: boolean = false;

  constructor(private elementRef: ElementRef) {
  }

  ngOnChanges() {
    if (this.appRecuadroTouch) {
      this.elementRef.nativeElement.childNodes[0].style.backgroundColor = "black";
      this.elementRef.nativeElement.childNodes[0].style.color = "white";
    } else {
      this.elementRef.nativeElement.childNodes[0].style.backgroundColor = "white";
      this.elementRef.nativeElement.childNodes[0].style.color = "black";
    }
  }


}
