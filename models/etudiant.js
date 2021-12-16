const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EtudiantSchema = new Schema({
    nom: {type: String, required: true, maxlength: [50, 'Le nom doit contenir moins de 50 caractère']},
    prenom: {type: String, required: true, maxlength: [50, 'Le prénom doit contenir moins de 50 caractère']},
    da: {type: String, required: true, minlength: [7, 'Le DA doit être composé de 7 chiffres'], maxlength: [7, 'Le DA doit être composé de 7 chiffres']},
    amis: {
        nom: {type: String, maxlength: 50},
        prenom: {type: String, maxlength: 50},
        da: {type: String, minlength:7, maxlength: 7}
    }
});

module.exports = mongoose.model('Etudiant', EtudiantSchema);