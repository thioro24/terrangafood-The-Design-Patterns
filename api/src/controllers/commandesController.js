// On utilise 'commandes' avec un 's' minuscule pour correspondre exactement 
// au nom du fichier physique dans ton dossier models
const Commande = require('../models/commandes');

// --- Créer une nouvelle commande (POST) ---
exports.create = async (req, res) => {
  try {
    const nouvelleCommande = new Commande(req.body);
    const commandeEnregistree = await nouvelleCommande.save();
    
    // Résultat attendu : 201 Created
    res.status(201).json(commandeEnregistree);
  } catch (error) {
    // Si c'est une erreur de validation Mongoose (champs obligatoires manquants)
    if (error.name === 'ValidationError') {
      // On extrait les messages personnalisés pour coller au résultat attendu du TP
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({
        message: "Données invalides",
        erreurs: messages
      });
    }

    // Erreur générique si ce n'est pas une validation
    res.status(400).json({ 
      message: "Erreur lors de la création de la commande", 
      error: error.message 
    });
  }
};

// --- Récupérer toutes les commandes (GET) ---
exports.getAll = async (req, res) => { 
  try {
    const commandes = await Commande.find();
    res.status(200).json(commandes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// --- Récupérer une commande par son ID (GET) ---
exports.getById = async (req, res) => { 
  try {
    const commande = await Commande.findById(req.params.id);
    if (!commande) return res.status(404).json({ message: "Commande non trouvée" });
    res.status(200).json(commande);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// --- Mettre à jour le statut d'une commande (PATCH) ---
exports.updateStatut = async (req, res) => { 
  try {
    const commande = await Commande.findByIdAndUpdate(
      req.params.id, 
      { statut: req.body.statut }, 
      { new: true, runValidators: true }
    );
    if (!commande) return res.status(404).json({ message: "Commande non trouvée" });
    res.status(200).json(commande);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// --- Supprimer une commande (DELETE) ---
exports.delete = async (req, res) => { 
  try {
    const commande = await Commande.findByIdAndDelete(req.params.id);
    if (!commande) return res.status(404).json({ message: "Commande non trouvée" });
    res.status(200).json({ message: "Commande supprimée avec succès" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// --- Créer une nouvelle commande (POST) ---
exports.create = async (req, res) => {
  try {
    const nouvelleCommande = new Commande(req.body);
    const commandeEnregistree = await nouvelleCommande.save();
    
    // Résultat en cas de succès (201 Created)
    res.status(201).json(commandeEnregistree);
  } catch (error) {
    // ÉTAPE CRUCIALE : On vérifie si c'est une erreur de validation Mongoose
    if (error.name === 'ValidationError') {
      // On transforme l'objet d'erreur complexe en une liste de messages simples
      const messages = Object.values(error.errors).map(val => val.message);
      
      // On renvoie EXACTEMENT le format demandé par le TP
      return res.status(400).json({
        message: "Données invalides",
        erreurs: messages
      });
    }

    // Si c'est une autre erreur (ex: problème de connexion DB)
    res.status(500).json({ 
      message: "Erreur serveur lors de la création", 
      error: error.message 
    });
  }
};