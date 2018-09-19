window.addEventListener('load', inicializarEventos)

function inicializarEventos()
{
    document.getElementById('btnCargar').addEventListener('click', traerTexto);
}

function traerTexto()
{
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
            document.getElementById('info').innerHTML = this.responseText;
        }
    }

    xhr.open('GET', 'archivo.txt', true);
    xhr.send();
}