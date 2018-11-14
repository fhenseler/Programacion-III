///<reference path = 'mascota.ts'>

let unAnimal: Animal = new Animal(Tipo.Perro, 4, 3);

let unaMascota: Mascota = new Mascota(Tipo["3"], 0, 1, 'Nemo');
//console.log(Tipo["0"]); Para mostrar elementos del enumerado
//console.log(unAnimal.tipo); Otra forma

//unAnimal.Saludar();

console.log(Animal.comio);

console.log(unaMascota.edad);

console.log(unaMascota.patas);
unaMascota.AmputarExtremidades(3);

Clases.Tipo;