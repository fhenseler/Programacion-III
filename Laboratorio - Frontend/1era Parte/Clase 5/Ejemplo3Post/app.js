window.addEventListener('load', inicializarEventos)

function inicializarEventos()
{
    document.getElementById('btnCargar').addEventListener('click', cargarPersona);
}

function cargarPersona()
{
    var xhr = new XMLHttpRequest(); //"Objeto AJAX"

    xhr.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
            document.getElementById('info').innerHTML = this.responseText;
        }
    }
    
    var data = leerDatos();
    xhr.open('POST', 'pagina1.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //tipo de dato MIME
    xhr.send(data);
}

function leerDatos()
{
    var cadena = '';
    var nombre = document.getElementById('txtNombre').value;
    var edad = document.getElementById('txtEdad').value;
    cadena += 'nombre=' + encodeURIComponent(nombre)  + '&edad=' + encodeURIComponent(edad);
    return cadena;
}

//alert(encodeURIComponent("Federico"));