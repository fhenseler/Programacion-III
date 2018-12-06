window.addEventListener('load', AsignarManejadores, false);

function AsignarManejadores() 
{
    cargarSpinner();
    setTimeout(function(){ removerSpinner(); }, 3000);
    cargarLados();

    $('#cmbFiltro').change(function () {
        filtrarHeroes(Number($('#cmbFiltro').val()));
    });

    $('#chkId').change(mapearCampos);
    $('#chkName').change(mapearCampos);
    $('#chkApellido').change(mapearCampos);
    $('#chkAlias').change(mapearCampos);
    $('#chkEdad').change(mapearCampos);
    $('#chkLado').change(mapearCampos);  

//--------------------------------------------------------------------------

    $("#btnOpen").click(openForm);
    $("#divForm").on('load', ManejarEnvio);
    $("#btnConfirmar").click(agregarHeroe);
    $("#divForm2").on('load', ManejarEnvio);
    $('#btnCancel').click(closeForm);
    $('#btnCancel2').click(closeForm2);
    $('#btnModificar').click(modificarHeroe);
    $('#btnEliminar').click(eliminarHeroe);

    mostrarHeroes();
    promedioInicial();
    calcularViejo();

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
    console.log("ID: " + id);
    console.log("DATOS: " + datos);
    console.log("FIND: " + datos.find(x => x.id === id));
    heroe = datos.find(x => x.id === id);
    document.getElementById('txtId2').value = id;
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
    $("#txtId").value = "";
    $("#txtNombre").value = "";
    $("#txtApellido").value = "";
    $("#txtEdad").value = "";
    $("#txtAlias").value = "";
    document.getElementById('l11').checked = false;
    document.getElementById('l22').checked = false;
    document.getElementById('l1').checked = false;
    document.getElementById('l2').checked = false;
}

function removerSpinner()
{
    document.getElementById("divSpinner").style.display = "none";
}
