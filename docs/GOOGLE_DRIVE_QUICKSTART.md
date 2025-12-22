# 🚀 Google Drive - Démarrage Rapide

## Installation

Le package `googleapis` est déjà installé. ✅

## Configuration en 5 Minutes

### 1. Créer un Service Account (2 min)

1. Allez sur [Google Cloud Console](https://console.cloud.google.com/)
2. Créez un projet ou sélectionnez-en un
3. Activez l'API **Google Drive API**
4. Créez un **Service Account** :
   - APIs & Services > Credentials > Create Credentials > Service Account
   - Nom : `pdf-storage`
   - Rôle : Editor
5. Créez une clé JSON :
   - Dans le Service Account > Keys > Add Key > Create new key > JSON
   - **Téléchargez le fichier JSON**

### 2. Créer un Dossier Google Drive (1 min)

1. Allez sur [Google Drive](https://drive.google.com)
2. Créez un dossier (ex: "PDFs Application")
3. Partagez-le avec l'email du Service Account (dans le JSON, champ `client_email`)
   - Permissions : **Éditeur**
4. Copiez l'ID du dossier depuis l'URL :
   - URL : `https://drive.google.com/drive/folders/1a2b3c4d5e6f7g8h9i0j`
   - ID : `1a2b3c4d5e6f7g8h9i0j`

### 3. Configurer .env (1 min)

Ajoutez dans votre fichier `.env` :

```env
STORAGE_PROVIDER=google-drive
GOOGLE_DRIVE_FOLDER_ID=votre-id-de-dossier
GOOGLE_DRIVE_CREDENTIALS={"type":"service_account","project_id":"...","private_key":"...","client_email":"..."}
```

**Important** : 
- Remplacez `votre-id-de-dossier` par l'ID copié
- Collez le contenu complet du fichier JSON téléchargé (sur une seule ligne)
- Échappez les guillemets si nécessaire : `\"`

### 4. Redémarrer (1 min)

```bash
npm run dev
```

C'est tout ! 🎉

## Vérification

1. Placez un PDF dans votre dossier Google Drive
2. Ajoutez-le dans `data/pdfs.json` avec le bon `filename`
3. Accédez à `/books/[id]` dans votre application
4. Le PDF devrait se charger depuis Google Drive !

## Besoin d'aide ?

Consultez le guide complet : `docs/GOOGLE_DRIVE_SETUP.md`
