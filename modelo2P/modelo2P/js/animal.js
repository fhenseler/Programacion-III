//##############
/// <reference path="enumerados.ts"/>
//##############
var Clases;
(function (Clases) {
    var Animal = /** @class */ (function () {
        // static comio:boolean = false;
        //edad es un parametro opcional
        //edad:number = 4 (si no viene nada entonces el valor por defecto es 4)
        function Animal(id, tipo, patas, edad) {
            this.id = id;
            this.tipo = tipo;
            this.patas = patas;
            if (edad) // si hay algo en edad entonces lo asigno
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
        Animal.prototype.toJSON = function () {
            var json = "{\"tipo\":\"" + this.tipo + "\", \"edad\":" + this.edad + ",\"patas\":" + this.patas + "}";
            return json;
        };
        return Animal;
    }());
    Clases.Animal = Animal;
})(Clases || (Clases = {}));
//# sourceMappingURL=animal.js.map