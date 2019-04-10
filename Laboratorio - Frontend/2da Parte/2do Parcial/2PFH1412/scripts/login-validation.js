window.onload = function () {
    $("#btnLogIn").click(function () {
        validarUsuario();
    });
    //this.document.getElementById("btnLogIn").addEventListener...
};
//array.reduce(function(max, x) { return (x.val > max) ? x.val : max; }, 0)
// namespace Clases{
// export class Usuario{
//     public id:number;
//     public user:string;
//     public pass: string;
//     public rol:string;
//     constructor(id:number, user:string, pass:string, rol:string){
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
function validarUsuario() {
    var usuario = String($('#name').val());
    var password = String($('#pass').val());
    var UsuariosString = localStorage.getItem("Usuarios");
    var UsuariosJSON = UsuariosString == null ? [] : JSON.parse(UsuariosString);
    UsuariosJSON.filter;
}
