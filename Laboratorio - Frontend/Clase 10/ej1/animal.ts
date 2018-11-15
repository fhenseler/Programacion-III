//##############
/// <reference path="enumerado.ts"/>
//##############

namespace Clases{
    export abstract class Animal{
        public tipo:Tipo;
        public patas:number;
        protected edad:number;
    
        // static comio:boolean = false;
                                            //edad es un parametro opcional
                                            //edad:number = 4 (si no viene nada entonces el valor por defecto es 4)
        constructor(tipo:Tipo, patas:number, edad:number){
            this.tipo = tipo;
            this.patas = patas;
            if(edad)// si hay algo en edad entonces lo asigno
                this.edad = edad;
        }
    
        // constructor(public tipo:Tipo, public patas:number, public edad:number){ FUNCIONA IGUAL
        //     this.tipo = tipo;
        //     this.patas = patas;
        //     this.edad = edad;
        // }
    
        Saludar():void{
            console.log(`Tengo ${this.patas} patas`);
        }
    
        protected AmputarExtremidad(cant:number):boolean{
            let todoOk:boolean = false;
    
            if(cant <= this.patas){
                this.patas -= cant;
                todoOk=true;
            }
    
            return todoOk;
        }
    }
}