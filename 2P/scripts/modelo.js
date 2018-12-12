var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Clases;
(function (Clases) {
    var ladoHeroe;
    (function (ladoHeroe) {
        ladoHeroe[ladoHeroe["Heroe"] = 0] = "Heroe";
        ladoHeroe[ladoHeroe["Villano"] = 1] = "Villano";
    })(ladoHeroe = Clases.ladoHeroe || (Clases.ladoHeroe = {}));
    var Evento = /** @class */ (function () {
        function Evento(id, idHeroe, operacion, fecha) {
            this.id = id;
            this.idHeroe = idHeroe;
            this.operacion = operacion;
            this.fecha = fecha;
        }
        Evento.prototype.toJSON = function () {
            var json = "{\"id\":\"" + this.id + "\",\"idHeroe\":\"" + this.idHeroe + "\", \"operacion\":\"" + this.operacion + "\", \"fecha\":\"" + this.fecha + "\"}";
            return json;
        };
        return Evento;
    }());
    Clases.Evento = Evento;
    var Personaje = /** @class */ (function () {
        function Personaje(id, nombre, apellido, edad) {
            this.id = id;
            this.nombre = nombre;
            this.edad = edad;
            this.apellido = apellido;
        }
        Personaje.prototype.toJSON = function () {
            var json = "{\"id\":\"" + this.id + "\",\"nombre\":\"" + this.nombre + "\", \"apellido\":\"" + this.apellido + "\", \"edad\":" + this.edad + "}";
            return json;
        };
        return Personaje;
    }());
    Clases.Personaje = Personaje;
    var Heroe = /** @class */ (function (_super) {
        __extends(Heroe, _super);
        function Heroe(id, nombre, apellido, alias, edad, lado) {
            var _this = _super.call(this, id, nombre, apellido, edad) || this;
            _this.lado = lado;
            _this.alias = alias;
            return _this;
        }
        Object.defineProperty(Heroe.prototype, "Alias", {
            get: function () {
                return this.alias;
            },
            set: function (v) {
                this.alias = v;
            },
            enumerable: true,
            configurable: true
        });
        Heroe.prototype.toJSON = function () {
            var json = "{\"id\":\"" + this.id + "\",\"nombre\":\"" + this.nombre + "\",\"apellido\":\"" + this.apellido + "\",\"alias\":\"" + this.alias + "\", \"edad\":" + this.edad + ", \"lado\":\"" + this.lado + "\"}";
            return json;
        };
        return Heroe;
    }(Personaje));
    Clases.Heroe = Heroe;
})(Clases || (Clases = {}));
var datos = new Array();
var idUltimoEvento = 0;
function agregarHeroe() {
    var id = Number($('#txtId').val());
    //var lado = $("input[name='lado']:checked").parent('label').text();
    var text = $("input[name='lado']:checked").parent('label').text();
    var lado;
    var fecha = new Date().toLocaleString().toString();
    if (text === "Heroe") {
        lado = Clases.ladoHeroe.Heroe;
    }
    else {
        lado = Clases.ladoHeroe.Villano;
    }
    var nuevoHeroe = new Clases.Heroe(id, String($('#txtNombre').val()), String($('#txtApellido').val()), String($('#txtAlias').val()), Number($('#txtEdad').val()), lado);
    var nuevoEvento = new Clases.Evento(idUltimoEvento += 1, id, "Alta", fecha);
    var HeroesString = localStorage.getItem("Heroes");
    var EventosString = localStorage.getItem("Eventos");
    var HeroesJSON = HeroesString == null ? [] : JSON.parse(HeroesString);
    var EventosJSON = EventosString == null ? [] : JSON.parse(EventosString);
    console.log(nuevoEvento.toJSON());
    console.log(nuevoHeroe.toJSON());
    HeroesJSON.push(JSON.parse(nuevoHeroe.toJSON()));
    EventosJSON.push(nuevoEvento);
    localStorage.setItem("Heroes", JSON.stringify(HeroesJSON));
    localStorage.setItem("Eventos", JSON.stringify(EventosJSON));
    alert("Heroe guardado!!!");
    mostrarHeroes();
    //limpiarCampos();
    // console.log(nuevoHeroe.toJSON());
}
function agregarHeroe2() {
    var id = Number($('#txtId2').val());
    //var lado = $("input[name='lado']:checked").parent('label').text();
    var text = $("input[name='lado2']:checked").parent('label').text();
    var lado;
    if (text === "Heroe") {
        lado = Clases.ladoHeroe.Heroe;
    }
    else {
        lado = Clases.ladoHeroe.Villano;
    }
    var nuevoHeroe = new Clases.Heroe(id, String($('#txtNombre2').val()), String($('#txtApellido2').val()), String($('#txtAlias2').val()), Number($('#txtEdad2').val()), lado);
    var nuevoEvento = new Clases.Evento(idUltimoEvento += 1, id, "Modificar", new Date().toLocaleString());
    var HeroesString = localStorage.getItem("Heroes");
    var EventosString = localStorage.getItem("Eventos");
    var HeroesJSON = HeroesString == null ? [] : JSON.parse(HeroesString);
    var EventosJSON = EventosString == null ? [] : JSON.parse(EventosString);
    //let HeroesJSON: Clases.Heroe[] = HeroesString == null ? [] : JSON.parse(HeroesString);
    console.log(nuevoHeroe.toJSON());
    HeroesJSON.push(JSON.parse(nuevoHeroe.toJSON()));
    EventosJSON.push(nuevoEvento);
    localStorage.setItem("Eventos", JSON.stringify(EventosJSON));
    localStorage.setItem("Heroes", JSON.stringify(HeroesJSON));
    alert("Heroe modificado!!!");
    //mostrarHeroes();
    //limpiarCampos();
    // console.log(nuevoHeroe.toJSON());
}
function eliminarHeroe() {
    var id = Number($('#txtId2').val());
    var storedHeroes = JSON.parse(localStorage.getItem("Heroes"));
    var nuevoEvento = new Clases.Evento(idUltimoEvento += 1, id, "Eliminar", new Date().toLocaleString());
    var EventosString = localStorage.getItem("Eventos");
    var EventosJSON = EventosString == null ? [] : JSON.parse(EventosString);
    EventosJSON.push(nuevoEvento);
    // here you need to make a loop to find the index of item to delete
    var indexToRemove = Number($('#txtId2').val());
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
    agregarHeroe2();
    eliminarHeroe();
    mostrarHeroes();
    limpiarCampos();
}
function limpiarCampos() {
    $('#txtId').val("");
    $('#txtNombre').val("");
    $('#txtApellido').val("");
    $('#txtAlias').val("");
    $('#txtEdad').val("");
    $('#txtId2').val("");
    $('#txtNombre2').val("");
    $('#txtApellido2').val("");
    $('#txtAlias2').val("");
    $('#txtEdad2').val("");
    //$('#selectlado').val(0);
    //$('#txtId').focus();
}
function mostrarHeroes() {
    var HeroesString = localStorage.getItem("Heroes");
    var HeroesJSON = HeroesString == null ? [] : JSON.parse(HeroesString);
    datos = HeroesJSON;
    var tabla = "<table class='table'><thead><tr><th>Id</th><th>Nombre</th><th>Apellido</th><th>Alias</th><th>Edad</th><th>Lado</th></tr>";
    for (var i = 0; i < HeroesJSON.length; i++) {
        tabla += "<tr>";
        tabla += "<td id='1' onclick='openForm2(" + HeroesJSON[i].id + ");'>" + HeroesJSON[i].id + "</td>";
        tabla += "<td id='2' onclick='openForm2(" + HeroesJSON[i].id + ");'>" + HeroesJSON[i].nombre + "</td>";
        tabla += "<td id='3' onclick='openForm2(" + HeroesJSON[i].id + ");'>" + HeroesJSON[i].apellido + "</td>";
        tabla += "<td id='4' onclick='openForm2(" + HeroesJSON[i].id + ");'>" + HeroesJSON[i].alias + "</td>";
        tabla += "<td id='5' onclick='openForm2(" + HeroesJSON[i].id + ");'>" + HeroesJSON[i].edad + "</td>";
        tabla += "<td id='6' onclick='openForm2(" + HeroesJSON[i].id + ");'>" + Clases.ladoHeroe[HeroesJSON[i].lado] + "</td>";
        tabla += "</tr>";
    }
    tabla += "</table>";
    $('#divTabla').html(tabla);
    // var c2 = document.getElementById("divTabla").children.length;
    // console.log(c2);
    // var c = document.getElementById("divTabla").children;
    // c[2].innerHTML = tabla;
}
function cargarLados() {
    /* var paises = HeroesJSON.map(function(p){
         return p.pais;
     })
     .unique()
     .sort();
 */
    for (var i = 0; i < 2; i++) {
        $("#cmbFiltro").append('<option value="' + i + '">' + Clases.ladoHeroe[i] + '</option>');
    }
    // for (let i = 0; i < Object.keys(Clases.ladoHeroe).length / 2; i++) {
    //     $("#selectlado").append('<option value="' + i + '">' + Clases.ladoHeroe[i] + '</option>');
    // }
    $.each(Clases.ladoHeroe, function (value, lado) {
        //     /* $("#cmbFiltro").append('<option value="'+value+'">'+lado+'</option>');
        //          //console.log(x);
        //          i++;
        //          */
    });
}
function filtrarHeroes(lado) {
    //console.log(lado);
    var HeroesFiltrados;
    var HeroesString = localStorage.getItem("Heroes");
    var HeroesJSON = HeroesString == null ? [] : JSON.parse(HeroesString);
    HeroesFiltrados = HeroesJSON.filter(function (Heroe) {
        return Clases.ladoHeroe[Heroe.lado] === Clases.ladoHeroe[lado];
    });
    //console.log(HeroesFiltrados);
    mostrarHeroesPorLado(HeroesFiltrados);
}
function cleanStorage() {
    localStorage.clear();
    alert("LocalStorage Limpio");
}
function mostrarHeroesPorLado(lista) {
    var tabla = "<table class='table'><thead><tr><th>Id</th><th>Nombre</th><th>Apellido</th><th>Alias</th><th>Edad</th><th>Lado</th></tr>";
    if (lista.length == 0) {
        tabla += "<tr><td colspan='6'>No hay Heroes que mostrar</td></tr>";
    }
    else {
        for (var i = 0; i < lista.length; i++) {
            //Clases.ladoHeroe[i]
            tabla += "<tr><td>" + lista[i].id + "</td><td>" + lista[i].nombre + "</td><td>" + lista[i].apellido + "</td><td>" + lista[i].alias + "</td><td>" + lista[i].edad + "</td><td>" + Clases.ladoHeroe[lista[i].lado] + "</td></tr>";
        }
    }
    tabla += "</table>";
    $('#divTabla').html(tabla);
}
function promedioDefault() {
    var promedio = 0;
    var totalEdades;
    var cantidad;
    var HeroesString = localStorage.getItem("Heroes");
    var HeroesJSON = HeroesString == null ? [] : JSON.parse(HeroesString);
    totalEdades = HeroesJSON.reduce(function (anterior, actual) {
        return anterior += actual.edad;
    }, 0);
    console.log(totalEdades);
    cantidad = HeroesJSON.length;
    console.log(cantidad);
    if (cantidad != 0) {
        promedio = totalEdades / cantidad;
    }
    $('#txtPromedio').val(promedio);
}
function viejoDefault() {
    var HeroesString = localStorage.getItem("Heroes");
    var HeroesJSON = HeroesString == null ? [] : JSON.parse(HeroesString);
    //array.reduce(function(max, x) { return (x.val > max) ? x.val : max; }, 0)
    var masViejo = HeroesJSON.reduce(function (a, b) { return a.edad > b.edad ? a : b; });
    console.log(masViejo);
    $('#txtViejo').val(masViejo.nombre + " " + masViejo.apellido);
}
// function eventosDefault() {
//         let EventosString: string | null = localStorage.getItem("Eventos");
//         let EventosJSON: Clases.Evento[] = EventosString == null ? [] : JSON.parse(EventosString);
//         //array.reduce(function(max, x) { return (x.val > max) ? x.val : max; }, 0)
//         let masEventos = EventosJSON.reduce((a, b) => a.idHeroe > b.idHeroe ? a : b);
//         console.log(EventosJSON.length);
//         console.log(masEventos);
//         $('#txtEventos').val(masEventos.idHeroe + " " + masEventos.idHeroe);
//     }
function eventosDefault() {
    var EventosString = localStorage.getItem("Eventos");
    var EventosJSON = EventosString == null ? [] : JSON.parse(EventosString);
    var counted = EventosJSON.reduce(function (allNumbers, number) {
        if (number in allNumbers) {
            allNumbers[number]++;
        }
        else {
            allNumbers[number] = 1;
        }
        return allNumbers;
    }, {});
    //let mode = Object.keys(counted).reduce((a, b) => counted[a] > counted[b] ? a : b);
    console.log(Object.keys(counted).reduce(function (a, b) { return counted[a] > counted[b] ? a : b; }));
    var mode = JSON.parse(Object.keys(counted).reduce(function (a, b) { return counted[a] > counted[b] ? a : b; }));
    $('#txtEventos').val(mode.idHeroe);
}
function calcularPromedio() {
    var promedio = 0;
    var totalEdades;
    var cantidad;
    var lado = Number($('#cmbFiltro').val());
    var HeroesFiltrados;
    var HeroesString = localStorage.getItem("Heroes");
    var HeroesJSON = HeroesString == null ? [] : JSON.parse(HeroesString);
    HeroesFiltrados = HeroesJSON.filter(function (Heroe) {
        return Clases.ladoHeroe[Heroe.lado] === Clases.ladoHeroe[lado];
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
function calcularViejo() {
    var lado = Number($('#cmbFiltro').val());
    var HeroesFiltrados;
    var HeroesString = localStorage.getItem("Heroes");
    var HeroesJSON = HeroesString == null ? [] : JSON.parse(HeroesString);
    HeroesFiltrados = HeroesJSON.filter(function (Heroe) {
        return Clases.ladoHeroe[Heroe.lado] === Clases.ladoHeroe[lado];
    });
    //array.reduce(function(max, x) { return (x.val > max) ? x.val : max; }, 0)
    var masViejo = HeroesFiltrados.reduce(function (a, b) { return a.edad > b.edad ? a : b; });
    console.log(masViejo);
    $('#txtViejo').val(masViejo.nombre + " " + masViejo.apellido);
}
function mapearCampos() {
    var chkId = $('#chkId')[0].checked;
    var chkName = $('#chkName')[0].checked;
    var chkApellido = $('#chkApellido')[0].checked;
    var chkLado = $('#chkLado')[0].checked;
    var chkEdad = $('#chkEdad')[0].checked;
    var chkAlias = $('#chkAlias')[0].checked;
    //console.log(chkId);
    var HeroesString = localStorage.getItem("Heroes");
    var HeroesJSON = HeroesString == null ? [] : JSON.parse(HeroesString);
    var tabla = "<table class='table'><thead><tr>";
    if (chkId)
        tabla += "<th>Id</th>";
    if (chkName)
        tabla += "<th>Nombre</th>";
    if (chkApellido)
        tabla += "<th>Apellido</th>";
    if (chkAlias)
        tabla += "<th>Alias</th>";
    if (chkEdad)
        tabla += "<th>Edad</th>";
    if (chkLado)
        tabla += "<th>Lado</th>";
    tabla += "</tr>";
    for (var i = 0; i < HeroesJSON.length; i++) {
        tabla += "<tr>";
        if (chkId)
            tabla += "<td>" + HeroesJSON[i].id + "</td>";
        if (chkName)
            tabla += "<td>" + HeroesJSON[i].nombre + "</td>";
        if (chkApellido)
            tabla += "<td>" + HeroesJSON[i].apellido + "</td>";
        if (chkAlias)
            tabla += "<td>" + HeroesJSON[i].alias + "</td>";
        if (chkEdad)
            tabla += "<td>" + HeroesJSON[i].edad + "</td>";
        if (chkLado)
            tabla += "<td>" + Clases.ladoHeroe[HeroesJSON[i].lado] + "</td>";
        tabla += "</tr>";
    }
    tabla += "</table>";
    $('#divTabla').html(tabla);
}
