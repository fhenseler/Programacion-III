$(document).ready(function () {

    mostrar();

});

function mostrar() {

    // Ascendientes:
    // .parent(): padre directo
    //$("span").parent().css("border", "2px solid blue");

    // .parents(): todos los padres
    // $("span").parents().css("border", "2px solid blue");

    // .parentsUntil(): todos los padres hasta uno en particular
    //$("span").parentsUntil("div").css("border", "2px solid blue");

    // .closest("etiqueta"): todos los padres hasta uno en particular
    //$("span").closest("ul").css("border", "2px solid blue"); 


    // Descendientes:
    // .children(): hijo directo
    //$("li").children().css("border", "2px solid red");
    // se le puede pasar parametros 
    //$("li").children("i").css("border", "2px solid red");
    // .find() Hijos que cumplen con una condicion
    //$("div").find("b").css("border", "2px solid red");

    // Hermanos
    // .siblings(): todos los hermanos   
    // $("i").siblings().css("border", "2px solid green");

    // .next() .prev()
    //$("i").next().css("border", "2px solid green");
    // $("i").prev().css("border", "2px solid green");

    // .nextAll .prevAll
    //$("i").nextAll().css("border", "2px solid green");
    //$("b").prevAll().css("border", "2px solid green");

    // .nextUntil .prevUntil
    //$("i").nextUntil().css("border", "2px solid green");
    //$("b").prevUntil().css("border", "2px solid green");

    // filtrado
    // .has .not .first .last .eq(numero)

    // Añadir elementos a una seleccion (los elementos deben existir)
    //$("span").add("b").css("border", "2px solid green");
    //$("span").add("b").add("div").css("border", "2px solid green");




  

}