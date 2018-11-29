const server_url = "http://localhost:3000/";
var xhr;

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

function enviarAlta(data) 
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
    xhr.open("POST", "/agregar", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
}

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
            $("#tblPost").html('<img src="images/spinner.gif" alt="preloader">').fadeOut();
        },
        success: function (respuesta) {
            setTimeout(location.reload.bind(location), 200);
            $("#tblPost").html(respuesta);
            
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

function enviarModificacion(data)
{
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var resp = this.response;
            traerListaHeroes();
            limpiarFormulario();
        }
    };
    xhr.open("POST", "/modificar", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
}


function cargarSpinner()
{
    document.getElementById("divSpinner").style.display = "block";
}