window.addEventListener('load', AsignarManejadores, false);

function AsignarManejadores() 
{
    cargarTipos();
    mostrarHeroes();

    $('#cmbFiltro').change(function () {
        //  filtrarHeroes(this.value);
    });

    $('#chkId').change(mapearCampos);
    $('#chkName').change(mapearCampos);
    $('#chkEdad').change(mapearCampos);
    $('#chkPoderes').change(mapearCampos);  

//--------------------------------------------------------------------------

    $("#btnOpen").click(openForm);
    $("#divForm").on('load', ManejarEnvio);
    $("#btnConfirmar").click(agregarHeroe);
    $("#btnConfirmar").click(cargarSpinner);
    $("#divForm2").on('load', ManejarEnvio);
    $('#btnCancel').click(closeForm);
    $('#btnCancel2').click(closeForm2);
    $('#btnModificar').click(modificarHeroe);
    $("#btnModificar").click(cargarSpinner);
    $('#btnEliminar').click(eliminarHeroe);
    $("#btnEliminar").click(cargarSpinner);

    //traerListaHeroes();
}

function ManejarEnvio(e)
{
    e.preventDefault(); //Anula el evento nativo
}

function cargarSpinner()
{
    document.getElementById("divSpinner").style.display = "block";
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
