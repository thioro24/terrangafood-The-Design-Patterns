// Mapping statut → classe CSS
const statutClasses = {
  'en attente': 'statut-en-attente',
  'confirmée': 'statut-confirmee',
  'en livraison': 'statut-en-livraison',
  'livrée': 'statut-livree',
  'annulée': 'statut-annulee',
};

// Mapping statut → emoji
const statutEmojis = {
  'en attente': '⏳',
  'confirmée': '✅',
  'en livraison': '🚚',
  'livrée': '📦',
  'annulée': '❌',
};

export default function StatutBadge({ statut }) {
  const classe = statutClasses[statut] || '';
  const emoji = statutEmojis[statut] || '';

  return (
    <span className={`statut-badge ${classe}`}>
      {emoji} {statut}
    </span>
  );
}