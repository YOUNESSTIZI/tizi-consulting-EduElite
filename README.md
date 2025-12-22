# Application Éducative - Lecteur de PDFs

Application web et mobile moderne pour la lecture de PDFs éducatifs avec système d'authentification et protection contre le téléchargement.

## Fonctionnalités

- 🔐 Système d'authentification (inscription/connexion)
- 📚 Catalogue de livres visible par tous les visiteurs
- 📖 Lecteur PDF intégré en lecture seule
- 🛡️ Protection contre le téléchargement des PDFs
- 🎓 Organisation par niveau scolaire et matières
- 📱 Interface responsive (web et mobile)

## Technologies

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Authentification**: JWT
- **Base de données**: JSON (peut être migré vers PostgreSQL/MongoDB)
- **PDF Viewer**: react-pdf avec PDF.js

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

L'application sera accessible sur http://localhost:3000

## Structure du projet

- `/app` - Pages et routes Next.js
- `/components` - Composants React réutilisables
- `/lib` - Utilitaires et configurations
- `/public` - Fichiers statiques
- `/uploads` - PDFs uploadés (non versionné)

## Sécurité

- Les PDFs sont servis via des routes API protégées
- Désactivation du téléchargement dans le lecteur PDF
- Authentification JWT pour les utilisateurs
- Watermarking optionnel des PDFs

