import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';


//Rxjs
import {Observable, from, fromEvent} from "rxjs";
import {map, filter, tap, debounceTime} from "rxjs/operators";
import {NgModel} from "@angular/forms";


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {


  /*
  * Observable
  *   Coleecion de eventos que se pueden emitir en algun momento futuro
  * Observer
  *   Funcion call back que se ejecutara en la subscripcion
  *Subscripcion
  *   Ejecucion y cancelacion de la funcion del observable en un momneto dato
  *Operators
  *   Funciones puras que permiten trabajar con programacion funcional
  *Subject
  *   Distribuir un observable hacia varios observers a la ves
  *Shedulers
  *   Sirven para controlar el orden de las subscripciones
  *
  * */

  public ejemplo1;
  public ejemplo2;
  public ejemplo3;
  public ejemplo4OperadorMap;
  public ejemplo5OperadorFilter;


  @ViewChild('searchInput') public searchInput: NgModel;
  public textInput: string = "";

  constructor() {
  }

  ngOnInit(): void {
    this.ejemploUno();
    this.ejemploDos();
    this.ejemploTres();
    this.operadorMap();
    this.operadorFilter();
    this.operadorTap();
    this.operadorDebounceTime();
  }


  ejemploUno() {
    // .create(observer)  //permite crear un observable y crear el observer haciendolo una funcion a ejecutar
    const hello = Observable.create((observer) => {
      observer.next("Hello");  // .next() permite pushear datos en el observer de la funcion

      setTimeout(() => {
        observer.next("World");
      }, 2000)
    })

    const subscribe = hello.subscribe((resultado) => {
      console.log("Ejemplo Uno", resultado);
      this.ejemplo1 = resultado;
    });

  }

  ejemploDos() {
    const myArray = [1, 2, 3, 4, 5];
    const myString = "Hello Worlds";
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Hello Wordls");
      }, 2000)
    })

    // from(variable)  permite crear un observable desde una variable
    const observable = from(myPromise);

    const subscription = observable.subscribe((resultado) => {
      console.log("Ejemplo Dos", resultado);
      this.ejemplo2 = resultado;
    });

  }

  ejemploTres() {
    // fromEvent(ElementoHtml, 'nombre de enveto a escuchar');   genera un observable para eventos que ocurran en el dom
    const eventObservable = fromEvent(document, 'mousemove');

    eventObservable.subscribe((resultado: any) => {
      //console.log("Movimiento mouse", resultado);

      const texto = "screenX: " + resultado.screenX + " - screenY: " + resultado.screenY;
      this.ejemplo3 = texto;
    });

  }

  operadorMap() {

    //Para usar operadores desde la version angular >= 5.5 se debe invocar la funcion pipe, y dentro si los operadores

    const observable = fromEvent(document, 'click').pipe(
      //map( (valorRecibido) ) => {valores a retornar en la trasnformacion de datos}
      map((valores: any) => {
        return {
          "offsetX": valores.offsetX,
          "offsetY": valores.offsetY
        }
      })
    );

    const subscripcion = observable.subscribe((respuesta) => {
      console.log("operadorMap", respuesta);
      this.ejemplo4OperadorMap = respuesta;
    });
  }


  operadorFilter() {
    // filter(funcion_boolean_validacion)  filter permite realizar una validacion en cada llamado y filtrar unicamente cuando se cumpla

    const observable = fromEvent(document, 'auxclick').pipe(
      map((valores: any) => {
        return {
          "offsetX": valores.offsetX,
          "offsetY": valores.offsetY
        }
      }),
      filter((valoresFilter: any) => {
        return (valoresFilter.offsetX) <= 500;
      })
    );

    const subscription = observable.subscribe((respuesta: any) => {
      console.log("operador Filter", respuesta);
      this.ejemplo5OperadorFilter = respuesta.offsetX;
    });

  }


  operadorTap() {
    // tap(funcion_adiconal)  // permite ejecutar funciones ajenas al flujo de datos, como otras operaciones xxxx

    const observable = Observable.create(
      (datos) => {
        datos.next("Insertando este valor");
      }
    ).pipe(
      tap((valorRecibido: any) => {
        console.log("Mostrando el valor con tap", valorRecibido);
      })
    )

    observable.subscribe();

  }


  operadorDebounceTime() {
    this.searchInput.valueChanges.pipe(
      debounceTime(300),
      tap((textoEscritoInput) => {
        console.log("textoEscritoInput", textoEscritoInput);
      })
    ).subscribe();
  }

}
