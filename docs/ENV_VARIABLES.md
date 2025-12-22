# Variables d'environnement

## Configuration requise pour l'envoi d'emails

Créez un fichier `.env.local` à la racine du projet avec les variables suivantes :

```env
# Resend API Configuration
# Obtenez votre clé API sur https://resend.com/api-keys
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx

# Email d'expéditeur (doit être vérifié dans Resend)
# Pour commencer, utilisez l'email par défaut de Resend
# Une fois votre domaine vérifié, changez pour: EduElite <contact@tizi-consulting.fr>
RESEND_FROM_EMAIL=EduElite <onboarding@resend.dev>

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
