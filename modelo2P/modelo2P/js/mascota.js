///<reference path="animal.ts"/>
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
    var Mascota = /** @class */ (function (_super) {
        __extends(Mascota, _super);
        function Mascota(id, tipo, patas, edad, nombre) {
            var _this = _super.call(this, id, tipo, patas, edad) || this;
            _this.nombre = nombre;
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
        Mascota.prototype.toJSON = function () {
            var json = "{\"id\":\"" + this.id + "\",\"nombre\":\"" + this.nombre + "\", \"edad\":" + this.edad + ", \"tipo\":\"" + this.tipo + "\",\"patas\":" + this.patas + "}";
            return json;
        };
        return Mascota;
    }(Clases.Animal));
    Clases.Mascota = Mascota;
})(Clases || (Clases = {}));
//# sourceMappingURL=mascota.js.map