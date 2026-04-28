// === Fonctions d'appel à l'API TerrangaFood ===

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

// Récupérer tous les restaurants
export async function getRestaurants() {
  const res = await fetch(`${API_URL}/restaurants`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Impossible de récupérer les restaurants');
  }
  return res.json();
}

// Récupérer un restaurant par son ID
export async function getRestaurant(id) {
  const res = await fetch(`${API_URL}/restaurants/${id}`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Restaurant non trouvé');
  }
  return res.json();
}

// Récupérer les plats d'un restaurant
export async function getPlatsByRestaurant(restaurantId) {
  const res = await fetch(`${API_URL}/plats/restaurant/${restaurantId}`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Impossible de récupérer les plats');
  }
  return res.json();
}

// Récupérer tous les plats
export async function getPlats() {
  const res = await fetch(`${API_URL}/plats`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Impossible de récupérer les plats');
  }
  return res.json();
}
// === COMMANDES ===
export async function creerCommande(commande) {
  const res = await fetch(`${API_URL}/commandes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(commande),
  });
  if (!res.ok) {
    const erreur = await res.json();
    throw new Error(erreur.message || 'Erreur commande');
  }
  return res.json();
}

export async function getCommandes() {
  const res = await fetch(`${API_URL}/commandes`, { 
    cache: 'no-store' 
  });
  if (!res.ok) throw new Error('Impossible de récupérer les commandes');
  return res.json();
}

export async function getCommande(id) {
  const res = await fetch(`${API_URL}/commandes/${id}`, { 
    cache: 'no-store' 
  });
  if (!res.ok) throw new Error('Commande non trouvée');
  return res.json();
}