//##############
/// <reference path="animal.ts"/>
//##############

namespace Clases{
    export class Mascota extends Animal{
        nombre:string;
        comio:boolean;
    
        constructor(tipo:Tipo, patas:number, edad:number, nombre:string, comio:boolean = false){
            super(tipo, patas, edad);
    
            this.nombre = nombre;
            this.comio = comio;
        }
        
        public set Edad(v : number) {
            this.edad = v;
        }
        
        
        public get Edad() : number {
            return this.edad;
        }
        
        AmputarExtremidades(cant:number):boolean{
            return this.AmputarExtremidad(cant);
        }
    }
}