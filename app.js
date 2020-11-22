"use strict"

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//  Cargas rutas
const fruta_routes = require("./routes/frutas")
//  Body-parser

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


// Configurar CORS

// Rutas
app.use("/api",fruta_routes);
module.exports = app;