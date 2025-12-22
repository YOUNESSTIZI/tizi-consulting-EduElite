# Architecture de l'Application

## 🏗️ Vue d'ensemble

Cette application est construite avec **Next.js 14** (App Router), **React**, **TypeScript**, et **Tailwind CSS**.

## 📁 Structure du Projet

```
application-edu/
├── app/                    # Pages et routes Next.js
│   ├── api/               # Routes API
│   │   ├── auth/         # Authentification
│   │   ├── books/        # Gestion des livres
│   │   └── pdf/          # Service de PDFs protégés
│   ├── books/            # Pages de la bibliothèque
│   ├── dashboard/        # Dashboard utilisateur
│   ├── login/            # Page de connexion/inscription
│   ├── layout.tsx        # Layout principal
│   ├── page.tsx          # Page d'accueil
│   └── globals.css       # Styles globaux
│
├── components/            # Composants React réutilisables
│   ├── AuthProvider.tsx  # Context d'authentification
│   ├── Navbar.tsx        # Barre de navigation
│   └── ProtectedPDFViewer.tsx  # Lecteur PDF sécurisé
│
├── lib/                   # Utilitaires et logique métier
│   ├── auth.ts           # Fonctions d'authentification
│   └── pdf-storage.ts    # Gestion du stockage PDF
│
├── data/                  # Données JSON (métadonnées)
│   └── pdfs.json         # Liste des livres
│
├── uploads/              # PDFs uploadés (non versionné)
│
├── public/               # Fichiers statiques
│
└── scripts/              # Scripts utilitaires
    └── init.js           # Script d'initialisation
```

## 🔐 Système d'Authentification

### Flux d'authentification

1. **Inscription** (`POST /api/auth/register`)
   - Hash du mot de passe avec bcrypt
   - Création de l'utilisateur
   - Génération d'un JWT
   - Définition d'un cookie httpOnly

2. **Connexion** (`POST /api/auth/login`)
   - Vérification de l'email
   - Vérification du mot de passe (bcrypt)
   - Génération d'un JWT
   - Définition d'un cookie httpOnly

3. **Vérification** (`GET /api/auth/me`)
   - Lecture du cookie
   - Vérification du JWT
   - Retour des informations utilisateur

### Sécurité

- ✅ Mots de passe hashés avec bcrypt (10 rounds)
- ✅ JWT avec expiration (7 jours)
- ✅ Cookies httpOnly (pas accessible en JavaScript)
- ✅ Secure flag en production
- ✅ SameSite protection

## 📚 Gestion des PDFs

### Stockage

- **Fichiers** : Dossier `uploads/` (non versionné)
- **Métadonnées** : Fichier JSON `data/pdfs.json`

### Structure des métadonnées

```typescript
interface PDFBook {
  id: string;              // Identifiant unique
  title: string;           // Titre du livre
  description?: string;    // Description optionnelle
  level: string;           // Niveau scolaire (CP, CE1, etc.)
  subject: string;         // Matière (Mathématiques, etc.)
  filename: string;        // Nom du fichier PDF
  uploadDate: string;      // Date d'upload (ISO)
  thumbnail?: string;      // Image de couverture (optionnel)
}
```

### Service de PDFs

Les PDFs sont servis via `/api/pdf/[filename]` avec :
- Headers de protection (no-download)
- Vérification de l'existence du fichier
- Streaming sécurisé

## 🛡️ Protection Anti-Téléchargement

### Niveau 1 : Serveur
- Headers HTTP (`Content-Disposition: inline`)
- Pas d'accès direct aux fichiers
- Vérification des permissions

### Niveau 2 : Client
- Désactivation du menu contextuel
- Désactivation de la sélection
- Désactivation des raccourcis clavier (Ctrl+S, Ctrl+P)
- Lecteur PDF intégré sans bouton de téléchargement

### Niveau 3 : Recommandations
- Watermarking des PDFs
- DRM avancé (optionnel)
- CDN avec protection

## 🎨 Interface Utilisateur

### Design System
- **Framework CSS** : Tailwind CSS
- **Icônes** : Lucide React
- **Couleurs** : Palette primary (bleu)
- **Responsive** : Mobile-first

### Pages Principales

1. **Accueil** (`/`)
   - Hero section
   - Présentation des fonctionnalités
   - Call-to-action

2. **Bibliothèque** (`/books`)
   - Liste des livres
   - Recherche et filtres
   - Accessible aux visiteurs

3. **Lecteur PDF** (`/books/[id]`)
   - Lecteur intégré
   - Contrôles de navigation
   - Protection active

4. **Dashboard** (`/dashboard`)
   - Statistiques
   - Actions rapides
   - Livres récents
   - Requiert authentification

5. **Connexion** (`/login`)
   - Formulaire d'inscription/connexion
   - Gestion des erreurs
   - Redirection automatique

## 🔄 Flux de Données

### Client → Serveur
- Requêtes API REST
- Authentification via cookies
- Formulaires React

### Serveur → Client
- JSON responses
- Streaming PDF
- Cookies d'authentification

## 🚀 Optimisations

### Performance
- Next.js App Router (React Server Components)
- Lazy loading des composants
- Optimisation des images
- Cache des métadonnées

### Sécurité
- Validation des inputs
- Protection CSRF (via SameSite)
- Rate limiting (à implémenter)
- Sanitization des données

## 📱 Mobile

L'application est entièrement responsive :
- Design mobile-first
- Touch-friendly
- Optimisé pour petits écrans
- PWA-ready (à implémenter)

## 🔮 Évolutions Futures

### Court terme
- [ ] Système d'upload de PDFs
- [ ] Interface d'administration
- [ ] Historique de lecture
- [ ] Favoris

### Moyen terme
- [ ] Migration vers PostgreSQL
- [ ] Stockage cloud (S3, Cloudinary)
- [ ] Watermarking automatique
- [ ] Analytics

### Long terme
- [ ] Application mobile native (React Native)
- [ ] Système de DRM avancé
- [ ] Mode hors-ligne (PWA)
- [ ] Recommandations IA

## 🧪 Tests

À implémenter :
- Tests unitaires (Jest)
- Tests d'intégration
- Tests E2E (Playwright)
- Tests de sécurité

## 📊 Monitoring

À implémenter :
- Logging (Winston, Pino)
- Error tracking (Sentry)
- Analytics (Google Analytics, Plausible)
- Performance monitoring

