window.addEventListener('load', AsignarManejadores);

function AsignarManejadores()
{
    document.getElementById('btnCambiarTexto').addEventListener('click', CambiarTexto);
    document.getElementById('btnCambiarClases').addEventListener('click', CambiarClases);
    document.getElementById('btnSacarClases').addEventListener('click', SacarClases);
}

function CambiarTexto()
{
    //Varias formas de hacer lo mismo
    document.getElementById('p1').innerHTML = 'Otro texto p1';
    document.getElementsByTagName('p')[1].innerHTML = 'Otro texto p2'; //Devuelve array con todos los párrafos de la página
    document.getElementsByClassName('claseP')[0].innerHTML = 'Otro texto p3';
    
    var div = document.getElementById('divParrafos');
    div.getElementsByTagName('p')[3].innerHTML = 'Otro texto p4'; //Todos los párrafos que están adentro del div.
}

function CambiarClases()
{
    //2 formas de hacer lo mismo
    //document.getElementById('p2').setAttribute('class', 'claseP');
    document.getElementById('p2').className = 'claseP';
}

function SacarClases()
{
    document.getElementById('p3').setAttribute('class', "");
}