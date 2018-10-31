var x = $(document);

x.ready(function () {
    $("#btnEnviar").click(enviarPeticion);
});

function enviarPeticion(e) {

    e.preventDefault();

    var legajo = $("#txtLegajo").val();
    var nombre = $("#txtNombre").val();

    $(document).ajaxStart(mostrarPreloader);

    $.get("pagina1.php", { legajo: legajo, nombre: nombre }, manejarRespuesta);

}

function mostrarPreloader() {
    $("#info").html('<img src="./images/spin.gif" alt="preloader">');
}

function manejarRespuesta(datos) {

    $("#info").html(datos);

}