"use strict"

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FrutaSchema = Schema ({
    
    nombre: String,
    color: String,
    temporada: Boolean
});

module.exports= mongoose.model("Fruta", FrutaSchema)