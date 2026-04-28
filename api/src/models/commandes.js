const mongoose = require('mongoose');

const commandeSchema = new mongoose.Schema({
  client: { type: String, required: true },
  telephone: { type: String, required: true },
  adresseLivraison: { type: String, required: true },
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  plats: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Plat' }],
  montantTotal: { type: Number, required: true },
  statut: { 
    type: String, 
    enum: ['en attente', 'en préparation', 'livrée', 'annulée'], 
    default: 'en attente' 
  },
  commentaire: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Commande', commandeSchema);