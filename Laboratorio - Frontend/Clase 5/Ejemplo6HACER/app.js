window.addEventListener('load', inicializarEventos)

var tabla = '<table><tbody><thead><tr><th>Nombre</th><th>Email</th><th>Genero</th></tr></thead></tbody>';

function inicializarEventos()
{
    document.getElementById('btnCargar').addEventListener('click', cargarTabla);
}

function cargarTabla()
{
    var xhr = new XMLHttpRequest(); //"Objeto AJAX"

    xhr.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
            var unAuto = JSON.parse(this.responseText);
            document.getElementById('info').innerHTML = 'ID: ' + unAuto.id + 'Modelo: ' + unAuto.modelo;
        }
    }
    
    xhr.open('GET', 'pagina1.php', true);
    xhr.send();
}