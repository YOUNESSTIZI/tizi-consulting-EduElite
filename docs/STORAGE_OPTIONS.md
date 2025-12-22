# 📦 Options de Stockage pour les PDFs

Ce document décrit les différentes options de stockage disponibles pour votre application.

## 🎯 Comparaison des Options

| Option | Gratuit | Limite Gratuite | Avantages | Inconvénients |
|--------|---------|-----------------|-----------|---------------|
| **Local** | ✅ | Illimité | Simple, rapide, pas de dépendance externe | Pas de sauvegarde automatique, limité au serveur |
| **Google Drive** | ✅ | 15 GB | Intégration facile, partage simple | Limite de quota, nécessite authentification |
| **Supabase Storage** | ✅ | 1 GB | Gratuit jusqu'à 1GB, API simple | Limite après 1GB |
| **AWS S3** | ✅ | 5 GB (12 mois) | Très fiable, scalable | Complexe à configurer, payant après |
| **Cloudinary** | ✅ | 25 GB | Optimisation automatique | Principalement pour images |
| **Firebase Storage** | ✅ | 5 GB | Intégration Google facile | Payant après 5GB |

## 🚀 Configuration

### 1. Stockage Local (Par défaut)

Aucune configuration nécessaire. Les fichiers sont stockés dans `uploads/`.

```env
STORAGE_PROVIDER=local
```

### 2. Google Drive

#### Étape 1 : Créer un projet Google Cloud

1. Allez sur [Google Cloud Console](https://console.cloud.google.com/)
2. Créez un nouveau projet
3. Activez l'API Google Drive

#### Étape 2 : Créer des credentials

1. Allez dans "APIs & Services" > "Credentials"
2. Créez un "Service Account"
3. Téléchargez le fichier JSON des credentials
4. Partagez un dossier Google Drive avec l'email du service account

#### Étape 3 : Configuration

```env
STORAGE_PROVIDER=google-drive
GOOGLE_DRIVE_FOLDER_ID=your-folder-id
GOOGLE_DRIVE_CREDENTIALS={"type":"service_account",...}
```

#### Étape 4 : Installer les dépendances

```bash
npm install googleapis
```

### 3. Supabase Storage (Recommandé pour gratuit)

#### Étape 1 : Créer un compte Supabase

1. Allez sur [supabase.com](https://supabase.com)
2. Créez un compte gratuit
3. Créez un nouveau projet

#### Étape 2 : Créer un bucket

1. Allez dans "Storage"
2. Créez un bucket nommé `pdfs`
3. Configurez les politiques de sécurité

#### Étape 3 : Configuration

```env
STORAGE_PROVIDER=supabase
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_STORAGE_BUCKET=pdfs
```

#### Étape 4 : Installer les dépendances

```bash
npm install @supabase/supabase-js
```

### 4. AWS S3

#### Étape 1 : Créer un bucket S3

1. Allez sur [AWS Console](https://console.aws.amazon.com/)
2. Créez un bucket S3
3. Configurez les permissions

#### Étape 2 : Créer des credentials IAM

1. Créez un utilisateur IAM avec accès S3
2. Générez des clés d'accès

#### Étape 3 : Configuration

```env
STORAGE_PROVIDER=s3
AWS_S3_BUCKET_NAME=your-bucket-name
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
```

#### Étape 4 : Installer les dépendances

```bash
npm install @aws-sdk/client-s3
```

## 🔄 Migration

Pour migrer d'un provider à un autre :

1. Changez `STORAGE_PROVIDER` dans `.env`
2. Redémarrez l'application
3. Les nouveaux uploads utiliseront le nouveau provider
4. Les anciens fichiers restent sur l'ancien provider (vous pouvez les migrer manuellement)

## 💡 Recommandations

### Pour un projet personnel/petit :
- **Supabase Storage** : 1GB gratuit, très simple à configurer

### Pour un projet professionnel :
- **AWS S3** : Plus fiable, scalable, mais plus complexe

### Pour une intégration Google :
- **Google Drive** : Si vous utilisez déjà l'écosystème Google

### Pour le développement :
- **Local** : Le plus simple, pas de configuration

## 🔐 Sécurité

Tous les providers utilisent l'API route `/api/pdf/[filename]` qui :
- Vérifie l'authentification
- Applique les headers de protection
- Ne permet pas le téléchargement direct

Les URLs publiques ne sont jamais exposées directement.

## 📊 Coûts Estimés

### Supabase (après 1GB gratuit)
- 1-10 GB : ~$0.021/GB/mois
- 10-100 GB : ~$0.018/GB/mois

### AWS S3 (après 12 mois gratuits)
- Standard : ~$0.023/GB/mois
- Transfert : ~$0.09/GB

### Google Drive
- 15 GB gratuit
- 100 GB : ~$2/mois
- 200 GB : ~$3/mois
