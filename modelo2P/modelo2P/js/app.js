///<reference path="mascota.ts"/>
$(function () {
    // localStorage.clear();
    cargarTipos();
    mostrarMascotas();
    $('#cmbFiltro').change(function () {
        //filtrarMascotas(this.value);
    });
    $('#chkId').change(mapearCampos);
    $('#chkName').change(mapearCampos);
    $('#chkEdad').change(mapearCampos);
    $('#chkPatas').change(mapearCampos);
    //mapearCampos();
});
function agregarMascota() {
    var id = Number($('#txtId').val());
    var tipo = Number($('#selectTipo').val());
    var nuevaMascota = new Clases.Mascota(id, tipo, Number($('#txtPatas').val()), Number($('#txtEdad').val()), String($('#txtNombre').val()));
    var MascotasString = localStorage.getItem("Mascotas");
    var MascotasJSON = MascotasString == null ? [] : JSON.parse(MascotasString);
    console.log(nuevaMascota.toJSON());
    MascotasJSON.push(JSON.parse(nuevaMascota.toJSON()));
    localStorage.setItem("Mascotas", JSON.stringify(MascotasJSON));
    alert("Mascota guardada!!!");
    mostrarMascotas();
    //limpiarCampos();
    // console.log(nuevaMascota.toJSON());
}
function eliminarMascota() {
    var storedMascotas = JSON.parse(localStorage.getItem("Mascotas"));
    // here you need to make a loop to find the index of item to delete
    var indexToRemove = Number($('#txtId').val());
    //remove item selected, second parameter is the number of items to delete 
    $.each(storedMascotas, function (index, obj) {
        if (obj.id == indexToRemove) {
            storedMascotas.splice(index, 1);
            console.log(storedMascotas);
            localStorage["Mascotas"] = JSON.stringify(storedMascotas);
            return false;
        }
    });
    mostrarMascotas();
    limpiarCampos();
}
function modificarMascota() {
    agregarMascota();
    eliminarMascota();
    mostrarMascotas();
    limpiarCampos();
}
function limpiarCampos() {
    $('#txtTipo').val("");
    $('#txtId').val("");
    $('#txtEdad').val("");
    $('#txtPatas').val("");
    $('#selectTipo').val(0);
    $('#txtId').focus();
}
function mostrarMascotas() {
    var MascotasString = localStorage.getItem("Mascotas");
    var MascotasJSON = MascotasString == null ? [] : JSON.parse(MascotasString);
    var tabla = "<table class='table'><thead><tr><th>Id</th><th>Nombre</th><th>Edad</th><th>Tipo</th><th>Patas</th></tr>";
    for (var i = 0; i < MascotasJSON.length; i++) {
        tabla += "<tr><td>" + MascotasJSON[i].id + "</td><td>" + MascotasJSON[i].nombre + "</td><td>" + MascotasJSON[i].edad + "</td><td>" + Clases.Tipo[MascotasJSON[i].tipo] + "</td><td>" + MascotasJSON[i].patas + "</td></tr>";
    }
    tabla += "</table>";
    $('#divTabla').html(tabla);
}
function cargarTipos() {
    /* var paises = data.map(function(p){
         return p.pais;
     })
     .unique()
     .sort();
 */
    for (var i = 0; i < 5; i++) {
        $("#cmbFiltro").append('<option value="' + i + '">' + Clases.Tipo[i] + '</option>');
    }
    $.each(Clases.Tipo, function (value, tipo) {
        /* $("#cmbFiltro").append('<option value="'+value+'">'+tipo+'</option>');
             //console.log(x);
             i++;
             */
    });
}
function filtrarMascotas(tipo) {
    //console.log(tipo);
    var mascotasFiltradas;
    var MascotasString = localStorage.getItem("Mascotas");
    var MascotasJSON = MascotasString == null ? [] : JSON.parse(MascotasString);
    mascotasFiltradas = MascotasJSON.filter(function (mascota) {
        return Clases.Tipo[mascota.tipo] === Clases.Tipo[tipo];
    });
    //console.log(mascotasFiltradas);
    mostrarMascotasPorTipo(mascotasFiltradas);
}
function cleanStorage() {
    localStorage.clear();
    alert("LocalStorage Limpio");
}
function mostrarMascotasPorTipo(lista) {
    var tabla = "<table class='table'><thead><tr><th>Id</th><th>Nombre</th><th>Edad</th><th>Tipo</th><th>Patas</th></tr>";
    if (lista.length == 0) {
        tabla += "<tr><td colspan='4'>No hay mascotas que mostrar</td></tr>";
    }
    else {
        for (var i = 0; i < lista.length; i++) {
            tabla += "<tr><td>" + lista[i].id + "</td><td>" + lista[i].nombre + "</td><td>" + lista[i].edad + "</td><td>" + Clases.Tipo[lista[i].tipo] + "</td><td>" + lista[i].patas + "</td></tr>";
        }
    }
    tabla += "</table>";
    $('#divTabla').html(tabla);
}
function calcularPromedio() {
    var promedio = 0;
    var totalEdades;
    var cantidad;
    var tipo = Number($('#cmbFiltro').val());
    var mascotasFiltradas;
    var MascotasString = localStorage.getItem("Mascotas");
    var MascotasJSON = MascotasString == null ? [] : JSON.parse(MascotasString);
    mascotasFiltradas = MascotasJSON.filter(function (mascota) {
        return Clases.Tipo[mascota.tipo] === Clases.Tipo[tipo];
    });
    totalEdades = mascotasFiltradas.reduce(function (anterior, actual) {
        return anterior += actual.edad;
    }, 0);
    console.log(totalEdades);
    cantidad = mascotasFiltradas.length;
    console.log(cantidad);
    if (cantidad != 0) {
        promedio = totalEdades / cantidad;
    }
    $('#txtPromedio').val(promedio);
}
function mapearCampos() {
    var chkId = $('#chkId')[0].checked;
    var chkName = $('#chkName')[0].checked;
    var chkEdad = $('#chkEdad')[0].checked;
    var chkPatas = $('#chkPatas')[0].checked;
    //console.log(chkId);
    var MascotasString = localStorage.getItem("Mascotas");
    var MascotasJSON = MascotasString == null ? [] : JSON.parse(MascotasString);
    var tabla = "<table class='table'><thead><tr>";
    if (chkId)
        tabla += "<th>Id</th>";
    if (chkName)
        tabla += "<th>Nombre</th>";
    if (chkEdad)
        tabla += "<th>Edad</th>";
    tabla += "<th>Tipo</th>";
    if (chkPatas)
        tabla += "<th>Patas</th>";
    tabla += "</tr>";
    for (var i = 0; i < MascotasJSON.length; i++) {
        tabla += "<tr>";
        if (chkId)
            tabla += "<td>" + MascotasJSON[i].id + "</td>";
        if (chkName)
            tabla += "<td>" + MascotasJSON[i].nombre + "</td>";
        if (chkEdad)
            tabla += "<td>" + MascotasJSON[i].edad + "</td>";
        tabla += "<td>" + Clases.Tipo[MascotasJSON[i].tipo] + "</td>";
        if (chkPatas)
            tabla += "<td>" + MascotasJSON[i].patas + "</td>";
        tabla += "</tr>";
    }
    tabla += "</table>";
    $('#divTabla').html(tabla);
}

function extraerMascota()
{
    var mascotasString = localStorage.getItem("Mascotas");
    console.log(mascotasString);
}
//# sourceMappingURL=app.js.map