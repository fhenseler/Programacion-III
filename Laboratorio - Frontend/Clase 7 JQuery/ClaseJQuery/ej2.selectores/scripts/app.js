$(document).ready(function () {

    //Selectores
    // por tag
    $("p");
    // por id
    $("#p1");
    // por clase
    $(".claseP");
    // por atributo
    $("p[name=p4]");

    // Eventos
    $("p").mouseover(function () {
        $("p").css("color", "yellow");
        //$(this).css("color", "red");

    });

    $("p").mouseout(function () {
        $("p").css("color", "black");
        //  $(this).css("color", "black");
    });

    $("#btnSaludar").click(function(){
        alert("Hola");
    })



});

