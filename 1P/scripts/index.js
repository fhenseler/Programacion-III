var xhr;
var datos = new Array();
var datoAModificar;

// function Heroe(nombre, apellido, alias, edad, lado)
// {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.alias = alias;
//     this.edad = edad;
//     this.lado = lado;
// }

window.addEventListener('load', AsignarManejadores, false);

function AsignarManejadores() 
{
    var frm = document.getElementById('myForm');
    frm.addEventListener('load', ManejarEnvio, false);

    //var btn = document.getElementById('btnOpen');
    //btn.addEventListener('click', openForm, false);
    $("#btnOpen").click(openForm);

    this.document.getElementById('btnCancel').addEventListener('click', closeForm);

    //document.getElementById('btnConfirmar').addEventListener('click', enviarAlta);
        document.getElementById('btnConfirmar').addEventListener('click', function () {
        var nombre = document.getElementById("txtNombre");
        var apellido = document.getElementById("txtApellido");
        var alias = document.getElementById("txtAlias");
        var edad = document.getElementById("txtEdad");
        var lado = document.getElementById("txtLado");
        var data;
        if (datoAModificar) {
            data = {
                "nombre": nombre.value,
                "apellido": apellido.value,
                "alias" : alias.value,
                "edad" : edad.value,
                "lado" : lado.value,
                "collection": "heroes",
                "id": datoAModificar.id,
                "active": datoAModificar.active,
                "created_dttm": datoAModificar.created_dttm
                // "collection" : "heroes",
                // "heroe" : heroe
            }
            //borrar(datoAModificar);
            document.getElementById('tblPost').innerHTML = '<img src= ./img/spinner.gif>';
            enviarModificacion(data);
        } else {
            data = {
                "nombre": nombre.value,
                "apellido": apellido.value,
                "alias" : alias.value,
                "edad" : edad.value,
                "lado" : lado.value,
                "collection": "heroes",
                // "id": datoAModificar.id,
                // "active": datoAModificar.active,
                // "created_dttm": datoAModificar.created_dttm
                // "collection" : "heroes",
                // "heroe" : heroe
            }
            document.getElementById('tblPost').innerHTML = '<img src= ./img/spinner.gif>';
             enviarAlta(data);
             //ManejarEnvio(enviarAlta(data));
        }
    })
    cargarDatos();
}

function ManejarEnvio(e)
{
    e.preventDefault(); //Anula el evento nativo
    e.target.removeEventListener(e.type, arguments.callee);
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function enviarAlta(data) {
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {    
        if (this.readyState == 4 && this.status == 200) {
            var resp = this.response;
            cargarDatos();
            limpiarFormulario();
            datoAModificar = null;
        }
    };
    xhr.open("POST", "/agregar", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
}

// function enviarAlta(e) {

//     e.preventDefault();

//     var nombre = $("#txtNombre").val();
//     var apellido = $("#txtApellido").val();
//     var alias = $("#txtAlias").val();
//     var edad = $("#txtEdad").val();
//     var lado = $("#txtLado").val();
//     var parametros = {
//         "nombre": nombre,
//         "apellido": apellido,
//         "alias": alias,
//         "edad": edad,
//         "lado": lado,
//     };

//     $.ajax({
//         url: "/agregar",
//         data: parametros,
//         beforeSend: function () {
//             $("#tblPost").html('<img src="./img/spinner.gif" alt="preloader">');
//         },
//         success: function (respuesta) {

//             $("#tblPost").html(respuesta);
//         },
//         error: function (xhr, status) {
//             alert("Error " + xhr.status + " " + xhr.statusText);
//         },
//         complete: function (xhr, status) {
//             alert("Peticion realizada");
//         }
//     });

// }

function cargarDatos() {
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () { 
        if (this.readyState == 4 && this.status == 200) {
            var resp = JSON.parse(this.response);
            //console.log(resp.data);
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
        nuevasFilas += "<td>" + data[i].id + "</td>";
        nuevasFilas += "<td>" + data[i].created_dttm + "</td>";
        nuevasFilas += "<td>" + data[i].nombre + "</td>";
        nuevasFilas += "<td>" + data[i].apellido + "</td>";
        nuevasFilas += "<td>" + data[i].alias + "</td>";
        nuevasFilas += "<td>" + data[i].edad + "</td>";
        nuevasFilas += "<td>" + data[i].lado + "</td>";
        nuevasFilas += "<td> <input type='button' value='modificar' onclick='modificar(" + data[i].id + "); openForm();'></td>";
        nuevasFilas += "<td> <input type='button' style='display:inline-block' value='borrar' onclick='borrar(" + data[i].id + ");'></td>";
        nuevasFilas += "</tr>";
    }
    c[2].innerHTML = nuevasFilas;
    //tabla.children[2].innerHTML = nuevasFilas;
    //tabla.innerHTML = nuevasFilas;
}

function limpiarFormulario() {
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtApellido").value = "";
    document.getElementById("txtAlias").value = "";
    document.getElementById("txtEdad").value = "";
    document.getElementById("txtLado").value = "";
}

function enviarModificacion(data) {
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var resp = this.response;
            cargarDatos();
            //limpiarFormulario();
            datoAModificar = null;
        }
    };
    xhr.open("POST", "/modificar", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
}

function borrar(id) {
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var resp = JSON.parse(this.response);
            cargarDatos(resp.data);
            datos = resp.data;
        }
    };
    xhr.open("POST", "/eliminar", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({ "collection": "heroes", "id": id }));
}

function modificar(id) {
    datoAModificar = datos.find(x => x.id === id);
    document.getElementById("txtNombre").value = datoAModificar.nombre;
    document.getElementById("txtApellido").value = datoAModificar.apellido;
    document.getElementById("txtAlias").value = datoAModificar.alias;
    document.getElementById("txtEdad").value = parseInt(datoAModificar.edad);
    document.getElementById("txtLado").value = datoAModificar.lado;
}