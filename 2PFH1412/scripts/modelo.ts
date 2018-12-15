namespace Clases{

    export enum ladoHeroe{
        Heroe,
        Villano
    }

    export class Usuario{
        public id:number;
        public user:string;
        public pass: string;
        public rol:string;

        constructor(id:number, user:string, pass:string, rol:string){
    
            this.id = id;
            this.user = user;
            this.pass = pass;
            this.rol = rol;
        }

        public toJSON():string{
            let json: string = `{"id":"${this.id}","user":"${this.user}","pass":"${this.pass}","rol":"${this.rol}"}`;
            return json;
        }
    }

    export class Evento{
        public fecha:string;
        public operacion:string;
        public idHeroe:number;
        public aliasHeroe:string;
        public id:number;

        constructor(id:number, idHeroe:number, operacion:string, fecha:string, aliasHeroe:string){
            this.id = id;
            this.idHeroe = idHeroe;
            this.operacion = operacion;
            this.fecha = fecha;
            this.aliasHeroe = aliasHeroe;
        }

        public toJSON():string{
            let json: string = `{"id":"${this.id}","idHeroe":"${this.idHeroe}", "operacion":"${this.operacion}", "fecha":"${this.fecha}", "aliasHeroe":"${this.aliasHeroe}"}`;
            return json;
        }

    }
   
    export abstract class Personaje{
    
            public nombre:string;
            public apellido:string;
            public edad:number;
            public id:number;
    
            constructor(id:number, nombre:string, apellido:string, edad:number){
                this.id = id;
                this.nombre = nombre;
                this.edad = edad;
                this.apellido = apellido;
            }
    
            public toJSON():string{
                let json: string = `{"id":"${this.id}","nombre":"${this.nombre}", "apellido":"${this.apellido}", "edad":${this.edad}}`;
                return json;
            }
    }

    export class Heroe extends Personaje{
        alias:string;
        lado:ladoHeroe;

        public set Alias(v : string) {
            this.alias = v;
        }
        
        
        public get Alias() : string {
            return this.alias;
        }

    
        constructor(id:number, nombre:string, apellido:string, alias:string, edad:number, lado:ladoHeroe){
            super(id, nombre, apellido, edad);
    
            this.lado = lado;
            this.alias = alias;
        }

        public toJSON():string{
            let json: string = `{"id":"${this.id}","nombre":"${this.nombre}","apellido":"${this.apellido}","alias":"${this.alias}", "edad":${this.edad}, "lado":"${this.lado}"}`;
            return json;
        }
    }
}

var datos = new Array();
var idUltimoEvento: number = 0;

function crearUsuarios(): void {
    var userHeroe = new Clases.Usuario(1, "Federico", "cxv823q", "Heroe");
    var userVillano = new Clases.Usuario(2, "Hulk231", "hjkh22", "Villano");
    var userAdmin = new Clases.Usuario(3, "Adm", "hjhg54", "Admin");

    let UsuariosString: string | null = localStorage.getItem("Usuarios");
    let UsuariosJSON: JSON[] = UsuariosString == null ? [] : JSON.parse(UsuariosString);

    UsuariosJSON.push(JSON.parse(userHeroe.toJSON()));
    UsuariosJSON.push(JSON.parse(userVillano.toJSON()));
    UsuariosJSON.push(JSON.parse(userAdmin.toJSON()));

    localStorage.setItem("Usuarios", JSON.stringify(UsuariosJSON));

}

function agregarHeroe(): void {
    let id: number = Number($('#txtId').val());
    //var lado = $("input[name='lado']:checked").parent('label').text();
    let text: String = $("input[name='lado']:checked").parent('label').text();
    let lado: Clases.ladoHeroe;
    let fecha:string = new Date().toLocaleString().toString();
    let alias:string = String($('#txtAlias').val());
    if(text === "Heroe")
    {
        lado = Clases.ladoHeroe.Heroe;
    }
    else
    {
        lado = Clases.ladoHeroe.Villano;
    }
    var nuevoHeroe = new Clases.Heroe(id, String($('#txtNombre').val()), String($('#txtApellido').val()), String($('#txtAlias').val()), Number($('#txtEdad').val()), lado);
    var nuevoEvento = new Clases.Evento(idUltimoEvento += 1, id, "Alta", fecha, alias);

    let HeroesString: string | null = localStorage.getItem("Heroes");
    let EventosString: string | null = localStorage.getItem("Eventos");

    let HeroesJSON: JSON[] = HeroesString == null ? [] : JSON.parse(HeroesString);
    let EventosJSON: JSON[] = EventosString == null ? [] : JSON.parse(EventosString);

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

function agregarHeroe2(): void {

    let id: number = Number($('#txtId2').val());
    //var lado = $("input[name='lado']:checked").parent('label').text();
    let text: String = $("input[name='lado2']:checked").parent('label').text();
    let lado: Clases.ladoHeroe;
    let alias:string = String($('#txtAlias2').val());

    if(text === "Heroe")
    {
        lado = Clases.ladoHeroe.Heroe;
    }
    else
    {
        lado = Clases.ladoHeroe.Villano;
    }
    var nuevoHeroe = new Clases.Heroe(id, String($('#txtNombre2').val()), String($('#txtApellido2').val()), String($('#txtAlias2').val()), Number($('#txtEdad2').val()), lado);
    var nuevoEvento = new Clases.Evento(idUltimoEvento += 1, id, "Modificar", new Date().toLocaleString(), alias);

    let HeroesString: string | null = localStorage.getItem("Heroes");
    let EventosString: string | null = localStorage.getItem("Eventos");

    let HeroesJSON: JSON[] = HeroesString == null ? [] : JSON.parse(HeroesString);
    let EventosJSON: JSON[] = EventosString == null ? [] : JSON.parse(EventosString);
    //let HeroesJSON: Clases.Heroe[] = HeroesString == null ? [] : JSON.parse(HeroesString);

    console.log(nuevoHeroe.toJSON());

    HeroesJSON.push(JSON.parse(nuevoHeroe.toJSON()));
    EventosJSON.push(nuevoEvento);
    console.log(nuevoEvento);

    localStorage.setItem("Eventos", JSON.stringify(EventosJSON));
    localStorage.setItem("Heroes", JSON.stringify(HeroesJSON));

    alert("Heroe modificado!!!");

    mostrarHeroes();

    //limpiarCampos();


    // console.log(nuevoHeroe.toJSON());

}

function eliminarHeroe(): void {

    let id: number = Number($('#txtId2').val());
    let alias:string = String($('#txtAlias2').val());
    var storedHeroes = JSON.parse(localStorage.getItem("Heroes"));
    var nuevoEvento = new Clases.Evento(idUltimoEvento += 1, id, "Eliminar", new Date().toLocaleString(), alias);
    let EventosString: string | null = localStorage.getItem("Eventos");
    let EventosJSON: JSON[] = EventosString == null ? [] : JSON.parse(EventosString);
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
    alert("Heroe eliminado!!!");
    mostrarHeroes();
    limpiarCampos();
}

function eliminarHeroe2(): void {

    var storedHeroes = JSON.parse(localStorage.getItem("Heroes"));
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

function modificarHeroe(): void {

    agregarHeroe2();
    eliminarHeroe2();

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

    let HeroesString: string | null = localStorage.getItem("Heroes");
    let HeroesJSON: Clases.Heroe[] = HeroesString == null ? [] : JSON.parse(HeroesString);
    datos = HeroesJSON;

    let tabla: string = "<table class='table'><thead><tr><th>Id</th><th>Nombre</th><th>Apellido</th><th>Alias</th><th>Edad</th><th>Lado</th></tr>";
    
    for (let i = 0; i < HeroesJSON.length; i++) {
        tabla += "<tr>";
        tabla += "<td id='1' onclick='openForm2("+ HeroesJSON[i].id +");'>" + HeroesJSON[i].id + "</td>";
        tabla += "<td id='2' onclick='openForm2("+ HeroesJSON[i].id +");'>" + HeroesJSON[i].nombre + "</td>";
        tabla += "<td id='3' onclick='openForm2("+ HeroesJSON[i].id +");'>" + HeroesJSON[i].apellido + "</td>";
        tabla += "<td id='4' onclick='openForm2("+ HeroesJSON[i].id +");'>" + HeroesJSON[i].alias + "</td>";
        tabla += "<td id='5' onclick='openForm2("+ HeroesJSON[i].id +");'>" + HeroesJSON[i].edad + "</td>";
        tabla += "<td id='6' onclick='openForm2("+ HeroesJSON[i].id +");'>" + Clases.ladoHeroe[HeroesJSON[i].lado] + "</td>";
        tabla += "</tr>";
    }

    tabla += `</table>`;
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
    for (let i = 0; i < 2; i++) {
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

function filtrarHeroes(lado: number) {
    //console.log(lado);

    let HeroesFiltrados: Array<Clases.Heroe>;

    let HeroesString: string | null = localStorage.getItem("Heroes");

    let HeroesJSON: Clases.Heroe[] = HeroesString == null ? [] : JSON.parse(HeroesString);

    HeroesFiltrados = HeroesJSON.filter(function (Heroe: Clases.Heroe) {

        return Clases.ladoHeroe[Heroe.lado] === Clases.ladoHeroe[lado];

    }

    );
    //console.log(HeroesFiltrados);
    mostrarHeroesPorLado(HeroesFiltrados);

}

function cleanStorage() {
    localStorage.clear();
    alert("LocalStorage Limpio");
}

function mostrarHeroesPorLado(lista: Array<Clases.Heroe>) {


    let tabla: string = "<table class='table'><thead><tr><th>Id</th><th>Nombre</th><th>Apellido</th><th>Alias</th><th>Edad</th><th>Lado</th></tr>";

    if (lista.length == 0) {
        tabla += "<tr><td colspan='6'>No hay Heroes que mostrar</td></tr>";
    }
    else {
        for (let i = 0; i < lista.length; i++) {
            //Clases.ladoHeroe[i]
            tabla += `<tr><td>${lista[i].id}</td><td>${lista[i].nombre}</td><td>${lista[i].apellido}</td><td>${lista[i].alias}</td><td>${lista[i].edad}</td><td>${Clases.ladoHeroe[lista[i].lado]}</td></tr>`;
        }
    }

    tabla += `</table>`;

    $('#divTabla').html(tabla);

}

function promedioDefault() {

    let promedio: number = 0;
    let totalEdades: number;
    let cantidad: number;

    let HeroesString: string | null = localStorage.getItem("Heroes");

    let HeroesJSON: Clases.Heroe[] = HeroesString == null ? [] : JSON.parse(HeroesString);

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

function eventosDefault() {

    let EventosString: string | null = localStorage.getItem("Eventos");
    let EventosJSON: Clases.Evento[] = EventosString == null ? [] : JSON.parse(EventosString);

    if(EventosJSON.length > 0)
    {
        var counted = EventosJSON.reduce(function (allNumbers, number) { 
            if (<any>number in allNumbers) {
              allNumbers[<any>number]++;
            }
            else {
              allNumbers[<any>number] = 1;
            }
            return allNumbers;
          }, {});

            //let mode = Object.keys(counted).reduce((a, b) => counted[a] > counted[b] ? a : b);
            console.log(Object.keys(counted).reduce((a, b) => counted[a] > counted[b] ? a : b));
            let mode = JSON.parse(Object.keys(counted).reduce((a, b) => counted[a] > counted[b] ? a : b));

            $('#txtEventos').val(mode.aliasHeroe);
    }
    else
    {
        $('#txtEventos').val("No hay eventos");
    }

}


function calcularPromedio() {

    let promedio: number = 0;
    let totalEdades: number;
    let cantidad: number;

    let lado: number = Number($('#cmbFiltro').val());

    let HeroesFiltrados: Array<Clases.Heroe>;

    let HeroesString: string | null = localStorage.getItem("Heroes");

    let HeroesJSON: Clases.Heroe[] = HeroesString == null ? [] : JSON.parse(HeroesString);

    HeroesFiltrados = HeroesJSON.filter(function (Heroe: Clases.Heroe) {

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


function viejoDefault() {

    let HeroesString: string | null = localStorage.getItem("Heroes");

    let HeroesJSON: Clases.Heroe[] = HeroesString == null ? [] : JSON.parse(HeroesString);

    let masViejo;

    //array.reduce(function(max, x) { return (x.val > max) ? x.val : max; }, 0)
    
    if(HeroesJSON.length > 0)
    {
        masViejo = HeroesJSON.reduce((a, b) => a.edad > b.edad ? a : b);
        $('#txtViejo').val(masViejo.nombre + " " + masViejo.apellido);
    }
    else
    {
        $('#txtViejo').val("No hay personajes");
    }

    
}

function calcularViejo() {

    let lado: number = Number($('#cmbFiltro').val());

    let HeroesFiltrados: Array<Clases.Heroe>;

    let HeroesString: string | null = localStorage.getItem("Heroes");

    let HeroesJSON: Clases.Heroe[] = HeroesString == null ? [] : JSON.parse(HeroesString);

    HeroesFiltrados = HeroesJSON.filter(function (Heroe: Clases.Heroe) {

        return Clases.ladoHeroe[Heroe.lado] === Clases.ladoHeroe[lado];

    });

    //array.reduce(function(max, x) { return (x.val > max) ? x.val : max; }, 0)
    let masViejo = HeroesFiltrados.reduce((a, b) => a.edad > b.edad ? a : b);

    console.log(masViejo);

    $('#txtViejo').val(masViejo.nombre + " " + masViejo.apellido);
}


function mapearCampos() {

        let chkId: boolean = (<HTMLInputElement> $('#chkId')[0]).checked;
        let chkName: boolean = (<HTMLInputElement> $('#chkName')[0]).checked;
        let chkApellido: boolean = (<HTMLInputElement> $('#chkApellido')[0]).checked;
        let chkLado: boolean = (<HTMLInputElement> $('#chkLado')[0]).checked;
        let chkEdad: boolean = (<HTMLInputElement> $('#chkEdad')[0]).checked;
        let chkAlias: boolean = (<HTMLInputElement> $('#chkAlias')[0]).checked;

        //console.log(chkId);
        
    
        let HeroesString: string | null = localStorage.getItem("Heroes");
    
        let HeroesJSON: Clases.Heroe[] = HeroesString == null ? [] : JSON.parse(HeroesString);
    
        let tabla: string = "<table class='table'><thead><tr>";

        if(chkId)
        tabla += "<th>Id</th>";
        if(chkName)
        tabla += "<th>Nombre</th>";
        if(chkApellido)
        tabla += "<th>Apellido</th>";
        if(chkAlias)
        tabla += "<th>Alias</th>";  
        if(chkEdad)
        tabla+= "<th>Edad</th>"; 
        if(chkLado)
        tabla += "<th>Lado</th>";
        tabla += "</tr>";
    
        for (let i = 0; i < HeroesJSON.length; i++) {
    
            tabla += `<tr>`;
            if(chkId)
            tabla += `<td>${HeroesJSON[i].id}</td>`;
            if(chkName)
            tabla += `<td>${HeroesJSON[i].nombre}</td>`;
            if(chkApellido)
            tabla += `<td>${HeroesJSON[i].apellido}</td>`;
            if(chkAlias)
            tabla += `<td>${HeroesJSON[i].alias}</td>`;
            if(chkEdad)
            tabla+= `<td>${HeroesJSON[i].edad}</td>`;
            if(chkLado)
            tabla += `<td>${Clases.ladoHeroe[HeroesJSON[i].lado]}</td>`;
            tabla += `</tr>`;             
    
        }
    
        tabla += `</table>`;
    
        $('#divTabla').html(tabla);
    
    }

