var x = $(document);

x.ready(inicializarEventos);

function inicializarEventos() {
    $("#btnEnviar").click(enviarAjax);
}

function enviarAjax(e) {

    e.preventDefault();
/*
    var legajo = $("#txtLegajo").val();
    var nombre = $("#txtNombre").val();
    var parametros = {
        "legajo": legajo,
        "nombre": nombre
    };*/

    var parametros = $("#frmPersona").serialize();

    $.ajax({
        type: 'POST',  // default GET
        async: true, // predeterminada true
        url: "pagina1.php",
        data: parametros,  // es la informacion que se le envia al servidor puede ser un objeto o una cadena de datos 
        beforeSend: function () {
            $("#info").html('<img src="./images/spin.gif" alt="preloader">');
        },
        dataType: 'json', 
        success: function (respuesta) {
           
            $("#info").html(respuesta.legajo);
           
        },
        error: function (xhr, status) {
            alert("Error " + xhr.status + " " + xhr.statusText);
        },
        complete: function (xhr, status) { // recibe el objeto de la peticion y el codigo de status
            alert("Peticion realizada");
        }
    });

}