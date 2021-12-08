const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EtudiantSchema = new Schema({
    nom: {type: String, required: true, maxlength: 50},
    prenom: {type: String, required: true, maxlength: 50},
    da: {type: String, required: true, maxlength: 7},
    amis: {
        nom: {type: String, required: true, maxlength: 50},
        prenom: {type: String, required: true, maxlength: 50},
        da: {type: String, required: true, maxlength: 7}
    }
});

module.exports = mongoose.model('Etudiant', EtudiantSchema);