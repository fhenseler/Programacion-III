Array.prototype.unique=function(a){
    return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a, b+1)<0
});

$(function()
{
    cargarPaises();

    $("#paises").change(function(){
        cargarCiudades(this.value);
    });
})

function cargarPaises(){
    var paises = data.map(function(p){
        return p.pais;
    })
    .unique()
    .sort();

    $.each(paises, function(undefined, pais){
        $("#paises").append('<option value="'+pais+'">'+pais+'</option>');
    });
}