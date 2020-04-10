/*
* Clases
*
* Permiten instanciamiento, definicion de funcion y contenido
* */
export class Contact {

  constructor(public id: number,
              public name: string,
              public picture?: string,
              public phones?: ContactPhoneI[],
              public email?: string,
              public direction?: string) {

  }
}


//enum => sirve para listar un dato de tipo
export enum PhoneType {
  mobile = 'mobile',
  home = 'home',
  work = 'work'
}

/*
* Interface, solo permite definir propiedades y el nombre de las funciones pero no el contenido
* */
export interface ContactPhoneI {
  type: PhoneType;
  number: number;
}
