var Validations;
(function (Validations) {
    function validarTexto(texto) {
        if (Text.length > 3) {
            return true;
        }
        return false;
    }
    Validations.validarTexto = validarTexto;
})(Validations || (Validations = {}));
