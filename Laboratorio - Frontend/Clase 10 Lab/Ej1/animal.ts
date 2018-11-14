///<reference path = 'enumerados.ts'>

namespace Clases
{
    export abstract class Animal
    {
        public tipo: Tipo;
        public patas: number;
        public edad: number;
    
        //static comio: boolean = false;
    
        constructor(tipo:Tipo, patas:number, edad:number)
        {
            this.tipo = tipo;
            this.patas = patas;
            this.edad = edad;
        }
    
        Saludar(): void
        {
            console.log(`Tengo ${this.patas} patas`);
        }
    
        AmputarExtremidades(cant: number) :boolean
        {
            let todoOk: boolean = false;
            if(cant >= this.patas)
            {
                this.patas -= cant;
                todoOk = true;
            }
            return todoOk;
        }
    }
}

