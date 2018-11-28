//##############
/// <reference path="vista.ts"/>
//##############

namespace Clases{

    export enum tipoHeroe{
        Xmen,
        Avenger
    }
   
    export abstract class Personaje{
    
            public nombre:string;
            public edad:number;
            public id:number;
    
            constructor(id:number, nombre:string, edad:number){
                this.id = id;
                this.nombre = nombre;
                this.edad = edad;
            }
    
            public toJSON():string{
                let json: string = `{"nombre":"${this.nombre}", "edad":${this.edad}}`;
                return json;
            }
    }

    export class Heroe extends Personaje{
        poder:string;
        tipo:tipoHeroe;

        public set Poder(v : string) {
            this.poder = v;
        }
        
        
        public get Poder() : string {
            return this.poder;
        }

    
        constructor(id:number, nombre:string, edad:number, poder:string, tipo:tipoHeroe){
            super(id, nombre, edad);
    
            this.tipo = tipo;
            this.poder = poder;
        }

        public toJSON():string{
            let json: string = `{"id":"${this.id}","nombre":"${this.nombre}", "edad":${this.edad}, "poder":"${this.Poder}", "tipo":"${this.tipo}"}`;
            return json;
        }
    }
}


function agregarHeroe(): void {
    let id: number = Number($('#txtId').val());
    let tipo: Clases.tipoHeroe = Number($('#selectTipo').val());
    let nuevoHeroe = new Clases.Heroe(id, String($('#txtNombre').val()), Number($('#txtEdad').val()), String($('#txtPoder').val()), tipo);

    let HeroesString: string | null = localStorage.getItem("Heroes");

    let HeroesJSON: JSON[] = HeroesString == null ? [] : JSON.parse(HeroesString);

    console.log(nuevoHeroe.toJSON());

    HeroesJSON.push(JSON.parse(nuevoHeroe.toJSON()));

    localStorage.setItem("Heroes", JSON.stringify(HeroesJSON));

    alert("Heroe guardado!!!");

    mostrarHeroes();

    //limpiarCampos();


    // console.log(nuevoHeroe.toJSON());

}

function eliminarHeroe(): void {

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

function modificarHeroe(): void {

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

    let HeroesString: string | null = localStorage.getItem("Heroes");

    let HeroesJSON: Clases.Heroe[] = HeroesString == null ? [] : JSON.parse(HeroesString);

    let tabla: string = "<table class='table'><thead><tr><th>Id</th><th>Nombre</th><th>Edad</th><th>Tipo</th><th>Poderes</th></tr>";



    for (let i = 0; i < HeroesJSON.length; i++) {

        tabla += `<tr><td>${HeroesJSON[i].id}</td><td>${HeroesJSON[i].nombre}</td><td>${HeroesJSON[i].edad}</td><td>${Clases.tipoHeroe[HeroesJSON[i].tipo]}</td><td>${HeroesJSON[i].poder}</td></tr>`;

    }

    tabla += `</table>`;

    $('#divTabla').html(tabla);

}

function cargarTipos() {
    /* var paises = data.map(function(p){
         return p.pais;
     })
     .unique()
     .sort();
 */
    for (let i = 0; i < 2; i++) {
        $("#cmbFiltro").append('<option value="' + i + '">' + Clases.tipoHeroe[i] + '</option>');
    }

    for (let i = 0; i < Object.keys(Clases.tipoHeroe).length / 2; i++) {
        $("#selectTipo").append('<option value="' + i + '">' + Clases.tipoHeroe[i] + '</option>');
    }

    $.each(Clases.tipoHeroe, function (value, tipo) {
    //     /* $("#cmbFiltro").append('<option value="'+value+'">'+tipo+'</option>');
    //          //console.log(x);
    //          i++;
    //          */

    });
}

function filtrarHeroes(tipo: number) {
    //console.log(tipo);

    let HeroesFiltrados: Array<Clases.Heroe>;

    let HeroesString: string | null = localStorage.getItem("Heroes");

    let HeroesJSON: Clases.Heroe[] = HeroesString == null ? [] : JSON.parse(HeroesString);

    HeroesFiltrados = HeroesJSON.filter(function (Heroe: Clases.Heroe) {

        return Clases.tipoHeroe[Heroe.tipo] === Clases.tipoHeroe[tipo];

    }

    );
    //console.log(HeroesFiltrados);
    mostrarHeroesPorTipo(HeroesFiltrados);

}

function cleanStorage() {
    localStorage.clear();
    alert("LocalStorage Limpio");
}

function mostrarHeroesPorTipo(lista: Array<Clases.Heroe>) {


    let tabla: string = "<table class='table'><thead><tr><th>Id</th><th>Nombre</th><th>Edad</th><th>Tipo</th><th>Poderes</th></tr>";

    if (lista.length == 0) {
        tabla += "<tr><td colspan='4'>No hay Heroes que mostrar</td></tr>";
    }
    else {


        for (let i = 0; i < lista.length; i++) {

            tabla += `<tr><td>${lista[i].id}</td><td>${lista[i].nombre}</td><td>${lista[i].edad}</td>${Clases.tipoHeroe[i]}</td><td>${lista[i].poder}</td></tr>`;

        }

    }

    tabla += `</table>`;

    $('#divTabla').html(tabla);

}

function calcularPromedio() {

    let promedio: number = 0;
    let totalEdades: number;
    let cantidad: number;

    let tipo: number = Number($('#cmbFiltro').val());



    let HeroesFiltrados: Array<Clases.Heroe>;

    let HeroesString: string | null = localStorage.getItem("Heroes");

    let HeroesJSON: Clases.Heroe[] = HeroesString == null ? [] : JSON.parse(HeroesString);

    HeroesFiltrados = HeroesJSON.filter(function (Heroe: Clases.Heroe) {

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

        let chkId: boolean = (<HTMLInputElement> $('#chkId')[0]).checked;
        let chkName: boolean = (<HTMLInputElement> $('#chkName')[0]).checked;
        let chkEdad: boolean = (<HTMLInputElement> $('#chkEdad')[0]).checked;
        let chkPoderes: boolean = (<HTMLInputElement> $('#chkPoderes')[0]).checked;

        //console.log(chkId);
        
    
        let HeroesString: string | null = localStorage.getItem("Heroes");
    
        let HeroesJSON: Clases.Heroe[] = HeroesString == null ? [] : JSON.parse(HeroesString);
    
        let tabla: string = "<table class='table'><thead><tr>";

        if(chkId)
        tabla += "<th>Id</th>";
        if(chkName)
        tabla += "<th>Nombre</th>";
        if(chkEdad)
        tabla+= "<th>Edad</th>";
        tabla += "<th>Tipo</th>";
        if(chkPoderes)
        tabla += "<th>Poderes</th>";
        tabla += "</tr>";   
    
        for (let i = 0; i < HeroesJSON.length; i++) {
    
            tabla += `<tr>`;
            if(chkId)
            tabla += `<td>${HeroesJSON[i].id}</td>`;
            if(chkName)
            tabla += `<td>${HeroesJSON[i].nombre}</td>`;
            if(chkEdad)
            tabla+= `<td>${HeroesJSON[i].edad}</td>`;
            tabla += `<td>${Clases.tipoHeroe[HeroesJSON[i].tipo]}</td>`;
            if(chkPoderes)
            tabla += `<td>${HeroesJSON[i].poder}</td>`;
            tabla += `</tr>`;             
    
        }
    
        tabla += `</table>`;
    
        $('#divTabla').html(tabla);
    
    }