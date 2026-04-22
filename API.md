# API TerrangaFood -- Documentation

## Base URL
http://localhost:3001/api

## Restaurants (existant)
| Méthode | Endpoint | Description |
| :--- | :--- | :--- |
| GET | /api/restaurants | Lister les restos |
| GET | /api/restaurants/:id | Détail d'un resto |
| POST | /api/restaurants | Créer un resto |
| PUT | /api/restaurants/:id | Modifier un resto |
| DELETE | /api/restaurants/:id | Supprimer un resto |

## Plats (existant)
| Méthode | Endpoint | Description |
| :--- | :--- | :--- |
| GET | /api/plats | Lister les plats |
| GET | /api/plats/:id | Détail d'un plat |
| GET | /api/plats/restaurant/:restoId | Plats d'un resto |
| POST | /api/plats | Créer un plat |
| PUT | /api/plats/:id | Modifier un plat |
| DELETE | /api/plats/:id | Supprimer un plat |

## Commandes (Lab 1 -- NOUVEAU)
| Méthode | Endpoint | Description |
| :--- | :--- | :--- |
| POST | /api/commandes | Créer une commande |
| GET | /api/commandes | Lister les commandes |
| GET | /api/commandes/:id | Détail d'une commande |
| PATCH | /api/commandes/:id/statut | Changer le statut |
| DELETE | /api/commandes/:id | Supprimer une commande |

### POST /api/commandes -- Exemple
```json
{
  "client": "Moussa Diop",
  "telephone": "+221 77 123 45 67",
  "adresseLivraison": "Keur Gorgui, Villa 12",
  "restaurant": "ID_RESTAURANT",
  "plats": ["ID_PLAT_1", "ID_PLAT_2"],
  "montantTotal": 4500,
}
,,,

### PATCH / api / commandes /: id / statut -- Transitions
en attente → confirm é e → en livraison → livr é e
 en attente → annul é e
 confirm é e → annul é e

### Codes HTTP
 - 200 : Succ è s
 - 201 : Ressource cr é é e
 - 400 : Donn é es invalides ou transition interdite
 - 404 : Ressource non trouv é e
- 500 : Erreur serveur