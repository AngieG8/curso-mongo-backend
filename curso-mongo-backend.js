"use strict"

var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/curso_mongo",  { useNewUrlParser: true })

       .then(() => {
           console-log ("La conexion a MongoBD se ha realizado correctamente");
       })
       .catch ( err => console.log(err));