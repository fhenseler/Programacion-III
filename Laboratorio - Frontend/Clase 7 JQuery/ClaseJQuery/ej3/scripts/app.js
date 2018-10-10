$(document).ready(function () {
    // Obtener informacion de un elemento
    // $(selector).html();
    // $(selector).text();
    // $(selector).val();
    // parentesis vacios   


    console.log($("#textos").html()); // obtengo codigo html


    console.log($("#p1").text()); // obtengo texto 

    console.log($("#txtNombre").val()); // obtengo el value


    $("#textos").html($("#textos").html() + "<br><button onClick='insertar()'>Modiifcar</button>");

    $("#btnCambiar").click(infoAtributos);

});

function insertar() {
    // Modificar / añadir informacion a un elemento
    // $(selector).html(valor);
    // $(selector).text(valor);
    // $(selector).val(valor);

    $("#div2").html("Valor insertado en el div 2");

    $("h1").text("Otro Titulo");

    $("#txtNombre").val("Juan");

    $("a").text("Ir a Clarin");

}

function infoAtributos() {
    // Extraer información de un atributo
    console.log($("a").attr("href"));

    // Modificar / añadir atributos
    // un atributo
    $("a").attr("href", "http://www.clarin.com");

    $("#a2").attr({
        "title": "Ir a La Nacion",
        "href": "http://www.lanacion.com.ar"
    })
        .text("La Nacion");
}