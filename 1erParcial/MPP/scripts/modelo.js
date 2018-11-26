var datos = new Array();
var heroe;

function Heroe(nombre, apellido, alias, edad, lado)
{
    this.nombre = nombre;
    this.apellido = apellido;
    this.alias = alias;
    this.edad = edad;
    this.lado = lado;
    this.id;
}

function cargarTabla(data) {
    tabla = document.getElementById('tblPost');
    var c = document.getElementById('tblPost').children;
    var nuevasFilas = "";

    for (var i in data) {
        nuevasFilas += "<tr>";
        nuevasFilas += "<td id='1' onclick='openForm2("+ data[i].id +");'>" + data[i].id + "</td>";
        nuevasFilas += "<td id='2' onclick='openForm2("+ data[i].id +");'>" + data[i].created_dttm + "</td>";
        nuevasFilas += "<td id='3' onclick='openForm2("+ data[i].id +");'>" + data[i].nombre + "</td>";
        nuevasFilas += "<td id='4' onclick='openForm2("+ data[i].id +");'>" + data[i].apellido + "</td>";
        nuevasFilas += "<td id='5' onclick='openForm2("+ data[i].id +");'>" + data[i].alias + "</td>";
        nuevasFilas += "<td id='6' onclick='openForm2("+ data[i].id +");'>" + data[i].edad + "</td>";
        nuevasFilas += "<td id='7' onclick='openForm2("+ data[i].id +");'>" + data[i].lado + "</td>";
        nuevasFilas += "</tr>";
    }
    c[2].innerHTML = nuevasFilas;
}

function altaPersonaje() 
{
    var nombre = document.getElementById('txtNombre');
    var apellido = document.getElementById('txtApellido');
    var alias = document.getElementById('txtAlias');
    var edad = document.getElementById('txtEdad');
    var lado = $("input[name='lado']:checked").parent('label').text();

    heroe = new Heroe(nombre.value, apellido.value, alias.value, edad.value, lado);

    var data = {
        "collection": "heroes",
        "heroe" : heroe,
    }
    enviarAlta(data);
}

function modificarPersonaje() {
    var nombre = document.getElementById('txtNombre2');
    var apellido = document.getElementById('txtApellido2');
    var alias = document.getElementById('txtAlias2');
    var edad = document.getElementById('txtEdad2');
    var lado = $("input[name='lado2']:checked").parent('label').text();

    heroeAux = new Heroe(nombre.value, apellido.value, alias.value, edad.value, lado);
    heroeAux.id = heroe.id;

    var data = {
        "heroe" : heroeAux,
        "collection": "heroes",
    }
    enviarModificacion(data);
}