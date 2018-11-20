$(function () {
    cargarTipos();

    mostrarHeroes();

    $('#cmbFiltro').change(function () {
        filtrarHeroes(this.value);
    });

    //agregar al evento change de los 4 checkbox, el manejador "mapearCampos"



});

function agregarHeroe(): void {
    let id: number = Number($('#txtId').val());
    let tipo: Clases.tipoHeroe = Number($('#selectTipo').val());
    //crear heroe(nuevoHeroe) en base a los datos del DOM
    

    let HeroesString: string | null = localStorage.getItem("Heroes");

    let HeroesJSON: JSON[] = HeroesString == null ? [] : JSON.parse(HeroesString);

    console.log(nuevoHeroe.toJSON());
//agregar el nuevo heroe a HeroesJSON

//guardar HeroesJSON en localStorage con el nombre "Heroes"


    alert("Heroe guardado!!!");

    mostrarHeroes();

    limpiarCampos();

}

function limpiarCampos() {
    $('#txtNombre').val("");
    $('#txtId').val("");
    $('#txtEdad').val("");
    $('#txtPoder').val("");
    $('#selectTipo').val(0);

    $('#txtId').focus();
}

function mostrarHeroes() {

    let HeroesString: string | null = localStorage.getItem("Heroes");

    let HeroesJSON: Clases.Heroe[] = HeroesString == null ? [] : JSON.parse(HeroesString);

    let tabla: string = "<table class='table'><thead><tr><th>Id</th><th>Nombre</th><th>Edad</th><th>Tipo</th><th>Poder</th></tr>";



    for (let i = 0; i < HeroesJSON.length; i++) {

        tabla += `<tr><td>${HeroesJSON[i].id}</td><td>${HeroesJSON[i].nombre}</td><td>${HeroesJSON[i].edad}</td><td>${Clases.tipoHeroe[HeroesJSON[i].tipo]}</td><td>${HeroesJSON[i].poder_principal}</td></tr>`;

    }

    tabla += `</table>`;

    $('#divTabla').html(tabla);

}

function cargarTipos() {

    for (let i = 0; i < Object.keys(Clases.tipoHeroe).length / 2; i++) {
        $("#cmbFiltro").append('<option value="' + i + '">' + Clases.tipoHeroe[i] + '</option>');
    }

    for (let i = 0; i < Object.keys(Clases.tipoHeroe).length / 2; i++) {
        $("#selectTipo").append('<option value="' + i + '">' + Clases.tipoHeroe[i] + '</option>');
    }
}

function filtrarHeroes(tipo: number) {

    let heroesFiltrados: Array<Clases.Heroe>;

    let HeroesString: string | null = localStorage.getItem("Heroes");

    let HeroesJSON: Clases.Heroe[] = HeroesString == null ? [] : JSON.parse(HeroesString);

    //en "heroesFiltrados", aplicar el filtro por tipo.
    //AYUDA. Usar el siguiente codigo: Clases.tipoHeroe[Heroe.tipo] === Clases.tipoHeroe[tipo]

    mostrarHeroesPorTipo(heroesFiltrados);

}

function cleanStorage() {
    localStorage.clear();
    alert("LocalStorage Limpio");
}

function mostrarHeroesPorTipo(lista: Array<Clases.Heroe>) {

    //en caso de disponer de tiempo. arreglar la linea de abajo para que responda a los checkbox
    let tabla: string = "<table class='table'><thead><tr><th>Id</th><th>Nombre</th><th>Edad</th><th>Tipo</th><th>Poder</th></tr>";

    if (lista.length == 0) {
        tabla += "<tr><td colspan='4'>No hay mascotas que mostrar</td></tr>";
    }
    else {


        for (let i = 0; i < lista.length; i++) {

            tabla += `<tr><td>${lista[i].id}</td><td>${lista[i].nombre}</td><td>${lista[i].edad}</td><td>${Clases.tipoHeroe[lista[i].tipo]}</td><td>${lista[i].poder_principal}</td></tr>`;

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

    let heroesFiltrados: Array<Clases.Heroe>;

    let HeroesString: string | null = localStorage.getItem("Heroes");

    let HeroesJSON: Clases.Heroe[] = HeroesString == null ? [] : JSON.parse(HeroesString);
//filtrar heroes por tipo

//calcular suma de edades



    console.log(totalEdades);

    cantidad = heroesFiltrados.length;


    console.log(cantidad);
//se calcula el promedio
    if (cantidad != 0) {
        promedio = totalEdades / cantidad;
    }
//asignar promedio  al valor de txtPromedio, usando jQuery


}

function mapearCampos() {

        let chkId: boolean = (<HTMLInputElement> $('#chkId')[0]).checked;
        let chkName: boolean = (<HTMLInputElement> $('#chkName')[0]).checked;
        let chkEdad: boolean = (<HTMLInputElement> $('#chkEdad')[0]).checked;
        let chkPoder: boolean = (<HTMLInputElement> $('#chkPoder')[0]).checked;
    
        let HeroesString: string | null = localStorage.getItem("Heroes");
    
        let HeroesJSON: Clases.Heroe[] = HeroesString == null ? [] : JSON.parse(HeroesString);
    
        let tabla: string = "<table class='table'><thead><tr>";
        //hacer la logica para crear la tabla en base a los valores de los checkbox
        
    
        $('#divTabla').html(tabla);
    
}

//agregar el codigo que crea conveniente para realizar las bajas y las modificaciones
    