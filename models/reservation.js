const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReservationSchema = new Schema({
    da_etudiant: {type: String, required: true, minlength: [7, 'Le DA doit être composé de 7 chiffres'], maxlength: [7, 'Le DA doit être composé de 7 chiffres']},
    nom_local: {type: String, required: true, minlength: [5, 'Le nom doit contenir 5 caractère ex. C-205'], maxlength: [5, 'Le nom doit contenir 5 caractère ex. C-205']},
    date: {type: Date, required: true},
    heure_debut: {type: String, required: true, validate: {
        validator: function(v) {
          return /\d{2}:\d{2}:\d{2}/.test(v);
        },
        message: props => `${props.value} n'est pas une heure valide!`
      }},
    heure_fin: {type: String, required: true, validate: {
        validator: function(v) {
          return /\d{2}:\d{2}:\d{2}/.test(v);
        },
        message: props => `${props.value} n'est pas une heure valide!`
      }}
});

module.exports = mongoose.model('Reservation', ReservationSchema);