/*
function regresar( parametro:any ){
    return parametro;
}

console.log( regresar( 15.4356 )       );
console.log( regresar( "Ricardo Tapia"));
console.log( regresar( new Date())     );
*/


function regresar<T>( parametro:T ):T{
    return parametro;
}

console.log( regresar( 15.4356 ).toFixed(2) );
console.log( regresar( "Ricardo Tapia")  );
console.log( regresar( new Date())          );



