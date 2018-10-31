window.addEventListener('load', inicializarEventos)

function inicializarEventos()
{
    document.getElementById('frmPersona').addEventListener('submit', manejarSubmit);
}

function manejarSubmit(e)
{
    e.preventDefault(); //Desactivamos el manejador nativo del evento
    cargarPersona();
}

function cargarPersona()
{
    var xhr = new XMLHttpRequest(); //"Objeto AJAX"

    xhr.onreadystatechange = function()
    {
        document.getElementById('info').innerHTML = '<img src= ./img/preloader.gif>';
        if(this.readyState == 4) 
        {
            if(this.status == 200)
            {
                document.getElementById('info').innerHTML = this.responseText;
            }
            else
            {
                document.getElementById('info').innerHTML = 'Error: ' + this.status + " " + this.statusText;
            }
        }

    }
    
    //var frm = document.getElementById(frmPersona);
    // var data = new FormData(frm); //Ahorra hacer todo el LeerDatos (si el navegador lo permite)
    var data = leerDatos();
    xhr.open('POST', 'pagina1.php', true); //cambiar URL para forzar error 404 (test), true para que sea asincrónica
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //tipo de dato MIME
    //xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
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