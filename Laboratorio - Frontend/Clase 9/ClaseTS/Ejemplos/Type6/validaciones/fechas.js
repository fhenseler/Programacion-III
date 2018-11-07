var Validations;
(function (Validations) {
    function validarFecha(fecha) {
        if (isNaN(fecha.valueOf())) {
            return false;
        }
        return true;
    }
    Validations.validarFecha = validarFecha;
})(Validations || (Validations = {}));
