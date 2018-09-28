var lista = [];
var txtNombre;
var txtEdad;

function Persona(nombre, edad)
{
    this.nombre = nombre;
    this.edad = edad;
}

//Asignamos funcion anonima (no es buena practica)
window.onload = function()
{
    //code
}

//Buena practica
//El 'false' es opcional, se pueden poner varios manejadores de esta forma (contrario al onload)
window.addEventListener('load', AsignarManejadores, false); 

function AsignarManejadores()
{
    var frm = document.getElementById('frmAlta');
    frm.addEventListener('submit', ManejarEnvio, false);

    //Otra forma
    frm = document.forms[0]; //Primer formulario (array de formularios)

    txtNombre = document.getElementById('txtNombre');
    txtEdad = document.getElementById('txtEdad');
}

function ManejarEnvio(e)
{
    e.preventDefault(); //Anula el evento nativo
    CargarLista();
}

function CargarLista()
{
    var nuevaPersona = new Persona(txtNombre.value, parseInt(txtEdad.value));
    lista.push(nuevaPersona);

    //console.log(lista);

    RefrescarLista();
}

function RefrescarLista()
{
    var tabla = "<table id= 'tablaPersonas'><tr><th>Nombre</th><th>Edad</th></tr>";
    
    for(var i = 0; i < lista.length; i++)
    {
        tabla += "<tr><td>" + lista[i]['nombre'] + "</td><td>" + lista[i]['edad'] + "</td></tr>";
    }

    tabla += "</table>";

    document.getElementById('divTabla').innerHTML = tabla;

}