const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReservationSchema = new Schema({
    da_etudiant: {type: String, required: true, maxlength: 7},
    nom_local: {type: String, required: true, maxlength: 5},
    heure_debut: {type: Date, required: true},
    heure_fin: {type: Date, required: true}
});

module.exports = mongoose.model('Reservation', ReservationSchema);