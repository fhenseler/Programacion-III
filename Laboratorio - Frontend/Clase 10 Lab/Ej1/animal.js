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
