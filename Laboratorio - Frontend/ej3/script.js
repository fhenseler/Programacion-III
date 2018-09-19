window.addEventListener('load', agregarManejadores);


function agregarManejadores() {
   
    for(var i=0; i <document.getElementsByTagName('h2').length; i++){
        document.getElementsByTagName('h2')[i].addEventListener('click', forward);
    }
}

function forward(e){
    var texto = "";

    var h2 = e.target;

    texto += "Elegiste " + h2.textContent;

    // seleccionamos el padre

    var padre = h2.parentElement;

    texto += " que esta en el div de id " + padre.id + "";

    // seleccionamos el hermano

    //var ul = h2.nextSibling // no se usa porque incluye nodos de tipo texto

    var ul = h2.nextElementSibling;
    // children solo trae elementos chilnodes incluye texto y comentarios
    texto += "El numero de personajes es " + ul.children.length;

    var hijo = ul.firstChild;

    while(hijo != null){
        texto += " " + hijo.textContent;
        hijo = hijo.nextElementSibling;
    }

    alert(texto);
}

