//##############
/// <reference path="vista.ts"/>
//##############

function ejecutarTransaccion(transaccion, heroe) {

    switch (transaccion) {

        case "Alta":

            agregarHeroe();
            break;

        case "Baja":

            eliminarHeroe();
            break;

        case "Modificacion":

            modificarHeroe();
            break;
    }

}