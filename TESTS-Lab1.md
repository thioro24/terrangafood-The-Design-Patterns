# Rapport de tests -- Lab 1
2
3 ## Équipe : The Design Patterns
4 ## Testeur : Thioro ( QA )
5
6 | # | Test | R é sultat | Notes |
8 | 1 | POST commande valide |succes |Vérifier le status 201 Created |
9 | 2 | POST commande sans client | succes|Doit retourner 400 Bad Request|
10 | 3 | GET toutes les commandes | succes|Vérifier que c'est un tableau JSON |
11 | 4 | GET commande par ID |succes |Doit retourner l'objet complet|
12 | 5 | GET commande ID inexistant |succes |Doit retourner 404 Not Found|
13 | 6 | PATCH en attente → confirm é e | succes|Transition autoriséeTransition autorisée |
14 | 7 | PATCH confirm é e → en livraison |succes|Transition autorisée |
15 | 8 | PATCH en livraison → livr é e |succes | en attente vers livrée directement|
16 | 9 | PATCH transition interdite |echec |Bloquer toute modification après livraison |
17 | 10| PATCH commande livr ée | echec|Vérifier la suppression en DB |
18 | 11| DELETE commande | Vérifier que l'objet restaurant est inclus|
19 | 12| Populate restaurant visible |Vérifier que le tableau de plats est détaillé |
20 | 13| Populate plats visible
