$(document).ready(function () {

    $("#btnCambiar").click(aplicarCSS);

    // Extraer propiedades CSS
    // Utilizando estilos CSS
    console.log($("h1").css("font-size"));

    console.log($("h1").css("fontSize"));

    $("h1").click(function () {
        $("h1").toggleClass("azul");
    });

});


function aplicarCSS() {

    // Modificar propiedades CSS

    // una sola propiedad
    $("h1").css("fontSize", "38px");

    // varias propiedades
    $("h2").css({
        "fontSize": "30px",
        "color": "red"
    });

    console.log($("h3").hasClass("azul"));

    // Modificar clases CSS
    $("h3").addClass("azul");

    console.log($("h3").hasClass("azul"));

    //$("h3").removeClass("azul");

    //$("h3").toggleClass("azul"); Si tiene la clase, la quita y viceversa

    // Metodos rapidos para cambiar dimensiones
    // .width()
    // .height()
    // .innerWidth()
    // .innerHeight()
    // .outerWidth()
    // .outerHeight()


    // chaining  $(selector).width(valor).height(valor);



}