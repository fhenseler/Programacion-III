///<reference path="personaje.ts"/>


namespace Clases{

    export class Heroe extends Personaje{
        poder:string;
        tipo:tipoHeroe;
    
        constructor(id:number, nombre:string, edad:number, poder:string, tipo:tipoHeroe){
            super(id, nombre, edad);
    
            this.tipo = tipo;
            this.poder = poder;
        }
        
        // public set Edad(v : number) {
        //     this.edad = v;
        // }
        
        // public get Edad() : number {
        //     return this.edad;
        // }

        public toJSON():string{
            let json: string = `{"id":"${this.id}","nombre":"${this.nombre}", "edad":${this.edad}, "poder":"${this.poder}", "tipo":"${this.tipo}"}`;
            return json;
        }
    }
}

