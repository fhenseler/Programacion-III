//a- Elevar al cuadrado todos los numeros del array
//b- Filtrar los elementos del array menores a 4

var array = [1, 2, 6, 4, 5, 3];
var cuadrados = [];

for (var i = 0, len = array.length; i < len; i++) {
    cuadrados[i] = Math.pow(array[i], 2);
}    

console.log(cuadrados);


//MAP, REDUCE, FILTER (se pueden encadenar)

//MAP se puede usar por ej, para traer del array de heroes solo los nombres
