var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Etudiant = require('../models/etudiant');

router.get('/', async(req, res) => {
    await mongoose.connect(process.env.MONGODB_APP_URI);
    try{
        const etudiants = await Etudiant.find();
        res.json(etudiants);
    } catch(err){
        console.log(err);
        res.status(500).json({erreur: 'Une erreur est survenue...'});
    } finally{
        mongoose.connection.close();
    }
});

router.get('/:da', async(req, res) =>{
    await mongoose.connect(process.env.MONGODB_APP_URI);
    try{
        const etudiant = await Etudiant.findOne({da: req.params.da});
        if(!etudiant){
            res.status(404).json({erreur: 'Étudiant introuvable'});
        }
        else{
            res.json(produit);
        }
    } catch(err){
        console.log(err);
        res.status(500).json({erreur: 'Une erreur est survenue...'});
    } finally{
        mongoose.connection.close();
    }
});

router.post('/', async(req, res) =>{
    await mongoose.connect(process.env.MONGODB_APP_URI);
    try{
        const etudiant = new Etudiant(req.body);
        const nouvelEtudiant = await etudiant.save();
        res.json(nouvelEtudiant);
    } catch(err){
        console.log(err);
        res.status(500).json({erreur: 'Une erreur est survenue...'});
    } finally{
        mongoose.connection.close();
    }
});

router.delete('/:da', async(req, res) =>{
    await mongoose.connect(process.env.MONGODB_APP_URI);
    try{
        await Etudiant.deleteOne({da: req.params.da});
    } catch(err){
        console.log(err);
        res.status(500).json({erreur: 'Une erreur est survenue...'});
    } finally{
        mongoose.connection.close();
    }
});

module.exports = router;