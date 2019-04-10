namespace Clases{

export abstract class Personaje{
    public nombre:string;
    public edad:number;
   

    //hacer constructor

    public toJSON():string{
        let json: string = `{"nombre":"${this.nombre}", "edad":${this.edad}}`;
        return json;
    }

}

}