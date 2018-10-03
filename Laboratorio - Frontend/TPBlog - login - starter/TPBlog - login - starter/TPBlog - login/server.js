var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');

app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/admin.html',function(){
    console.log("pide admin.html");
});

app.get('/login',function(req,res){
    res.sendFile(__dirname + '/login.html');
});

app.get('/admin',function(req,res){
    res.sendFile(__dirname + '/admin.html');
});
app.get('/',function(req,res){
    res.sendFile(__dirname + '/login.html');
});

  app.post('/login', function (req, res) {
    //MOCK USER
    var u = req.body;
    var user;
    require('fs').readFile(__dirname + getPathFromCollection(req.body.collection), 'utf8', function (err, data) {
        if (err) {
            throw err; 
        }
        else if(data === undefined){
            throw("No se encontro la data solicitada");
        }

           var array = JSON.parse(data);
           array = array.filter(function(a){
             //return a.active == true && a.password == u['data[password]'] && a.name == u['data[usuario]'];
             return a.active == true && a.password == u.data.password && a.name == u.data.usuario;
           });
           
           if(array.length==0){
            res.sendStatus(403);
           }
           else if(array>1){
            res.sendStatus(500);
           }
           else{
               user = array[0];
           
           //setTimeout(function(){res.send({"message": "Carga exitosa","data":array});},5000);

                jwt.sign({user},'secretKey',(err,token) => {
                    //armo respuesta
                var rta = {
                    message: "Log in exitoso",
                    user: user,
                    token:token 
                }
                    res.append('redirect', 'http://localhost:3000/admin.html');
                res.send(rta);
                
                });
            }
    });  


  
}); 

app.post('/validate',verifyToken, function (req, res) {
          
        jwt.verify(req.token,'secretKey', (error,authData)=>{
            if(error){
                res.sendStatus(403);
            }
            else{

                    setTimeout(function(){res.send("OK");    },0);
                }
               
        });  
            
});


function getPathFromCollection(collection){
    if(collection==="Personas"){
        return '/data/people.json';
    }
    if(collection==="posts"){
        return '/data/posts.json';
    }
    if(collection==="users"){
        return '/data/users.json';
    }
}


//FORMAT OF TOKEN
//Authorization : Bearer <access_token>
function verifyToken(req,res,next){
    //get auth header value
    var bearerHeader = req.headers['authorization'];

    if(bearerHeader!=""){
        req.token = bearerHeader;
        next();
    }
    else{
        //Forbidden
        res.sendStatus(403);
    }
}

function getID(array){
    if(array.length == 0){
        return 1;
    }
    else if(array.length == 1){
        return 2;
    }
    else{
        var maxIndex = array.reduce(function(prev,curr,index){
            if(prev.id>curr.id)
            return prev.id;
            else
            return curr.id;
        });
        return maxIndex+1;
    }
}

http.listen(3000, function(){
  console.log('listening on *:3000');
});