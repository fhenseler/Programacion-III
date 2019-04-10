///<reference path="personaje.ts"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Clases;
(function (Clases) {
    var Heroe = /** @class */ (function (_super) {
        __extends(Heroe, _super);
        function Heroe(id, nombre, edad, poder, tipo) {
            var _this = _super.call(this, id, nombre, edad) || this;
            _this.tipo = tipo;
            _this.poder = poder;
            return _this;
        }
        // public set Edad(v : number) {
        //     this.edad = v;
        // }
        // public get Edad() : number {
        //     return this.edad;
        // }
        Heroe.prototype.toJSON = function () {
            var json = "{\"id\":\"" + this.id + "\",\"nombre\":\"" + this.nombre + "\", \"edad\":" + this.edad + ", \"poder\":\"" + this.poder + "\", \"tipo\":\"" + this.tipo + "\"}";
            return json;
        };
        return Heroe;
    }(Clases.Personaje));
    Clases.Heroe = Heroe;
})(Clases || (Clases = {}));
