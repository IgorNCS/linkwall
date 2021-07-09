const express= require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const path = require('path')
const linkRoute = require('./routes/linkRoute')




mongoose.connect('mongodb://localhost/links',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'templates'))

let db = mongoose.connection;

db.on("error",()=>{console.log("houve um erro")});
db.once("open",()=>{console.log("Banco carregado")});

app.use('/', linkRoute);

app.listen(port,()=> console.log(`Exemple App listen port ${port}!`))