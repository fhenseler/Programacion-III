/*
function funcionGenerica<T>( parametro:T){
    return parametro;
}

type Heroe = {
    nombre: string,
    nombreReal: string
}

type Villano = {
    nombre: string,
    poder: string
}

let deadpool ={
    nombre: "Deadpool",
    nombreReal: "Wade Winston Wilson",
    poder: "Regeneración"
};

console.log( funcionGenerica(deadpool). );
*/

function funcionGenerica<T>( parametro:T){
    return parametro;
}

type Heroe = {
    nombre: string,
    nombreReal: string
}

type Villano = {
    nombre: string,
    poder: string
}

let deadpool ={
    nombre: "Deadpool",
    nombreReal: "Wade Winston Wilson",
    poder: "Regeneración"
};

console.log( funcionGenerica<Villano>(deadpool).);