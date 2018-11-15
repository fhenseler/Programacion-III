// namespace Clases{
    //la palabra reservada export hace que se pueda ver el contenido fuera del namespace
    // export enum Tipo{
    //     Ave,
    //     Perro,
    //     Gato,
    //     Reptil,
    //     Pez
    // }
    
    // export abstract class Animal{
    //     public tipo:Tipo;
    //     public patas:number;
    //     protected edad:number;
    
    //     // static comio:boolean = false;
    //                                         //edad es un parametro opcional
    //                                         //edad:number = 4 (si no viene nada entonces el valor por defecto es 4)
    //     constructor(tipo:Tipo, patas:number, edad:number){
    //         this.tipo = tipo;
    //         this.patas = patas;
    //         if(edad)// si hay algo en edad entonces lo asigno
    //             this.edad = edad;
    //     }
    
    //     // constructor(public tipo:Tipo, public patas:number, public edad:number){ FUNCIONA IGUAL
    //     //     this.tipo = tipo;
    //     //     this.patas = patas;
    //     //     this.edad = edad;
    //     // }
    
    //     Saludar():void{
    //         console.log(`Tengo ${this.patas} patas`);
    //     }
    
    //     protected AmputarExtremidad(cant:number):boolean{
    //         let todoOk:boolean = false;
    
    //         if(cant <= this.patas){
    //             this.patas -= cant;
    //             todoOk=true;
    //         }
    
    //         return todoOk;
    //     }
    // }
    
    // export class Mascota extends Animal{
    //     nombre:string;
    //     comio:boolean;
    
    //     constructor(tipo:Tipo, patas:number, edad:number, nombre:string, comio:boolean = false){
    //         super(tipo, patas, edad);
    
    //         this.nombre = nombre;
    //         this.comio = comio;
    //     }
        
    //     public set Edad(v : number) {
    //         this.edad = v;
    //     }
        
        
    //     public get Edad() : number {
    //         return this.edad;
    //     }
        
    //     AmputarExtremidades(cant:number):boolean{
    //         return this.AmputarExtremidad(cant);
    //     }
    // }
// }

//-------------------

// let unAnimal:Animal = new Animal(Tipo.Perro, 4, 3);

// console.log(Animal.comio);

// console.log(unAnimal);

// unAnimal.Saludar();
//-----------------------------

//al usar eso referenciamos a otro archivo para unificarlo, nada mas que no creara los .map para debugging
//##############
/// <reference path="mascota.ts"/>
//##############

let unaMascota:Clases.Mascota = new Clases.Mascota(Clases.Tipo["4"], 0, 1, "Nemo");

console.log(unaMascota);

unaMascota.Edad = 8;

console.log(unaMascota);

console.log(unaMascota.Edad);

console.log(unaMascota.patas);

unaMascota.AmputarExtremidades(3);

console.log(unaMascota.patas);