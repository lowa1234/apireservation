const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Etudiant = require('../models/etudiant');

router.get('/', async(req, res) => {
    try{
        await mongoose.connect(process.env.MONGODB_APP_URI);
        res.json(await Etudiant.find());
    } catch(err){
        console.log(err);
        res.status(500).json({erreur: 'Une erreur est survenue...'});
    } finally{
        await mongoose.connection.close();
    }
});

router.get('/:da', async(req, res) =>{
    try{
        await mongoose.connect(process.env.MONGODB_APP_URI);
        res.json(await Etudiant.findOne({da: req.params.da}));
    } catch(err){
        console.log(err);
        res.status(500).json({erreur: 'Une erreur est survenue...'});
    } finally{
        mongoose.connection.close();
    }
});

router.post('/', async(req, res) =>{
    try {    
        await mongoose.connect(process.env.MONGODB_APP_URI);
        res.json(await new Etudiant(req.body).save());
      } catch(err) {
        console.log(err.message);
        res.status(500).json({erreur:'Une erreur est survenue, veuillez contacter votre administrateur'});
      } finally {
        mongoose.connection.close();
      }
});

router.delete('/:da', async(req, res) =>{
    try {
        await mongoose.connect(process.env.MONGODB_APP_URI);
        res.json(await Etudiant.deleteOne({da:req.params.da}));
      } catch(err) {
        console.log(err.message);
        res.status(500).json({erreur:'Une erreur est survenue, veuillez contacter votre administrateur'});
      } finally {
        mongoose.connection.close();
      }
});

module.exports = router;