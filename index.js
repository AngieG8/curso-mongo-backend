"use strict"

const mongoose = require("mongoose");
const app = require("./app");
var port = 3800;


mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/curso_mongo",  { useNewUrlParser: true,  useUnifiedTopology: true })

       .then(()=> {
           console.log("La conexion a MongoBD se ha realizado correctamente !! ");

           app.listen(port, () => {
               console.log ("El servidor esta corriendo en localhost:3800")
           })
       })
       .catch ( err => console.log(err));