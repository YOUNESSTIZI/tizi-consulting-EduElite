# 🔧 Configuration du Stockage

## Variables d'Environnement

Ajoutez ces variables dans votre fichier `.env` :

```env
# Configuration de l'application
JWT_SECRET=your-secret-key-change-in-production
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# ============================================
# CONFIGURATION DU STOCKAGE
# ============================================
# Options: local, google-drive, s3, supabase
STORAGE_PROVIDER=local

# ============================================
# GOOGLE DRIVE (si STORAGE_PROVIDER=google-drive)
# ============================================
# GOOGLE_DRIVE_FOLDER_ID=your-folder-id
# GOOGLE_DRIVE_CREDENTIALS={"type":"service_account",...}

# ============================================
# AWS S3 (si STORAGE_PROVIDER=s3)
# ============================================
# AWS_S3_BUCKET_NAME=your-bucket-name
# AWS_REGION=us-east-1
# AWS_ACCESS_KEY_ID=your-access-key
# AWS_SECRET_ACCESS_KEY=your-secret-key

# ============================================
# SUPABASE STORAGE (si STORAGE_PROVIDER=supabase)
# ============================================
# SUPABASE_URL=https://your-project.supabase.co
# SUPABASE_ANON_KEY=your-anon-key
# SUPABASE_STORAGE_BUCKET=pdfs
```

## Guide Rapide par Provider

### 1. Local (Par défaut)
Aucune configuration supplémentaire nécessaire.

### 2. Google Drive
Voir `docs/STORAGE_OPTIONS.md` pour les instructions détaillées.

### 3. Supabase (Recommandé)
1. Créez un compte sur [supabase.com](https://supabase.com)
2. Créez un projet
3. Créez un bucket "pdfs" dans Storage
4. Configurez les variables d'environnement
5. Installez : `npm install @supabase/supabase-js`

### 4. AWS S3
1. Créez un bucket S3
2. Configurez les credentials IAM
3. Configurez les variables d'environnement
4. Installez : `npm install @aws-sdk/client-s3`
