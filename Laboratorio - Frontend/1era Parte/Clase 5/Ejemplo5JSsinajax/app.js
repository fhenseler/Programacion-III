window.addEventListener('load', inicializarEventos)

function inicializarEventos()
{
    document.getElementById('btnCrear').addEventListener('click', crearObjeto);
}

function crearObjeto()
{
    var cadena = "('nombre':'Juan', 'edad': '25')";
    console.log(cadena);
    var persona = JSON.parse(cadena); //parse y stringify son de js, encode y decode de php.
    console.log(persona);
    document.getElementById('info').innerHTML = persona.nombre;
    document.getElementById('info').innerHTML += " ";
    document.getElementById('info').innerHTML += persona.edad;
}