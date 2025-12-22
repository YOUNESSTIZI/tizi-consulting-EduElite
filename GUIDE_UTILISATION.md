# Guide d'Utilisation - Application Éducative

## 🚀 Démarrage Rapide

### Installation

```bash
# Installer les dépendances
npm install

# Créer le fichier .env (copier .env.example)
cp .env.example .env

# Lancer l'application en mode développement
npm run dev
```

L'application sera accessible sur http://localhost:3000

## 📋 Fonctionnalités

### Pour les Visiteurs (sans compte)
- ✅ Visualiser le catalogue de tous les livres
- ✅ Rechercher des livres par titre, niveau, matière
- ✅ Filtrer par niveau scolaire (CP, CE1, CE2, etc.)
- ✅ Filtrer par matière (Mathématiques, Français, etc.)
- ✅ Consulter les détails des livres

### Pour les Lecteurs (avec compte)
- ✅ Toutes les fonctionnalités des visiteurs
- ✅ Accès au dashboard personnel
- ✅ Historique de lecture (à venir)
- ✅ Favoris (à venir)
- ✅ Notifications (à venir)

## 📚 Ajouter des PDFs

### Méthode 1 : Via le système de fichiers

1. **Placer le PDF dans le dossier `uploads/`**
   ```bash
   # Créer le dossier s'il n'existe pas
   mkdir -p uploads
   
   # Copier votre PDF
   cp votre-livre.pdf uploads/mon-livre.pdf
   ```

2. **Ajouter les métadonnées dans `data/pdfs.json`**
   ```json
   {
     "id": "unique-id",
     "title": "Titre du livre",
     "description": "Description optionnelle",
     "level": "CP",
     "subject": "Mathématiques",
     "filename": "mon-livre.pdf",
     "uploadDate": "2024-01-20T10:00:00Z"
   }
   ```

### Méthode 2 : Via l'API (à implémenter)

Un endpoint d'upload sera disponible pour les administrateurs.

## 🛡️ Protection des PDFs

L'application implémente plusieurs niveaux de protection :

1. **Protection côté serveur**
   - Les PDFs sont servis via des routes API protégées
   - Headers HTTP pour empêcher le téléchargement
   - Pas d'accès direct aux fichiers

2. **Protection côté client**
   - Désactivation du menu contextuel (clic droit)
   - Désactivation de la sélection de texte
   - Désactivation des raccourcis clavier (Ctrl+S, Ctrl+P, etc.)
   - Lecteur PDF intégré sans bouton de téléchargement

3. **Recommandations supplémentaires**
   - Utiliser un service de watermarking pour ajouter des marques d'eau
   - Implémenter un système de DRM pour une protection avancée
   - Utiliser un CDN avec protection pour servir les PDFs

## 🗄️ Base de Données

Actuellement, l'application utilise des fichiers JSON pour le stockage :
- `data/pdfs.json` : Métadonnées des livres
- Mémoire : Utilisateurs et mots de passe hashés

**Pour la production**, migrer vers :
- PostgreSQL ou MongoDB pour les utilisateurs et métadonnées
- AWS S3, Cloudinary, ou similaire pour le stockage des PDFs
- Redis pour les sessions

## 🔐 Authentification

- **Inscription** : `/login` (bouton "S'inscrire")
- **Connexion** : `/login`
- **Déconnexion** : Bouton dans la navbar
- **Sessions** : JWT avec cookies httpOnly (7 jours)

## 📱 Responsive Design

L'application est entièrement responsive et fonctionne sur :
- 📱 Mobile (iOS, Android)
- 📱 Tablettes
- 💻 Desktop
- 🌐 Tous les navigateurs modernes

## 🎨 Personnalisation

### Couleurs
Modifier `tailwind.config.js` pour changer le thème de couleurs.

### Logo et Branding
- Remplacer l'icône dans `components/Navbar.tsx`
- Modifier les métadonnées dans `app/layout.tsx`

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
npm install -g vercel
vercel
```

### Autres plateformes
- Netlify
- AWS Amplify
- Docker + VPS

### Variables d'environnement à configurer
- `JWT_SECRET` : Clé secrète pour les tokens JWT
- `NEXT_PUBLIC_BASE_URL` : URL de base de l'application

## 📝 Structure des Niveaux Scolaires

Niveaux recommandés :
- **Maternelle** : PS, MS, GS
- **Primaire** : CP, CE1, CE2, CM1, CM2
- **Collège** : 6ème, 5ème, 4ème, 3ème
- **Lycée** : 2nde, 1ère, Terminale

## 📝 Matières Recommandées

- Mathématiques
- Français
- Histoire
- Géographie
- Sciences
- Anglais
- Espagnol
- Physique-Chimie
- SVT (Sciences de la Vie et de la Terre)

## 🔧 Dépannage

### Les PDFs ne s'affichent pas
1. Vérifier que le fichier existe dans `uploads/`
2. Vérifier que le nom de fichier dans `pdfs.json` correspond
3. Vérifier les permissions du dossier `uploads/`

### Erreur d'authentification
1. Vérifier que le cookie est bien défini
2. Vérifier la variable `JWT_SECRET` dans `.env`
3. Vider les cookies et réessayer

### Problèmes de build
```bash
# Nettoyer et réinstaller
rm -rf node_modules .next
npm install
npm run build
```

## 📞 Support

Pour toute question ou problème, consultez la documentation ou créez une issue.

