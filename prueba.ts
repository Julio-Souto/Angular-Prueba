
/*
*String
*Boolean
*Number
*Array
*Tupla
*Enum
*Any
*Void
*/

let nombre_variable:string = 'Nombre';

let edad:number = 25;

let lista:number[] = [1,2,3];
let lista2:Array<number> = [1,2,3];

let tupla:[string,number] = ['Nombre',25];

enum Animales {Perro, Gato, Pajaro};
let animal:Animales = Animales.Gato;

let cualquiera:any = true;
let nada:void = undefined;

class MiClase{
  private atributo:string;

  constructor(atributo:string){
    this.atributo = atributo;
  }

  get getAtributo():string{
    return this.atributo;
  }

  set setAtributo(atributo:string){
    this.atributo=atributo;
  }

  printMsg():string{
    return "La propiedad es "+this.atributo;
  }
}

/*Interfaces*/

interface LogInterface {
  msg:string;
  date?:number;
}

function Logger(log:LogInterface){
  console.log(log.msg);
}

/*Modulos*/

import {Validator} from './path';

export class Validator{
  validate(n:number):boolean{
    return n > 5;
  }
}

namespace Validacion{
  export interface validadorNumero{
    isValid(n:number):boolean;
  }
  export class validacionLogitud implements validadorNumero{
    isValid(n: number): boolean {
      return n > 5;
    }
  }
}

let validador:Validacion.validadorNumero = new Validacion.validacionLogitud();

/*Generico */

function compare<T>(args1:T,args2:T):T{
  if(args1 > args2)
    return args1;
  else
    return args2;
}

/*Decorador o Anotacion */

function Logged(){
  return function(target){
    console.log("a");
  }
}

class Prueba{
  @Logged
  metodo():boolean{
    return true;
  }
}
