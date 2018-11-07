
/*

class Rectangulo {
    base;
    altura;
    area():number{
        return this.base * this.altura;
    }
}

let rectangulo = new Rectangulo();

rectangulo.base = 10;
rectangulo.altura = 10;

console.log(rectangulo.area());


*/


class Rectangulo<T>{
    base:T;
    altura:T;
    area():number{
        return this.base * this.altura;
    }
}

let rectangulo = new Rectangulo();

rectangulo.base = 10;
rectangulo.altura = 10;

console.log(rectangulo.area());