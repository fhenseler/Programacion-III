var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Clases;
(function (Clases) {
    var Tipo;
    (function (Tipo) {
        Tipo[Tipo["Ave"] = 0] = "Ave";
        Tipo[Tipo["Perro"] = 1] = "Perro";
        Tipo[Tipo["Gato"] = 2] = "Gato";
        Tipo[Tipo["Reptil"] = 3] = "Reptil";
        Tipo[Tipo["Pez"] = 4] = "Pez";
    })(Tipo = Clases.Tipo || (Clases.Tipo = {}));
})(Clases || (Clases = {}));
//##############
/// <reference path="enumerado.ts"/>
//##############
var Clases;
(function (Clases) {
    var Animal = /** @class */ (function () {
        // static comio:boolean = false;
        //edad es un parametro opcional
        //edad:number = 4 (si no viene nada entonces el valor por defecto es 4)
        function Animal(tipo, patas, edad) {
            this.tipo = tipo;
            this.patas = patas;
            if (edad)
                this.edad = edad;
        }
        // constructor(public tipo:Tipo, public patas:number, public edad:number){ FUNCIONA IGUAL
        //     this.tipo = tipo;
        //     this.patas = patas;
        //     this.edad = edad;
        // }
        Animal.prototype.Saludar = function () {
            console.log("Tengo " + this.patas + " patas");
        };
        Animal.prototype.AmputarExtremidad = function (cant) {
            var todoOk = false;
            if (cant <= this.patas) {
                this.patas -= cant;
                todoOk = true;
            }
            return todoOk;
        };
        return Animal;
    }());
    Clases.Animal = Animal;
})(Clases || (Clases = {}));
//##############
/// <reference path="animal.ts"/>
//##############
var Clases;
(function (Clases) {
    var Mascota = /** @class */ (function (_super) {
        __extends(Mascota, _super);
        function Mascota(tipo, patas, edad, nombre, comio) {
            if (comio === void 0) { comio = false; }
            var _this = _super.call(this, tipo, patas, edad) || this;
            _this.nombre = nombre;
            _this.comio = comio;
            return _this;
        }
        Object.defineProperty(Mascota.prototype, "Edad", {
            get: function () {
                return this.edad;
            },
            set: function (v) {
                this.edad = v;
            },
            enumerable: true,
            configurable: true
        });
        Mascota.prototype.AmputarExtremidades = function (cant) {
            return this.AmputarExtremidad(cant);
        };
        return Mascota;
    }(Clases.Animal));
    Clases.Mascota = Mascota;
})(Clases || (Clases = {}));
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
//##############
/// <reference path="mascota.ts"/>
//##############
var unaMascota = new Clases.Mascota(Clases.Tipo["4"], 0, 1, "Nemo");
console.log(unaMascota);
unaMascota.Edad = 8;
console.log(unaMascota);
console.log(unaMascota.Edad);
console.log(unaMascota.patas);
unaMascota.AmputarExtremidades(3);
console.log(unaMascota.patas);
