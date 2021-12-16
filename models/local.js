const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LocalSchema = new Schema({
    nom: {type: String, required: true, minlength: [5, 'Le nom doit contenir 5 caractère ex. C-205'], maxlength: [5, 'Le nom doit contenir 5 caractère ex. C-205']},
    aile: {type: String, required: true, maxlength: 1},
    etage: {type: String, required: true, maxlength: 1},
    nbmax: {type: Number, required: true},
    nbreservation: {type: Number, required: true},
    dispo: {type: Boolean, required: true},
});

module.exports = mongoose.model('Local', LocalSchema);