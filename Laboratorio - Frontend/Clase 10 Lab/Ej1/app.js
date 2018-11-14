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
var Clases;
(function (Clases) {
    var Animal = /** @class */ (function () {
        //static comio: boolean = false;
        function Animal(tipo, patas, edad) {
            this.tipo = tipo;
            this.patas = patas;
            this.edad = edad;
        }
        Animal.prototype.Saludar = function () {
            console.log("Tengo " + this.patas + " patas");
        };
        Animal.prototype.AmputarExtremidades = function (cant) {
            var todoOk = false;
            if (cant >= this.patas) {
                this.patas -= cant;
                todoOk = true;
            }
            return todoOk;
        };
        return Animal;
    }());
    Clases.Animal = Animal;
})(Clases || (Clases = {}));
var Clases;
(function (Clases) {
    //extends = clase | implements = interface (Java)
    var Mascota = /** @class */ (function (_super) {
        __extends(Mascota, _super);
        function Mascota(tipo, patas, edad, nombre, comio) {
            if (comio === void 0) { comio = false; }
            var _this = _super.call(this, tipo, patas, edad) || this;
            _this.nombre = nombre;
            _this.comio = comio;
            return _this;
        }
        Object.defineProperty(Mascota.prototype, "edad", {
            set: function (v) {
                this.edad = v;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Mascota.prototype, "Edad", {
            get: function () {
                return this.edad;
            },
            enumerable: true,
            configurable: true
        });
        Mascota.prototype.AmputarExtremidades = function (cant) {
            return this.AmputarExtremidades(1);
        };
        return Mascota;
    }(Clases.Animal));
    Clases.Mascota = Mascota;
})(Clases || (Clases = {}));
//let unAnimal: Animal = new Animal(Tipo.Perro, 4, 3);
// let unaMascota: Mascota = new Mascota(Tipo["3"], 0, 1, 'Nemo');
// //console.log(Tipo["0"]); Para mostrar elementos del enumerado
// //console.log(unAnimal.tipo); Otra forma
// //unAnimal.Saludar();
// console.log(Animal.comio);
// console.log(unaMascota.edad);
// console.log(unaMascota.patas);
// unaMascota.AmputarExtremidades(3);
//Clases.Tipo; (export) 
