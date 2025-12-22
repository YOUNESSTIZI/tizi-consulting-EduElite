# Variables d'environnement

## Configuration requise pour l'envoi d'emails

Créez un fichier `.env.local` à la racine du projet avec les variables suivantes :

```env
# Resend API Configuration
# Obtenez votre clé API sur https://resend.com/api-keys
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx

# Email d'expéditeur
# Option 1: Utiliser votre Gmail (recommandé pour commencer)
RESEND_FROM_EMAIL=EduElite <younesstizi7@gmail.com>
# Option 2: Utiliser l'email par défaut de Resend (si Gmail ne fonctionne pas)
# RESEND_FROM_EMAIL=EduElite <onboarding@resend.dev>
# Option 3: Une fois votre domaine vérifié dans Resend
# RESEND_FROM_EMAIL=EduElite <contact@tizi-consulting.fr>

# Email de réception des demandes de contact
CONTACT_EMAIL=younesstizi7@gmail.com

# URL de l'application (pour les liens dans les emails)
NEXT_PUBLIC_APP_URL=https://eduelite.vercel.app
```

## Configuration sur Vercel

1. Allez dans votre projet Vercel
2. **Settings** > **Environment Variables**
3. Ajoutez toutes les variables ci-dessus

Voir `docs/EMAIL_SETUP.md` pour les instructions détaillées.
