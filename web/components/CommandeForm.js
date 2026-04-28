'use client';

import { useState } from 'react';
import { creerCommande } from '../lib/api';

export default function CommandeForm({ restaurant, plats }) {
  // États pour les infos client
  const [client, setClient] = useState('');
  const [telephone, setTelephone] = useState('');
  const [adresse, setAdresse] = useState('');
  const [commentaire, setCommentaire] = useState('');
  
  // État pour la sélection des plats (stocke les IDs)
  const [platsChoisis, setPlatsChoisis] = useState([]);
  
  // États pour l'interface
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fonction pour ajouter/retirer un plat
  const togglePlat = (platId) => {
    setPlatsChoisis((prev) =>
      prev.includes(platId)
        ? prev.filter((id) => id !== platId) // On retire si déjà présent
        : [...prev, platId] // On ajoute sinon
    );
  };

  // Calcul automatique du total en fonction des plats cochés
  const total = plats
    .filter((p) => platsChoisis.includes(p._id))
    .reduce((sum, p) => sum + p.prix, 0);

  // Soumission du formulaire à l'API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setLoading(true);

    try {
      await creerCommande({
        client,
        telephone,
        adresseLivraison: adresse,
        restaurant: restaurant._id,
        plats: platsChoisis,
        montantTotal: total,
        commentaire,
      });

      setMessage({
        type: 'success',
        text: 'Commande envoyée avec succès ! Retrouvez-la dans "Mes commandes".'
      });
      
      // Réinitialisation du formulaire
      setClient('');
      setTelephone('');
      setAdresse('');
      setCommentaire('');
      setPlatsChoisis([]);
    } catch (err) {
      setMessage({
        type: 'error',
        text: err.message
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="commande-form">
      <h2>Commander chez {restaurant.nom}</h2>

      {message && (
        <div className={`form-message ${message.type}`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Votre nom complet</label>
          <input
            type="text"
            value={client}
            onChange={(e) => setClient(e.target.value)}
            placeholder="ex: Aminata Sy"
            required
          />
        </div>

        <div className="form-group">
          <label>Téléphone</label>
          <input
            type="tel"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            placeholder="ex: 77 000 00 00"
            required
          />
        </div>

        <div className="form-group">
          <label>Adresse de livraison</label>
          <input
            type="text"
            value={adresse}
            onChange={(e) => setAdresse(e.target.value)}
            placeholder="ex: Plateau, Rue 12"
            required
          />
        </div>

        <div className="form-group">
          <label>Choisissez vos plats ({platsChoisis.length} sélectionné(s))</label>
          <div className="plats-selection">
            {plats.map((plat) => (
              <label 
                key={plat._id} 
                className={`plat-checkbox ${platsChoisis.includes(plat._id) ? 'selected' : ''}`}
              >
                <input
                  type="checkbox"
                  checked={platsChoisis.includes(plat._id)}
                  onChange={() => togglePlat(plat._id)}
                />
                <div className="plat-checkbox-info">
                  <div className="nom">{plat.nom}</div>
                  <div className="prix">{plat.prix.toLocaleString('fr-SN')} FCFA</div>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>Commentaire (optionnel)</label>
          <textarea
            value={commentaire}
            onChange={(e) => setCommentaire(e.target.value)}
            placeholder="ex: Pas d'oignons svp"
            rows={3}
          />
        </div>

        {platsChoisis.length > 0 && (
          <div className="total-section">
            <span>Total à payer</span>
            <span>{total.toLocaleString('fr-SN')} FCFA</span>
          </div>
        )}

        <button
          type="submit"
          className="btn-commander"
          disabled={loading || platsChoisis.length === 0}
        >
          {loading ? 'Envoi en cours...' : 'Confirmer la commande'}
        </button>
      </form>
    </div>
  );
}