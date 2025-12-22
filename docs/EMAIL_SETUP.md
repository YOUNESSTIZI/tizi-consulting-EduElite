# Configuration de l'envoi d'emails

Ce guide explique comment configurer l'envoi d'emails pour le formulaire de contact.

## Service utilisé : Resend

Nous utilisons [Resend](https://resend.com) pour l'envoi d'emails. C'est un service moderne, fiable et facile à intégrer avec Next.js.

## Étapes de configuration

### 1. Créer un compte Resend

1. Allez sur [https://resend.com](https://resend.com)
2. Créez un compte gratuit (100 emails/jour en gratuit)
3. Vérifiez votre email

### 2. Obtenir votre clé API

1. Connectez-vous à votre compte Resend
2. Allez dans **API Keys** dans le menu
3. Cliquez sur **Create API Key**
4. Donnez un nom à votre clé (ex: "EduElite Production")
5. Copiez la clé API (elle commence par `re_`)

### 3. Vérifier votre domaine (Optionnel mais recommandé)

Pour utiliser votre propre domaine d'email (ex: `contact@tizi-consulting.fr`) :

1. Allez dans **Domains** dans Resend
2. Cliquez sur **Add Domain**
3. Entrez votre domaine (ex: `tizi-consulting.fr`)
4. Suivez les instructions pour ajouter les enregistrements DNS
5. Attendez la vérification (peut prendre quelques minutes)

**Note** : Pour l'instant, utilisez l'email par défaut de Resend : `onboarding@resend.dev` ou votre email Gmail : `younesstizi7@gmail.com`

### 4. Configurer les variables d'environnement

#### En local (développement)

Créez un fichier `.env.local` à la racine du projet :

```env
RESEND_API_KEY=re_votre_cle_api_ici
RESEND_FROM_EMAIL=EduElite <onboarding@resend.dev>
CONTACT_EMAIL=younesstizi7@gmail.com
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

#### Sur Vercel (production)

1. Allez dans votre projet Vercel
2. Cliquez sur **Settings** > **Environment Variables**
3. Ajoutez les variables suivantes :
   - `RESEND_API_KEY` : Votre clé API Resend
   - `RESEND_FROM_EMAIL` : L'email d'expéditeur (ex: `EduElite <onboarding@resend.dev>`)
   - `CONTACT_EMAIL` : L'email où recevoir les demandes (ex: `younesstizi7@gmail.com`)
   - `NEXT_PUBLIC_APP_URL` : L'URL de votre application (ex: `https://eduelite.vercel.app`)

### 5. Tester l'envoi d'emails

1. Démarrez votre application : `npm run dev`
2. Allez sur la page de contact : `/contact`
3. Remplissez le formulaire
4. Soumettez le formulaire
5. Vérifiez que :
   - Vous recevez un email de confirmation
   - L'email de contact reçoit la demande

## Fonctionnalités

### Emails envoyés

1. **Email à l'administrateur** (`CONTACT_EMAIL`)
   - Contient toutes les informations du formulaire
   - Permet de répondre directement au client (reply-to configuré)

2. **Email de confirmation au client**
   - Confirme la réception de la demande
   - Contient un récapitulatif
   - Inclut des liens utiles

### Sécurité

- Validation des champs côté serveur
- Validation du format d'email
- Protection contre les erreurs
- Gestion des erreurs avec messages clairs

## Dépannage

### L'email n'est pas envoyé

1. Vérifiez que `RESEND_API_KEY` est correctement configurée
2. Vérifiez les logs dans la console du serveur
3. Vérifiez que votre domaine est vérifié dans Resend (si vous utilisez un domaine personnalisé)
4. Vérifiez que vous n'avez pas dépassé la limite d'emails gratuits (100/jour)

### Erreur "Invalid API key"

- Vérifiez que la clé API commence bien par `re_`
- Vérifiez que la clé n'a pas expiré
- Régénérez une nouvelle clé si nécessaire

### L'email arrive en spam

- Vérifiez votre domaine dans Resend
- Ajoutez les enregistrements SPF et DKIM
- Utilisez un domaine vérifié plutôt que `onboarding@resend.dev`

## Alternatives

Si vous préférez utiliser un autre service :

- **Nodemailer avec Gmail/SMTP** : Configuration SMTP classique
- **SendGrid** : Alternative populaire à Resend
- **Mailgun** : Service d'email transactionnel

Pour utiliser une alternative, modifiez le fichier `app/api/contact/route.ts`.
