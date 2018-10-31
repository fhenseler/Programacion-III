if(localStorage)
{
    if(localStorage.token)
    {
        validateUser(localStorage.token);
    }
    else
    {
        alert("No tiene permisos suficientes");
        window.location.replace("http://localhost:3000/");
    }
}

function validateUser(token)
{
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if(this.readyState == 4)
        {
            if(this.status == 200)
            {
                if(xhr.responseText == "OK")
                {
                    window.location.replace("http://localhost:3000/admin.html");
                }
            }
            else
            {
                alert("No tiene permisos suficientes");
                window.location.replace("http://localhost:3000/accessdenied.html");
            }
        }
    };
    xhr.open("POST", "http://localhost:3000/validate", false);
    xhr.setRequestHeader("authorization", token);
    xhr.send("");
}

window.onload = function()
{
    $("#btnLogIn").click(function()
    {
        login();
    });

    //this.document.getElementById("btnLogIn").addEventListener...
}

var xhr;

function login()
{
    var data = 
    {
        "usuario": document.getElementById("name").value,
        "password": document.getElementById("name").value
    }

    var senddata = 
    {   
        "collection" : "users",
        "data" : data
    };

    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if(this.readyState == 4)
        {
            if(this.status == 200) //Caso exitoso
            {
                localStorage.token = JSON.parse(xhr.responseText).token; //Genero objeto JSON a partir de la respuesta del servidor, y el token es uno de los atributos de ese objeto.
                window.location.replace(xhr.getResponseHeader("redirect"));
            }
            if(this.status == 403)
            {
                window.location.replace("http://localhost:3000/accessdenied.html");
            }
        }
    };

    xhr.open("POST", "http://localhost:3000/login", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(senddata));

}