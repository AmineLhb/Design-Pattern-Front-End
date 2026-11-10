# Design Pattern Pizzeria — Front-End (Angular)

Interface Angular de l'application de commande de pizzas. Elle consomme l'API REST Spring Boot du projet
[Design-Pattern-Back-End](https://github.com/AmineLhb/Design-Pattern-Back-End).
Projet académique réalisé à l'ENSA Fès (2022).

## Pages

| Route | Composant | Contenu |
|---|---|---|
| `/home` | `HomeComponent` | Page d'accueil |
| `/chefs` | `ChefComponent` | Liste et inscription des chefs |
| `/commande` | `ClientComponent` | Formulaire de commande (client, pizza, restaurant, chef) |

Les appels HTTP vers l'API sont centralisés dans `src/app/Services/service.service.ts` (`HttpClient`).

## Stack

Angular 12, TypeScript, Bootstrap 5, Bootstrap Icons.

## Lancer le projet

1. Démarrer d'abord le back-end sur `http://localhost:8080`.
2. Installer les dépendances et lancer le serveur de développement :
   ```bash
   npm install
   npx ng serve
   ```
3. Ouvrir `http://localhost:4200`.
