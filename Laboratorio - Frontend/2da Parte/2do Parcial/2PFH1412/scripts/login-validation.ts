
window.onload = function()
{
    $("#btnLogIn").click(function()
    {
        validarUsuario();
    });

    //this.document.getElementById("btnLogIn").addEventListener...
}

    //array.reduce(function(max, x) { return (x.val > max) ? x.val : max; }, 0)

// namespace Clases{
// export class Usuario{
//     public id:user;
//     public user:string;
//     public pass: string;
//     public rol:string;

//     constructor(id:user, user:string, pass:string, rol:string){

//         this.id = id;
//         this.user = user;
//         this.pass = pass;
//         this.rol = rol;
//     }

//     public toJSON():string{
//         let json: string = `{"id":"${this.id}","user":"${this.user}","pass":"${this.pass}","rol":"${this.rol}"}`;
//         return json;
//     }
// }
// }

var usuario: string = String($('#name').val());
var password: string = String($('#pass').val());

function validarUsuario()
{  
    let UsuariosString: string | null = localStorage.getItem("Usuarios");
    let UsuariosJSON: JSON[] = UsuariosString == null ? [] : JSON.parse(UsuariosString);

    UsuarioFiltrado = UsuariosJSON.filter(function (user) {
        
                return user == usuario;
    });    
}
