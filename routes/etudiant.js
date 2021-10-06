var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Produit = require('../models/produits');
const uri = "mongodb://localhost:27017";

router.get('/', async(req, res) => {
    await mongoose.connect(uri);
    try{
        const produits = await Produit.find();
        res.json(produits);
    } catch(err){
        console.log(err);
        res.status(500).json({erreur: 'Une erreur est survenue...'});
    } finally{
        mongoose.connection.close();
    }
});

router.get('/sku/:sku', async(req, res) =>{
    await mongoose.connect(uri);
    try{
        const produit = await Produit.findOne({sku: req.params.sku});
        if(!produit){
            res.status(404).json({erreur: 'Produit introuvable'});
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

router.get('/variants/:sku', async(req, res) =>{
    await mongoose.connect(uri);
    try{
        const produits = await Produit.find({sku: req.params.sku}, 'variants');
        if(!produits){
            res.status(404).json({erreur: 'Produits introuvables'});
        }
        else{
            res.json(produits);
        }
    } catch(err){
        console.log(err);
        res.status(500).json({erreur: 'Une erreur est survenue...'});
    } finally{
        mongoose.connection.close();
    }
});

router.get('/:categorie/qtenegative', async(req, res) =>{
    await mongoose.connect(uri);
    try{
        const produits = await Produit.find({categories: req.params.categorie}).where('stock').lt(0);
        if(!produits){
            res.status(404).json({erreur: 'Produits introuvables'});
        }
        else{
            res.json(produits);
        }
    } catch(err){
        console.log(err);
        res.status(500).json({erreur: 'Une erreur est survenue...'});
    } finally{
        mongoose.connection.close();
    }
});

router.get('/stats/prix-moyen-par-statut', async(req, res) =>{
    await mongoose.connect(uri);
    try{
        const produit = await Produit.aggregate([
            {"$group": {
                "_id":"$statut",
                "prixMoyen": {"$avg":"$prix"}
                }
            },
            {"$sort": {"prixMoyen": 1}}
        ]);
        res.json(produit);
    } catch(err){
        console.log(err);
        res.status(500).json({erreur: 'Une erreur est survenue...'});
    } finally{
        mongoose.connection.close();
    }
});

router.post('/', async(req, res) =>{
    await mongoose.connect(uri);
    try{
        const produit = new Produit(req.body);
        const nouveauProduit = await produit.save();
        res.json(nouveauProduit);
    } catch(err){
        console.log(err);
        res.status(500).json({erreur: 'Une erreur est survenue...'});
    } finally{
        mongoose.connection.close();
    }
});

router.delete('/:id', async(req, res) =>{
    await mongoose.connect(uri);
    try{
        await Produit.deleteOne({_id: req.params.id});
    } catch(err){
        console.log(err);
        res.status(500).json({erreur: 'Une erreur est survenue...'});
    } finally{
        mongoose.connection.close();
    }
});

module.exports = router;