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
    }(Animal));
    Clases.Mascota = Mascota;
})(Clases || (Clases = {}));
