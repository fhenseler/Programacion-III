var x = $(document);

x.ready(function(){
    $("#btnEnviar").click(enviarPeticion);
});

function enviarPeticion(){
    var div = $("#info");
    
    $(document).ajaxStart(mostrarPreloader);
    div.load("pagina1.php");
}

function mostrarPreloader(){
    $("#info").html('<img src="./images/spin.gif" alt="preloader">');
}