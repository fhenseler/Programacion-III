//##############
/// <reference path="enumerados.ts"/>
//##############
var Clases;
(function (Clases) {
    var Personaje = /** @class */ (function () {
        function Personaje(id, nombre, edad) {
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
        Personaje.prototype.toJSON = function () {
            var json = "{\"nombre\":\"" + this.nombre + "\", \"edad\":" + this.edad + "}";
            return json;
        };
        return Personaje;
    }());
    Clases.Personaje = Personaje;
})(Clases || (Clases = {}));
