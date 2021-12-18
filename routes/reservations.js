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
      res.status(500).json({erreur: "Erreur lors de l'obtention de réservations"});
    } finally {
      await mongoose.connection.close();
    }
  });
  

  router.get('/:id', async(req, res) =>{
    try{
        await mongoose.connect(process.env.MONGODB_APP_URI);
        res.json(await Reservation.findOne({_id: req.params.id}));
    } catch(err){
        console.log(err);
        res.status(500).json({erreur: "La réservation recherchée n'a pu être retrouvée"});
    } finally{
      await mongoose.connection.close();
    }
});

router.get('/da/:da_etudiant', async(req, res) =>{
    try{
        await mongoose.connect(process.env.MONGODB_APP_URI);
        res.json(await Reservation.find({da_etudiant: req.params.da_etudiant}));
    } catch(err){
        console.log(err);
        res.status(500).json({erreur: 'Aucune réservation pour cet étudiant'});
    } finally{
      await mongoose.connection.close();
    }
});
  
  router.post('/', async (req, res) => {  
    try {    
      await mongoose.connect(process.env.MONGODB_APP_URI);
      res.json(await new Reservation(req.body).save());
    } catch(err) {
      console.log(err.message);
      res.status(500).json({erreur:"Erreur lors de l'ajout de la réservation"});
    } finally {
      await mongoose.connection.close();
    }
  });
  
  
  router.delete('/:id', async (req, res) => {  
    try {
      await mongoose.connect(process.env.MONGODB_APP_URI);
      res.json(await Reservation.deleteOne({_id:req.params.id}));
    } catch(err) {
      console.log(err.message);
      res.status(500).json({erreur: "Erreur lors de la suppression de la réservation"});
    } finally {
      await mongoose.connection.close();
    }
  });

  router.get('/nb-par-etudiant', async(req, res) =>{
    try{
      await mongoose.connect(process.env.MONGODB_APP_URI);
        const nb = await Reservation.aggregate([
            {$group: {
                _id: "$da_etudiant",
                nb: {$sum: 1}
                }
            },
            {$sort: {"da_etudiant": 1}}
        ]);
        res.json(nb);
    } catch(err){
        console.log(err);
        res.status(500).json({erreur: "Erreur lors de l'obtention du nombre de réservations"});
    } finally{
        await mongoose.connection.close();
    }
});

router.get('/nb-par-local', async(req, res) =>{
    try{
      await mongoose.connect(process.env.MONGODB_APP_URI);
        const nb = await Reservation.aggregate([
            {$group: {
                _id: "$nom_local",
                nb: {$sum: 1}
                }
            },
            {$sort: {"nom_local": 1}}
        ]);
        res.json(nb);
    } catch(err){
        console.log(err);
        res.status(500).json({erreur: "Erreur lors de l'obtention du nombre de réservations"});
    } finally{
        await mongoose.connection.close();
    }
});

module.exports = router;