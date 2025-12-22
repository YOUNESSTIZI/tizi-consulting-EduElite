# 📁 Configuration Google Drive - Guide Complet

Ce guide vous explique comment configurer Google Drive pour stocker vos PDFs.

## 📋 Prérequis

- Un compte Google
- Un projet Google Cloud Platform

## 🚀 Étapes de Configuration

### Étape 1 : Créer un Projet Google Cloud

1. Allez sur [Google Cloud Console](https://console.cloud.google.com/)
2. Cliquez sur le sélecteur de projet en haut
3. Cliquez sur **"Nouveau projet"**
4. Donnez un nom à votre projet (ex: "Application Edu PDFs")
5. Cliquez sur **"Créer"**

### Étape 2 : Activer l'API Google Drive

1. Dans votre projet, allez dans **"APIs & Services"** > **"Library"**
2. Recherchez **"Google Drive API"**
3. Cliquez dessus et appuyez sur **"Enable"** (Activer)

### Étape 3 : Créer un Service Account

1. Allez dans **"APIs & Services"** > **"Credentials"**
2. Cliquez sur **"Create Credentials"** > **"Service Account"**
3. Remplissez les informations :
   - **Service account name** : `pdf-storage` (ou un nom de votre choix)
   - **Service account ID** : généré automatiquement
   - **Description** : `Service account pour stocker les PDFs`
4. Cliquez sur **"Create and Continue"**
5. Pour **"Grant this service account access to project"**, choisissez **"Editor"** (ou créez un rôle personnalisé)
6. Cliquez sur **"Continue"** puis **"Done"**

### Étape 4 : Créer une Clé JSON

1. Dans la liste des Service Accounts, cliquez sur celui que vous venez de créer
2. Allez dans l'onglet **"Keys"**
3. Cliquez sur **"Add Key"** > **"Create new key"**
4. Sélectionnez **"JSON"**
5. Cliquez sur **"Create"**
6. **⚠️ IMPORTANT** : Un fichier JSON sera téléchargé. **Gardez-le en sécurité !**

### Étape 5 : Créer un Dossier Google Drive

1. Allez sur [Google Drive](https://drive.google.com)
2. Créez un nouveau dossier (ex: "PDFs Application Edu")
3. Cliquez avec le bouton droit sur le dossier > **"Partager"** (Share)
4. Dans le champ de recherche, entrez l'**email du Service Account** (trouvable dans le fichier JSON téléchargé, champ `client_email`)
   - Exemple : `pdf-storage@your-project.iam.gserviceaccount.com`
5. Donnez-lui les permissions **"Éditeur"** (Editor)
6. Cliquez sur **"Envoyer"** (Send)
7. **Copiez l'ID du dossier** depuis l'URL :
   - L'URL ressemble à : `https://drive.google.com/drive/folders/1a2b3c4d5e6f7g8h9i0j`
   - L'ID est la partie après `/folders/` : `1a2b3c4d5e6f7g8h9i0j`

### Étape 6 : Configurer les Variables d'Environnement

1. Ouvrez le fichier JSON téléchargé (celui du Service Account)
2. Copiez tout son contenu
3. Dans votre fichier `.env`, ajoutez :

```env
STORAGE_PROVIDER=google-drive
GOOGLE_DRIVE_FOLDER_ID=1a2b3c4d5e6f7g8h9i0j
GOOGLE_DRIVE_CREDENTIALS={"type":"service_account","project_id":"...","private_key_id":"...","private_key":"...","client_email":"...","client_id":"...","auth_uri":"...","token_uri":"...","auth_provider_x509_cert_url":"...","client_x509_cert_url":"..."}
```

**⚠️ Important** :
- Remplacez `1a2b3c4d5e6f7g8h9i0j` par votre vrai ID de dossier
- Le `GOOGLE_DRIVE_CREDENTIALS` doit être sur **une seule ligne** (sans retours à la ligne)
- Si vous avez des guillemets dans le JSON, échappez-les avec `\"`

**Alternative (plus sûre)** : Vous pouvez aussi stocker le JSON dans un fichier séparé et utiliser le chemin :

```env
STORAGE_PROVIDER=google-drive
GOOGLE_DRIVE_FOLDER_ID=1a2b3c4d5e6f7g8h9i0j
GOOGLE_DRIVE_CREDENTIALS_PATH=./google-credentials.json
```

### Étape 7 : Installer les Dépendances

```bash
npm install googleapis
```

### Étape 8 : Tester la Configuration

1. Redémarrez votre serveur de développement
2. L'application devrait maintenant utiliser Google Drive pour stocker et récupérer les PDFs

## 🔍 Vérification

Pour vérifier que tout fonctionne :

1. Vérifiez que le dossier Google Drive est bien partagé avec le Service Account
2. Vérifiez que les variables d'environnement sont correctement définies
3. Testez en accédant à un PDF existant dans votre application

## 🛠️ Dépannage

### Erreur : "GOOGLE_DRIVE_FOLDER_ID is required"
- Vérifiez que `GOOGLE_DRIVE_FOLDER_ID` est défini dans `.env`

### Erreur : "GOOGLE_DRIVE_CREDENTIALS is required"
- Vérifiez que `GOOGLE_DRIVE_CREDENTIALS` est défini dans `.env`
- Vérifiez que le JSON est valide (une seule ligne, guillemets échappés)

### Erreur : "File not found in Google Drive"
- Vérifiez que le dossier est bien partagé avec le Service Account
- Vérifiez que l'ID du dossier est correct
- Vérifiez que le fichier existe dans le dossier Google Drive

### Erreur : "googleapis package is required"
- Exécutez : `npm install googleapis`

### Erreur : "Permission denied"
- Vérifiez que le Service Account a les permissions "Éditeur" sur le dossier
- Vérifiez que l'API Google Drive est activée dans Google Cloud Console

## 📝 Structure du Fichier JSON

Le fichier JSON du Service Account ressemble à ceci :

```json
{
  "type": "service_account",
  "project_id": "your-project-id",
  "private_key_id": "...",
  "private_key": "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n",
  "client_email": "pdf-storage@your-project.iam.gserviceaccount.com",
  "client_id": "...",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "..."
}
```

## 🔐 Sécurité

- ⚠️ **Ne commitez JAMAIS** le fichier JSON des credentials dans Git
- ⚠️ Ajoutez `google-credentials.json` dans `.gitignore`
- ⚠️ Utilisez des variables d'environnement en production
- ⚠️ Limitez les permissions du Service Account au strict nécessaire

## 💡 Astuces

- Vous pouvez créer plusieurs dossiers pour organiser vos PDFs par catégorie
- Le Service Account peut accéder à plusieurs dossiers s'ils sont partagés avec lui
- Les fichiers uploadés via l'application apparaîtront dans votre Google Drive
