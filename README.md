# apireservation

INSTALLATION: 
  git clone https://github.com/lowa1234/apireservation.git
  npm start
  
Base de données: 
  MongoDb
  PowerShell: 
    mongo
    use cegep
    db.etudiants.insert({nom: "Test", prenom: "Test", da: "1234567", amis:{nom: "Bourassa", "Jean-Philippe", da: "1584245"}})
    db.locaux.insert({nom: "C-205", aile: "C", etage: "2", nbmax: 8, nbreservation: 0, dispo: true})
  Url:
    https://still-wildwood-64862.herokuapp.com/ (Non fonctionnelle)
