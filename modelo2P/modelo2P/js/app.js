///<reference path="heroe.ts"/>
$(function () {
    // localStorage.clear();
    cargarTipos();
    mostrarHeroes();
    $('#cmbFiltro').change(function () {
        //  filtrarHeroes(this.value);
    });
    $('#chkId').change(mapearCampos);
    $('#chkName').change(mapearCampos);
    $('#chkEdad').change(mapearCampos);
    $('#chkPoderes').change(mapearCampos);
});
function agregarHeroe() {
    var id = Number($('#txtId').val());
    var tipo = Number($('#selectTipo').val());
    var nuevoHeroe = new Clases.Heroe(id, String($('#txtNombre').val()), Number($('#txtEdad').val()), String($('#txtPoder').val()), tipo);
    var HeroesString = localStorage.getItem("Heroes");
    var HeroesJSON = HeroesString == null ? [] : JSON.parse(HeroesString);
    console.log(nuevoHeroe.toJSON());
    HeroesJSON.push(JSON.parse(nuevoHeroe.toJSON()));
    localStorage.setItem("Heroes", JSON.stringify(HeroesJSON));
    alert("Heroe guardado!!!");
    mostrarHeroes();
    //limpiarCampos();
    // console.log(nuevoHeroe.toJSON());
}
function eliminarHeroe() {
    var storedHeroes = JSON.parse(localStorage.getItem("Heroes"));
    // here you need to make a loop to find the index of item to delete
    var indexToRemove = Number($('#txtId').val());
    //remove item selected, second parameter is the number of items to delete 
    $.each(storedHeroes, function (index, obj) {
        if (obj.id == indexToRemove) {
            storedHeroes.splice(index, 1);
            console.log(storedHeroes);
            localStorage["Heroes"] = JSON.stringify(storedHeroes);
            return false;
        }
    });
    mostrarHeroes();
    limpiarCampos();
}
function modificarHeroe() {
    agregarHeroe();
    eliminarHeroe();
    mostrarHeroes();
    limpiarCampos();
}
function limpiarCampos() {
    $('#txtId').val("");
    $('#txtEdad').val("");
    $('#txtPoderes').val("");
    $('#selectTipo').val(0);
    $('#txtId').focus();
}
function mostrarHeroes() {
    var HeroesString = localStorage.getItem("Heroes");
    var HeroesJSON = HeroesString == null ? [] : JSON.parse(HeroesString);
    var tabla = "<table class='table'><thead><tr><th>Id</th><th>Nombre</th><th>Edad</th><th>Tipo</th><th>Poderes</th></tr>";
    for (var i = 0; i < HeroesJSON.length; i++) {
        tabla += "<tr><td>" + HeroesJSON[i].id + "</td><td>" + HeroesJSON[i].nombre + "</td><td>" + HeroesJSON[i].edad + "</td><td>" + Clases.tipoHeroe[HeroesJSON[i].tipo] + "</td><td>" + HeroesJSON[i].poder + "</td></tr>";
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
    for (var i = 0; i < 2; i++) {
        $("#cmbFiltro").append('<option value="' + i + '">' + Clases.tipoHeroe[i] + '</option>');
    }
    for (var i = 0; i < Object.keys(Clases.tipoHeroe).length / 2; i++) {
        $("#selectTipo").append('<option value="' + i + '">' + Clases.tipoHeroe[i] + '</option>');
    }
    $.each(Clases.tipoHeroe, function (value, tipo) {
        //     /* $("#cmbFiltro").append('<option value="'+value+'">'+tipo+'</option>');
        //          //console.log(x);
        //          i++;
        //          */
    });
}
function filtrarHeroes(tipo) {
    //console.log(tipo);
    var HeroesFiltrados;
    var HeroesString = localStorage.getItem("Heroes");
    var HeroesJSON = HeroesString == null ? [] : JSON.parse(HeroesString);
    HeroesFiltrados = HeroesJSON.filter(function (Heroe) {
        return Clases.tipoHeroe[Heroe.tipo] === Clases.tipoHeroe[tipo];
    });
    //console.log(HeroesFiltrados);
    mostrarHeroesPorTipo(HeroesFiltrados);
}
function cleanStorage() {
    localStorage.clear();
    alert("LocalStorage Limpio");
}
function mostrarHeroesPorTipo(lista) {
    var tabla = "<table class='table'><thead><tr><th>Id</th><th>Nombre</th><th>Edad</th><th>Tipo</th><th>Poderes</th></tr>";
    if (lista.length == 0) {
        tabla += "<tr><td colspan='4'>No hay Heroes que mostrar</td></tr>";
    }
    else {
        for (var i = 0; i < lista.length; i++) {
            tabla += "<tr><td>" + lista[i].id + "</td><td>" + lista[i].nombre + "</td><td>" + lista[i].edad + "</td>" + Clases.tipoHeroe[i] + "</td><td>" + lista[i].poder + "</td></tr>";
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
    var HeroesFiltrados;
    var HeroesString = localStorage.getItem("Heroes");
    var HeroesJSON = HeroesString == null ? [] : JSON.parse(HeroesString);
    HeroesFiltrados = HeroesJSON.filter(function (Heroe) {
        return Clases.tipoHeroe[Heroe.tipo] === Clases.tipoHeroe[tipo];
    });
    totalEdades = HeroesFiltrados.reduce(function (anterior, actual) {
        return anterior += actual.edad;
    }, 0);
    console.log(totalEdades);
    cantidad = HeroesFiltrados.length;
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
    var chkPoderes = $('#chkPoderes')[0].checked;
    //console.log(chkId);
    var HeroesString = localStorage.getItem("Heroes");
    var HeroesJSON = HeroesString == null ? [] : JSON.parse(HeroesString);
    var tabla = "<table class='table'><thead><tr>";
    if (chkId)
        tabla += "<th>Id</th>";
    if (chkName)
        tabla += "<th>Nombre</th>";
    if (chkEdad)
        tabla += "<th>Edad</th>";
    tabla += "<th>Tipo</th>";
    if (chkPoderes)
        tabla += "<th>Poderes</th>";
    tabla += "</tr>";
    for (var i = 0; i < HeroesJSON.length; i++) {
        tabla += "<tr>";
        if (chkId)
            tabla += "<td>" + HeroesJSON[i].id + "</td>";
        if (chkName)
            tabla += "<td>" + HeroesJSON[i].nombre + "</td>";
        if (chkEdad)
            tabla += "<td>" + HeroesJSON[i].edad + "</td>";
        tabla += "<td>" + Clases.tipoHeroe[HeroesJSON[i].tipo] + "</td>";
        if (chkPoderes)
            tabla += "<td>" + HeroesJSON[i].poder + "</td>";
        tabla += "</tr>";
    }
    tabla += "</table>";
    $('#divTabla').html(tabla);
}
