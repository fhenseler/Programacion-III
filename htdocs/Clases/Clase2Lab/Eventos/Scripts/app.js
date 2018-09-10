/*Asigno delegado (inicializarEventos, SIN PARENTESIS) al evento window.onload*/
// window.onload = inicializarEventos;

// /*Esta forma (FUNCIONES ANONIMAS) se usa en Programación Web (pasar directamente la función en vez de la referencia)*/
// window.onload = function()
// {
//     document.getElementById("titulo".onclick) = saludar;
// }


/*FORMA RECOMENDADA POR W3C*/
window.onload = function()
{
    this.document.getElementById("titulo").addEventListener("click", saludar, false);
    this.document.getElementById("titulo").addEventListener("click", cambiarColor, false);
    this.document.getElementById("titulo").addEventListener("click", cambiarTexto, false);
    this.document.getElementById("titulo").addEventListener("click", function(){alert("Chau")}, false);
}

/*function inicializarEventos()
{
    document.getElementById("titulo".onclick) = saludar;
}*/

/*var titulo = document.getElementById("titulo");
titulo.onclick = saludar;
Asigno delegado (saludar) a evento (titulo.onclick)*/

function saludar()
{
    alert("Hola mundo");
    // document.getElementById("titulo").innerHTML = "Hola mundo";
    document.getElementById("titulo").removeEventListener("click", saludar);
}

function cambiarColor()
{
    document.getElementById("titulo").style.color = "red";
}

function cambiarTexto()
{
    document.getElementById("titulo").innerHTML = "asdasdsa";
}

/*Con una sola funcion puedo manejar multiples eventos*/
/*function cambiarTexto(emisor)
{
    emisor.innerHTML = "Cambio el texto del emisor del evento";
}*/

