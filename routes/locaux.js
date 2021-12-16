const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Local = require('../models/local');

router.get('/', async(req, res) => {
    try{
        await mongoose.connect(process.env.MONGODB_APP_URI);
        res.json(await Local.find());
    } catch(err){
        console.log(err);
        res.status(500).json({erreur: "Erreur lors de l'obtention des locaux"});
    } finally{
        await mongoose.connection.close();
    }
});

router.get('/:nom', async(req, res) =>{
    try{
        await mongoose.connect(process.env.MONGODB_APP_URI);
        res.json(await Local.findOne({nom: req.params.nom}));
    } catch(err){
        console.log(err);
        res.status(500).json({erreur: "Erreur lors de l'obtention du local"});
    } finally{
        await mongoose.connection.close();
    }
});

router.post('/', async(req, res) =>{
    try {    
        await mongoose.connect(process.env.MONGODB_APP_URI);
        res.json(await new Local(req.body).save());
      } catch(err) {
        console.log(err.message);
        res.status(500).json({erreur:"Erreur lors de l'ajout du local"});
      } finally {
        await mongoose.connection.close();
      }
});

router.put('/:nom', async(req, res) =>{
  try {    
      await mongoose.connect(process.env.MONGODB_APP_URI);
      res.json(await Local.updateOne({nom:req.params.nom},{ $set: {nbmax: req.body.nbmax, dispo: req.body.dispo}}));
    } catch(err) {
      console.log(err.message);
      res.status(500).json({erreur:"Erreur lors de la modification du local"});
    } finally {
      await mongoose.connection.close();
    }
});

router.delete('/:nom', async(req, res) =>{
    try {
        await mongoose.connect(process.env.MONGODB_APP_URI);
        res.json(await Local.deleteOne({nom:req.params.nom}));
      } catch(err) {
        console.log(err.message);
        res.status(500).json({erreur:"Erreur lors de la suppression du local"});
      } finally {
        await mongoose.connection.close();
      }
});

module.exports = router;