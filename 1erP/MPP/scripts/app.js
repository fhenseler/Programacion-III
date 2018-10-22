//Archivo agregado por mi
const server_url = "http://localhost:3000/";
var xhr;
var datos = new Array();
var heroe;

function Heroe(nombre, apellido, alias, edad, lado)
{
    this.id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.alias = alias;
    this.edad = edad;
    this.lado = lado;
}

window.addEventListener('load', AsignarManejadores, false);

function AsignarManejadores() 
{
    var frm = document.getElementById('myForm');
    frm.addEventListener('load', ManejarEnvio);

    $("#btnOpen").click(openForm);
    // $("#myForm").submit(function (event) {
    //    var retorno = validateT();
    //    if(retorno == false)
    //    {
    //         event.preventDefault();
    //         event.stopPropagation(); 
    //         return false;
    //    }
    // });
    $("#btnConfirmar").click(altaPersonaje);
    $('#btnCancel').click(closeForm);
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
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
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
    tabla = document.getElementById("tblPost");
    var c = this.document.getElementById("tblPost").children;
    //var c = document.getElementById("tblPost").children.length;
    var nuevasFilas = "";
    for (var i in data) {
        nuevasFilas += "<tr>";
        nuevasFilas += "<td class='id' id='1' onclick='modificarPersonaje(" + data[i].id + "); openForm();'>" + data[i].id + "</td>";
        nuevasFilas += "<td id='2' onclick='modificarPersonaje(" + $('#1').find("td:first").html() + "); openForm();'>" + data[i].created_dttm + "</td>";
        nuevasFilas += "<td id='3' onclick='modificarPersonaje(" + $('#1').find("td:first").html() + "); openForm();'>" + data[i].nombre + "</td>";
        nuevasFilas += "<td id='4' onclick='modificarPersonaje(" + $('#1').find("td:first").html() + "); openForm();'>" + data[i].apellido + "</td>";
        nuevasFilas += "<td id='5' onclick='modificarPersonaje(" + $('#1').find("td:first").html() + "); openForm();'>" + data[i].alias + "</td>";
        nuevasFilas += "<td id='6' onclick='modificarPersonaje(" + $('#1').find("td:first").html() + "); openForm();'>" + data[i].edad + "</td>";
        nuevasFilas += "<td id='7' onclick='modificarPersonaje(" + $('#1').find("td:first").html() + "); openForm();'>" + data[i].lado + "</td>";
        //nuevasFilas += "<td> <input type='button' id='btnModificar' value='modificar' onclick='modificarPersonaje(" + data[i].id + "); openForm();'></td>";
        // nuevasFilas += "<td> <input type='button' id='btnEliminar' style='display:inline-block' value='borrar' onclick='eliminarPersonaje(" + data[i].id + ");'></td>";
        nuevasFilas += "</tr>";
    }
    c[2].innerHTML = nuevasFilas;
    // tabla.children[2].innerHTML = nuevasFilas;
    //tabla.innerHTML = nuevasFilas;
}

function altaPersonaje() 
{
    var nombre = document.getElementById("txtNombre");
    var apellido = document.getElementById("txtApellido");
    var alias = document.getElementById("txtAlias");
    var edad = document.getElementById("txtEdad");
    var lado = $("input[name='lado']:checked").parent('label').text();

    heroe = new Heroe(nombre.value, apellido.value, alias.value, edad.value, lado);
    var data = {
        "heroe" : heroe,
        "collection": "heroes",
    }
     document.getElementById('tblPost').innerHTML = '<images src= ./images/spinner.gif>';
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
            // alert("Superheroe creado!");
            heroe = null;
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
    //$("#txtLado").value = "";
}

function eliminarPersonaje(id) {
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var resp = JSON.parse(this.response);
            traerListaHeroes(resp.data);
            datos = resp.data;
        }
    };
    xhr.open("POST", "/eliminar", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({ "collection": "heroes", "id": id }));
}

// function eliminarPersonaje(id)
// {
//     event.preventDefault();

//     var data = JSON.stringify({
//         "collection": "heroes",
//         "id": id,
//     });
//         $.ajax({
//         type: "POST",
//         url: "/eliminar",
//         data: data,
//         beforeSend: function () {
//             $("#tblPost").html('<img src="images/spinner.gif" alt="preloader">');
//         },
//         success: function (respuesta) {
//             $("#tblPost").html(respuesta);
//             setTimeout(location.reload.bind(location), 200);
//         },
//         error: function (xhr, status) {
//             alert("Error " + xhr.status + " " + xhr.statusText);
//         },
//         complete: function (xhr, status) {
//             console.log("Peticion realizada");
//         },
//         dataType: "json",
//         contentType: "application/json"
//     });
// }

function modificarPersonaje(id) {
    alert(id);
    heroe = datos.find(x => x.id === id);
    document.getElementById("txtNombre").value = heroe.nombre;
    document.getElementById("txtApellido").value = heroe.apellido;
    document.getElementById("txtAlias").value = heroe.alias;
    document.getElementById("txtEdad").value = heroe.edad;
    if(heroe.lado == 'Heroe')
    {
        document.getElementById("l1").checked = true;
    }
    if(heroe.lado == 'Villano')
    {
        document.getElementById("l2").checked = true;
    }

    var data = {
        "heroe" : heroe,
        "collection": "heroes",
    }
     document.getElementById('tblPost').innerHTML = '<images src= ./images/spinner.gif>';
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