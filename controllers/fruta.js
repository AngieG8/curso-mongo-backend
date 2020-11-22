"use strict"
const Fruta = require("../models/fruta")
function pruebas( req, res) {
    res.status(200).send({
   menssage: "Esta ruta es de prueba en mi api restful con mongo y node"
    });
};

function saveFruta(req, res) {
  const fruta = new Fruta();
  var params = req.body;

  if (params.nombre){
      fruta.nombre = params.nombre;
      fruta.color = params.color;
      fruta.temporada = params.temporada;

      fruta.save((err, frutaStored)=> {
          if (err) {
              res.status(500).send({
                  menssage: "Error en el servidor"
              });
          } else {
              if ( frutaStored) {
                  
            res.status(200).send ({
                fruta: frutaStored
            });
          }else{
            res.status(200).send ({
                menssage:"No se ha guardado la fruta"
      });
  }
}
      });
  }
}

function getFrutas(req,res){
    Fruta.find({}).exec((err, frutas) => {
    if (err){
        res.status(500).send({
            menssage: "Error en el servidor"
        });
    }else{
        if (frutas){
            res.status(200).send({ 
                frutas
            });
        }else {
            res.status(404).send({
                menssage:"No hay frutas"
            });
        }
    }
});
}

function getFruta (req,res){
    const frutaId = req.params.id;
    Fruta.findById(frutaId).exec((err, fruta) =>{
        if (err) {
        res.status(500).send({
            menssage: "Error en el servidor"
        });
    }else{
        if (fruta){
            res.status(200).send({ 
                fruta
            });
        }else {
            res.status(404).send({
                menssage:"No hay frutas"
            });
    }
}
});
}


function updateFruta (req,res) {
    var frutaId = req.params.id;
    var update = req.body;

    Fruta.findByIdAndUpdate(frutaId,update,{new:true}, (err, frutaUpdated) => {
        if (err) {
            res.status(500).send({
                menssage: "Error en el servidor"
            });
        }else{
            if (frutaUpdated){
                res.status(200).send({ 
                    fruta: frutaUpdated
                });
            }else {
                res.status(404).send({
                    menssage:"No hay frutas"
                });
            }
        }
    })
}

function deleteFruta (req, res){
    var frutaId = req.params.Id;

    Fruta.findByIdAndRemove(frutaId, (err, frutaRemoved)=>{
        if (err) {
            res.status(500).send({
                menssage: "Error en el servidor"
            });
        }else{
            if (frutaRemoved){
                res.status(200).send({ 
                    fruta: frutaRemoved
                });
            }else {
                res.status(404).send({
                    menssage:"No hay frutas"
                });
    }
}
});
}
module.exports = {
    pruebas,
    saveFruta,
    getFrutas,
    getFruta,
    updateFruta,
    deleteFruta
};