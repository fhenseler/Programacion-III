$(document).ready(function () {


    // .append / .prepend :  añade/mueve elementos como hijos
    // .before / .after : añade/mueve elementos como hermanos

    // no tiene un metodo create element se escribe directamente la etiqueta
    /* $("div")
         .append("<div class='hijo'>1.Append</div>")
         .prepend("<div class='hijo'>2.Prepend</div>")
         .before("<div class='hermano'>3.Before</div>")
         .after("<div class='hermano'>4.After</div>");
 */

    // muevo el primer li al final
    // $(elemento).appenTo(destino)
    // $("ul li:first").appendTo("ul");

    // de nuevo
    // $(destino).append(elemento)
    // $("ul").append($("ul li:first"));


    // clonar elementos
    //clono el primer elemento y lo clono al final
    //$("ul li:first").clone().appendTo("ul");

    // crear un elemento
    var enlace1 = $("<a href='http://www.google.com.ar'>Ir a Google</a>");

    var enlace4 = $("<a href='http://www.clarin.com.ar'>Ir a Clarin</a>");
  /*  var enlace2 = $("</a>", {
        hmtl: "Ir a <strong>Clarin</strong>",
        href: "http://www.clarin.com",
        "class": "enlace"
    });*/

    var enlace3 = $("<a href='http://www.infobae.com'>Ir a Infobae</a>");

    // añado enlace1
    $("p").append(enlace1);

    // añado enlace2
    enlace4.appendTo($("p"));

    // añado enlace3 despues de ul
    enlace3.insertAfter("ul");


    // Eliminar elementos
    // $(elemento).remove(); Borra elemento y sus hijos
    $("li").remove();
    // $(elemento).empty(); Borra los hijos del elemento
    $("div.origen").empty();


});

