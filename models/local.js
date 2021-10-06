const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProduitSchema = new Schema({
    nom: {type: String, required: true},
    aile: {type: String, required: true},
    etage: {type: String, required: true},
    nb: {type: Number, required: true},
    nbmax: {type: Number, required: true},
    dispo: {type: Boolean, required: true},
});

module.exports = mongoose.model('Produit', ProduitSchema);