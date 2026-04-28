const express = require('express');
const router = express.Router();
<<<<<<< HEAD
// Vérifie bien que le nom du fichier est commandeController (sans s)
const commandeController = require('../controllers/commandesController');

// Routes
router.post('/', commandeController.create);
router.get('/', commandeController.getAll);
router.get('/:id', commandeController.getById);
router.patch('/:id/statut', commandeController.updateStatut);
router.delete('/:id', commandeController.delete);

=======
const commandeController = require('../controllers/commandeController');

/** * ROUTES POUR LES COMMANDES
 * Préfixe : /api/commandes
 */

// --- CRÉATION ---
// POST /api/commandes - Créer une commande
router.post('/', commandeController.create);


// --- LECTURE ---
// GET /api/commandes - Lister toutes les commandes
router.get('/', commandeController.getAll);

// GET /api/commandes/:id - Détail d'une commande spécifique
router.get('/:id', commandeController.getById);


// --- MODIFICATION ---
// PATCH /api/commandes/:id/statut - Changer uniquement le statut d'une commande
router.patch('/:id/statut', commandeController.updateStatut);


// --- SUPPRESSION ---
// DELETE /api/commandes/:id - Supprimer définitivement une commande
router.delete('/:id', commandeController.delete);


>>>>>>> 13744d2d6aa489166583d24d4cccea6ba3fd9ce4
module.exports = router;