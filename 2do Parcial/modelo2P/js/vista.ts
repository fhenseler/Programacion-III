//##############
/// <reference path="modelo.ts"/>
//##############

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