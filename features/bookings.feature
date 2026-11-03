# language: fr

Fonctionnalité: Gestion des réservations via l'API
  En tant que testeur QA
  Je veux interagir avec l'API Restful Booker
  Afin de valider le cycle de vie complet d'une réservation

  Scénario: Modifier une réservation existante avec succès
    Étant donné que je crée une nouvelle réservation
    Et que je récupère un token d'authentification
    Quand je modifie la réservation avec le prénom "NouveauPrenom"
    Alors le code de statut doit être 200
    Et la réservation doit avoir été mise à jour