const express = require('express');
const router = express.Router();
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


module.exports = router;