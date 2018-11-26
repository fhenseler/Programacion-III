//realizar codigo de la clase "Heroe". el metodo toJSON es parte de la clase y es provisto en el starter

        public toJSON():string{

            let cad:string = super.toJSON().replace('}', '');          
            

            let json:string = cad + `, "id":${this.id}, "tipo":${this.tipo.toString()}, "poder_principal":"${this.poder_principal}"}`;
            return json;
        }


