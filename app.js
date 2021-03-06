const express = require("express");
const app = express();
const port = 3030;

app.use(express.static('public'));

const path = require("path");

app.get('/',(req,res)=>res.sendFile(path.join(__dirname,'views','home.html')));
app.get('/login',(req,res)=>res.sendFile(path.join(__dirname,'views','login.html')));
app.get('/register',(req,res)=>res.sendFile(path.join(__dirname,'views','register.html')));

app.listen(port,()=>console.log("servidor corriendo en el puerto 3030"));