//##############
/// <reference path="enumerados.ts"/>
//##############

namespace Clases{

export abstract class Personaje{

        public nombre:string;
        public edad:number;
        public id:number;

        constructor(id:number, nombre:string, edad:number){
            this.id = id;
            this.nombre = nombre;
            this.edad = edad;
        }
    
        // constructor(public tipo:Tipo, public nombre:number, public edad:number){ FUNCIONA IGUAL
        //     this.tipo = tipo;
        //     this.nombre = nombre;
        //     this.edad = edad;
        // }
    
        // protected AmputarExtremidad(cant:number):boolean{
        //     let todoOk:boolean = false;
    
        //     if(cant <= this.nombre){
        //         this.nombre -= cant;
        //         todoOk=true;
        //     }
    
        //     return todoOk;
        // }

        public toJSON():string{
            let json: string = `{"nombre":"${this.nombre}", "edad":${this.edad}}`;
            return json;
        }
    }
}