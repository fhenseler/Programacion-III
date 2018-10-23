//Archivo agregado por mi
const server_url = "http://localhost:3000/";
var xhr;
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

window.addEventListener('load', AsignarManejadores, false);

function AsignarManejadores() 
{
    //window.onload = function(){ document.getElementById("loading").style.display = "none" };
    $("#btnOpen").click(openForm);
    $("#divForm").on('load', ManejarEnvio);
    // $("#myForm").on('submit', function (event) {
    //    var validacion = validateT();
    //    if(validacion == false)
    //    {
    //         event.preventDefault();
    //         event.stopPropagation(); 
    //         return false;
    //    }
    // });
    $("#btnConfirmar").click(altaPersonaje);
    $('#btnCancel').click(closeForm);

    $("#divForm2").on('load', ManejarEnvio);
    // $("#myForm2").on('submit', function (event) {
    //    var validacion = validateT();
    //    if(validacion == false)
    //    {
    //         event.preventDefault();
    //         event.stopPropagation(); 
    //         return false;
    //    }
    // });
    $('#btnCancel2').click(closeForm2);
    $('#btnModificar').click(modificarPersonaje);
    // $('#btnModificar').click(confirmarM, false);
    $('#btnEliminar').click(eliminarPersonaje);
    //$('#btnEliminar').click(confirmarE, false);

    traerListaHeroes();
}

function confirmarE() {
    confirm("Desea eliminar el personaje?");
}

function confirmarM() {
    confirm("Desea modificar el personaje?");
}
function ManejarEnvio(e)
{
    e.preventDefault(); //Anula el evento nativo
    // e.target.removeEventListener(e.type, arguments.callee);
}

function openForm() {
    document.getElementById('divForm').style.display = "block";
}

function closeForm() {
    document.getElementById('divForm').style.display = "none";
}

function openForm2(id) {
    document.getElementById('divForm2').style.display = "block";
    heroe = datos.find(x => x.id === id);
    document.getElementById('txtNombre2').value = heroe.nombre;
    document.getElementById('txtApellido2').value = heroe.apellido;
    document.getElementById('txtAlias2').value = heroe.alias;
    document.getElementById('txtEdad2').value = heroe.edad;
    if(heroe.lado == 'Heroe')
    {
        document.getElementById('l11').checked = true;
    }
    if(heroe.lado == 'Villano')
    {
        document.getElementById('l22').checked = true;
    }
}

function closeForm2() {
    document.getElementById('divForm2').style.display = "none";
}

function traerListaHeroes() 
{
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () { 
        if (this.readyState == 4 && this.status == 200) {
            var resp = JSON.parse(this.response);
            cargarTabla(resp.data);
            datos = resp.data;
        }
    };
    xhr.open("GET", "/traer?collection=heroes", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
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
    //document.getElementById('tblPost').innerHTML = '<images src= ./images/spinner.gif>';
    enviarAlta(data);
}

function enviarAlta(data) 
{
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {    
        if (this.readyState == 4 && this.status == 200) {
            var resp = this.response;
            traerListaHeroes();
            limpiarFormulario();
            heroe = null;
            console.log(heroe);
        }
    };
    xhr.open("POST", "/agregar", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
}

function limpiarFormulario() 
{
    $("#txtNombre").value = "";
    $("#txtApellido").value = "";
    $("#txtEdad").value = "";
    $("#txtAlias").value = "";
    document.getElementById('l11').checked = false;
    document.getElementById('l22').checked = false;
    document.getElementById('l1').checked = false;
    document.getElementById('l2').checked = false;
}

// function eliminarPersonaje() {
//     xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             var resp = JSON.parse(this.response);
//             traerListaHeroes(resp.data);
//             datos = resp.data;
//         }
//     };
//     xhr.open("POST", "/eliminar", true);
//     xhr.setRequestHeader("Content-Type", "application/json");
//     xhr.send(JSON.stringify({ "collection": "heroes", "id": heroe.id }));
// }

function eliminarPersonaje()
{
    event.preventDefault();

    var data = JSON.stringify({
        "collection": "heroes",
        "id": heroe.id,
    });
        $.ajax({
        type: "POST",
        url: "/eliminar",
        data: data,
        beforeSend: function () {
            $("#tblPost").html('<img src="images/spinner.gif" alt="preloader">');
        },
        success: function (respuesta) {
            $("#tblPost").html(respuesta);
            setTimeout(location.reload.bind(location), 200);
        },
        error: function (xhr, status) {
            alert("Error " + xhr.status + " " + xhr.statusText);
        },
        complete: function (xhr, status) {
            console.log("Peticion realizada");
        },
        dataType: "json",
        contentType: "application/json"
    });
}

function modificarPersonaje() {
    var nombre = document.getElementById('txtNombre2');
    var apellido = document.getElementById('txtApellido2');
    var alias = document.getElementById('txtAlias2');
    var edad = document.getElementById('txtEdad2');
    var lado = $("input[name='lado2']:checked").parent('label').text();

    heroe = new Heroe(nombre.value, apellido.value, alias.value, edad.value, lado);
    console.log(heroe);
    var data = {
        "heroe" : heroe,
        "collection": "heroes",
    }
    //$('#tblPost').innerHTML = '<images src= ./images/spinner.gif>';
    enviarModificacion(data);
}

function enviarModificacion(data)
{
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var resp = this.response;
            traerListaHeroes();
            limpiarFormulario();
            heroe = null;
        }
    };
    xhr.open("POST", "/modificar", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
}

function validateT() {
    return [
        document.getElementById('txtNombre'),
        document.getElementById('txtApellido'),
        document.getElementById('txtAlias'),
    ].every(validateText)
}

function validateText(text)
{
    var retorno = false;
    if (text.value.trim() === "") {
        alert("Please enter text");
        text.focus();
        retorno = false;
    }
    if (text.value !== "") {
        if (!(/[a-zA-Z]{3,10}?$/.test(text.value))) {
            alert("Please enter valid text");
            text.focus();
            retorno = false;
        }
    }
    else if(/[a-zA-Z]{3,10}?$/.test(text.value))
    {
        retorno = true;
    }
    return retorno;      
}