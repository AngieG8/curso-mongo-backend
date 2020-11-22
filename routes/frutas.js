"use strict"

const express = require("express");
var FrutaController = require("../controllers/fruta");

const api = express.Router();

api.get("/pruebas", FrutaController.pruebas);
api.post("/fruta", FrutaController.saveFruta)
api.get("/frutas", FrutaController.getFrutas)
api.get("/fruta/:id", FrutaController.getFruta)
api.put("/fruta/:id",FrutaController.updateFruta)
api.delete("/fruta", FrutaController.deleteFruta)
module.exports = api;
