///<reference path="animal.ts"/>


namespace Clases{

    export class Mascota extends Animal{
        nombre:string;
        comio:boolean;
    
        constructor(id:number, tipo:Tipo, patas:number, edad:number, nombre:string){
            super(id, tipo, patas, edad);
    
            this.nombre = nombre;
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

        public toJSON():string{
            let json: string = `{"id":"${this.id}","nombre":"${this.nombre}", "edad":${this.edad}, "tipo":"${this.tipo}","patas":${this.patas}}`;
            return json;
        }
    }
}

