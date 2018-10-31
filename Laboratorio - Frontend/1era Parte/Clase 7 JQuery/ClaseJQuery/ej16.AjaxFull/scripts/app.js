var x = $(document);

x.ready(inicializarEventos);

function inicializarEventos() {

    $("#btnEnviarAjax").click(enviarAjax);

    $("#btnEnviarGet").click(enviarGet);

    $("#btnEnviarGetMensajes").click(enviarGetMensajes);

    $("#btnEnviarPost").click(enviarPost);

    $("#btnGetJSON").click(getJSON);

    $("#btnLoad").click(usarLoad);
}

function enviarAjax(e) {

    e.preventDefault();

    var legajo = $("#txtLegajo").val();
    var nombre = $("#txtNombre").val();
    var parametros = {
        "legajo": legajo,
        "nombre": nombre
    };

    $.ajax({
        url: "pagina1.php",
        data: parametros,
        beforeSend: function () {
            $("#info").html('<img src="./images/spin.gif" alt="preloader">');
        },
        success: function (respuesta) {

            $("#info").html(respuesta);
        },
        error: function (xhr, status) {
            alert("Error " + xhr.status + " " + xhr.statusText);
        },
        complete: function (xhr, status) {
            alert("Peticion realizada");
        }
    });

}

function enviarGet(e) {

    e.preventDefault();

    var legajo = $("#txtLegajo").val();
    var nombre = $("#txtNombre").val();
    var parametros = {
        "legajo": legajo,
        "nombre": nombre
    };

    $.get("pagina1.php", parametros, function (resp) {
        $("#info").text(resp);
    });

}


function enviarGetMensajes(e) {

    e.preventDefault();

    var legajo = $("#txtLegajo").val();
    var nombre = $("#txtNombre").val();
    var parametros = {
        "legajo": legajo,
        "nombre": nombre
    };

    $.get("pagina1.php", parametros, function (resp) {
        alert("Correcto");
    }).done(function () {
        alert("done");
    }).fail(function () {
        alert("fail");
    }).always(function () {
        alert("always");
    });

}

function enviarPost(e) {

    e.preventDefault();

    var legajo = $("#txtLegajo").val();
    var nombre = $("#txtNombre").val();
    var parametros = {
        "legajo": legajo,
        "nombre": nombre
    };

    $.post("saludo.php", parametros, function (resp) {
         alert(resp);
    });

    $.post("holamundo.php", function (resp) {
        alert(resp);
   });

}

function getJSON(e) {

    e.preventDefault();
   

    $.getJSON("json.php", function (resp) {
        
        $.each(resp, function(clave, valor){
            alert(clave + " : " + valor);
        });

    }); 
}

function usarLoad(e) {

    e.preventDefault();
   
    $("#info").load("holamundo.php");

   
}



