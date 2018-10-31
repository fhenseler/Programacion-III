var x = $(document);

x.ready(function(){
    $("#btnEnviar").click(enviarPeticion);
});

function enviarPeticion(){
    $("#info").load("pagina1.php");
}