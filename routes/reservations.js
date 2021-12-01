const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Reservation = require('../models/reservation');

router.get('/', async (req, res) => {
    try {    
      await mongoose.connect(process.env.MONGODB_APP_URI);
      res.json(await Reservation.find());
    } catch(err) {
      console.log(err.message);
      res.status(500).json({erreur:'Une erreur est survenue, veuillez contacter votre administrateur'});
    } finally {
      mongoose.connection.close();
    }
  });
  

  router.get('/id/:id', async(req, res) =>{
    try{
        await mongoose.connect(process.env.MONGODB_APP_URI);
        res.json(await Reservation.findOne({_id: req.params.id}));
    } catch(err){
        console.log(err);
        res.status(500).json({erreur: "La réservation recherchée n'a pu être retrouvée"});
    } finally{
        mongoose.connection.close();
    }
});

router.get('/da/:da_etudiant', async(req, res) =>{
    try{
        await mongoose.connect(process.env.MONGODB_APP_URI);
        res.json(await Reservation.findOne({da_etudiant: req.params.da_etudiant}));
    } catch(err){
        console.log(err);
        res.status(500).json({erreur: 'Aucune réservation pour cet étudiant'});
    } finally{
        mongoose.connection.close();
    }
});
  
  router.post('/', async (req, res) => {  
    try {    
      await mongoose.connect(process.env.MONGODB_APP_URI);
      res.json(await new Reservation(req.body).save());
    } catch(err) {
      console.log(err.message);
      res.status(500).json({erreur:'Une erreur est survenue, veuillez contacter votre administrateur'});
    } finally {
      mongoose.connection.close();
    }
  });
  
  
  router.delete('/:id', async (req, res) => {  
    try {
      await mongoose.connect(process.env.MONGODB_APP_URI);
      res.json(await Reservation.deleteOne({_id:req.params.id}));
    } catch(err) {
      console.log(err.message);
      res.status(500).json({erreur:'Une erreur est survenue, veuillez contacter votre administrateur'});
    } finally {
      mongoose.connection.close();
    }
  });

module.exports = router;