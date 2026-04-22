const express = require('express');
const router = express.Router();
// Vérifie bien que le nom du fichier est commandeController (sans s)
const commandeController = require('../controllers/commandesController');

// Routes
router.post('/', commandeController.create);
router.get('/', commandeController.getAll);
router.get('/:id', commandeController.getById);
router.patch('/:id/statut', commandeController.updateStatut);
router.delete('/:id', commandeController.delete);

module.exports = router;