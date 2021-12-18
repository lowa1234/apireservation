# apireservation

## Installation: 
  git clone https://github.com/lowa1234/apireservation.git
  
  npm start
  
## Base de données: 
  MongoDb
  
  PowerShell: 
  
    mongo
    
    use cegep
    
    db.etudiants.insert({nom: "Test", prenom: "Test", da: "1234567", amis:{nom: "Bourassa", "Jean-Philippe", da: "1584245"}})
    
    db.locaux.insert({nom: "C-205", aile: "C", etage: "2", nbmax: 8, nbreservation: 0, dispo: true})
    
## Url:
  https://still-wildwood-64862.herokuapp.com/ (Non fonctionnelle)

## Requête:
  ### Étudiants:
    étudiant: {nom(String), prenom(String), da(String), amis({nom, prenom, da})}(optionnel)}
  
    Get/etudiants retourne les étudiants
  
    Get/etudiants/:da retourne un étudiant
    
    Post/etudiants {nom(String), prenom(String), da(String), amis({nom, prenom, da})}(optionnel)} retourne un étudiant
    
    Put/etudiants/:da {nom(String), prenom(String), da(String), amis({nom, prenom, da})}(optionnel)} retourne un étudiant
    
    Delete/etudiants/:da retourne un deletedRowCount
    
  ### Locaux:
    local:{nom(String), aile(String), etage(String), nbmax(Number), nbreservation(Number), dispo(Bool)}
  
    Get/locaux retourne les locaux
    
    Get/locaux/:nom retourne un local
    
    Post/locaux {nom(String), aile(String), etage(String), nbmax(Number), nbreservation(Number), dispo(Bool)} retourne un local
    
    Put/locaux/:nom {nom(String), aile(String), etage(String), nbmax(Number), nbreservation(Number), dispo(Bool)} retourne un local
    
    Delete/locaux/:nom retourne un deletedRowCount
    
  ### Réservations:
    réservation:{da_etudiant(String), nom_local(String), date(Date), heure_debut(String), heure_fin(String)}
    
    Get/reservations retourne les réservations
    
    Get/reservations/:id retourne une réservation
    
    Get/reservations/da/:da_etudiant retourne une réservation
    
    Get/reservations/nb-par-etudiant retourne le nombre de réservations par étudiant
    
    Get/reservations/nb-par-local retourne le nombre de réservations par local
    
    Post/reservations {da_etudiant(String), nom_local(String), date(Date), heure_debut(String), heure_fin(String)} retourne une réservation
    
    Put/reservations/:id {da_etudiant(String), nom_local(String), date(Date), heure_debut(String), heure_fin(String)} retourne une réservation
    
    Delete/reservations/:id retourne un deletedRowCount
