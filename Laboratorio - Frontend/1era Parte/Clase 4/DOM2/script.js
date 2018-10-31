window.addEventListener('load', AsignarManejadores);

function AsignarManejadores()
{
    document.getElementById('btnCrearParrafo').addEventListener('click', CrearParrafo);
    document.getElementById('btnCrearImg').addEventListener('click', CrearImg);
    document.getElementById('btnClearLast').addEventListener('click', ClearLast);
    document.getElementById('btnClearFirst').addEventListener('click', ClearFirst);
    document.getElementById('btnSustituir').addEventListener('click', Sustituir);
}

function CrearParrafo()
{
    var parrafo = document.createElement('p');
    var texto = document.createTextNode(document.getElementById('txtArea').value);

    parrafo.appendChild(texto);

    document.getElementById('div1').appendChild(parrafo);

    parrafo.setAttribute('class', 'claseP');
}

function CrearImg()
{
    var imagen = document.createElement('img');

    imagen.setAttribute('src', './Penguins.jpg');
    imagen.height = '300';
    imagen.alt = 'Foto pingüinos';

    document.getElementById('div1').appendChild(imagen);
}

function ClearLast()
{
    var div = document.getElementById('div1');
    var hijo = div.lastChild;

    div.removeChild(hijo);
}

function ClearFirst()
{
    var div = document.getElementById('div1');
    var hijo = div.firstChild;

    div.removeChild(hijo);
}

function Sustituir()
{
    var parrafo = document.createElement('p');
    var texto = document.createTextNode("Hola Mundo!");

    parrafo.appendChild(texto);

    document.getElementById('div1').replaceChild(parrafo, document.getElementById('div1').firstChild);
}