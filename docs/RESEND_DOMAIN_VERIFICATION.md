# Guide de Vérification de Domaine Resend

Ce guide vous explique comment vérifier votre domaine `tizi-consulting.fr` dans Resend pour utiliser `contact@tizi-consulting.fr` comme email d'expéditeur.

## Pourquoi vérifier votre domaine ?

- ✅ Utiliser votre propre email professionnel (`contact@tizi-consulting.fr`)
- ✅ Meilleure délivrabilité (moins de spam)
- ✅ Image de marque professionnelle
- ✅ Plus de crédibilité

## Étapes de vérification

### 1. Se connecter à Resend

1. Allez sur [https://resend.com](https://resend.com)
2. Connectez-vous à votre compte
3. Allez dans le menu **Domains** (ou **Settings** > **Domains**)

### 2. Ajouter votre domaine

1. Cliquez sur **Add Domain** ou **+ Add Domain**
2. Entrez votre domaine : `tizi-consulting.fr`
   - ⚠️ **Important** : Entrez seulement `tizi-consulting.fr` (sans `www.` ni `http://`)
3. Cliquez sur **Add Domain**

### 3. Obtenir les enregistrements DNS

Resend va vous donner **3 types d'enregistrements DNS** à ajouter :

#### A. Enregistrement SPF (TXT)
```
Type: TXT
Name: @ (ou tizi-consulting.fr)
Value: v=spf1 include:resend.com ~all
TTL: 3600 (ou Auto)
```

#### B. Enregistrement DKIM (TXT)
```
Type: TXT
Name: resend._domainkey (ou resend._domainkey.tizi-consulting.fr)
Value: [Une longue chaîne fournie par Resend]
TTL: 3600 (ou Auto)
```

#### C. Enregistrement DMARC (TXT) - Optionnel mais recommandé
```
Type: TXT
Name: _dmarc (ou _dmarc.tizi-consulting.fr)
Value: v=DMARC1; p=none; rua=mailto:contact@tizi-consulting.fr
TTL: 3600 (ou Auto)
```

### 4. Ajouter les enregistrements dans OVH

1. **Connectez-vous à OVH** : [https://www.ovh.com](https://www.ovh.com)
2. Allez dans votre **Espace Client**
3. Sélectionnez votre domaine `tizi-consulting.fr`
4. Allez dans **Zone DNS** ou **DNS**
5. Cliquez sur **Ajouter une entrée** ou **+**

#### Pour chaque enregistrement :

**Enregistrement SPF :**
- Type : `TXT`
- Sous-domaine : `@` (ou laissez vide)
- Valeur : `v=spf1 include:resend.com ~all`
- TTL : `3600` (ou par défaut)

**Enregistrement DKIM :**
- Type : `TXT`
- Sous-domaine : `resend._domainkey`
- Valeur : *(Copiez la valeur exacte fournie par Resend)*
- TTL : `3600` (ou par défaut)

**Enregistrement DMARC (optionnel) :**
- Type : `TXT`
- Sous-domaine : `_dmarc`
- Valeur : `v=DMARC1; p=none; rua=mailto:contact@tizi-consulting.fr`
- TTL : `3600` (ou par défaut)

### 5. Attendre la propagation DNS

- ⏱️ **Délai** : 5 minutes à 48 heures (généralement 15-30 minutes)
- 🔄 **Vérification** : Resend vérifie automatiquement toutes les 5-10 minutes
- 📧 **Notification** : Vous recevrez un email quand le domaine sera vérifié

### 6. Vérifier le statut dans Resend

1. Retournez dans **Domains** sur Resend
2. Le statut devrait passer de **Pending** à **Verified** ✅
3. Une fois vérifié, vous pouvez utiliser `contact@tizi-consulting.fr`

## Configuration après vérification

Une fois le domaine vérifié, mettez à jour vos variables d'environnement :

### Sur Vercel :
```
RESEND_FROM_EMAIL=EduElite <contact@tizi-consulting.fr>
CONTACT_EMAIL=contact@tizi-consulting.fr
```

### En local (.env.local) :
```env
RESEND_FROM_EMAIL=EduElite <contact@tizi-consulting.fr>
CONTACT_EMAIL=contact@tizi-consulting.fr
```

## Dépannage

### Le domaine n'est pas vérifié après 24h

1. **Vérifiez les enregistrements DNS** :
   - Utilisez [MXToolbox](https://mxtoolbox.com/TXTLookup.aspx) pour vérifier
   - Tapez `tizi-consulting.fr` et vérifiez que les enregistrements TXT apparaissent

2. **Vérifiez la syntaxe** :
   - Pas d'espaces supplémentaires
   - Pas de guillemets autour des valeurs
   - Sous-domaines corrects (ex: `resend._domainkey`)

3. **Vérifiez les conflits** :
   - Si vous avez déjà un enregistrement SPF, vous devez le modifier, pas en créer un nouveau
   - Exemple : `v=spf1 include:ovh.com include:resend.com ~all`

### Erreur "Domain already exists"

- Le domaine a peut-être été ajouté précédemment
- Vérifiez dans la liste des domaines sur Resend
- Si nécessaire, supprimez-le et réessayez

### Les emails arrivent toujours en spam

1. Vérifiez que tous les enregistrements sont bien configurés (SPF, DKIM, DMARC)
2. Attendez 24-48h pour la propagation complète
3. Testez avec [Mail-Tester](https://www.mail-tester.com/)

## Commandes utiles pour vérifier

### Vérifier SPF :
```bash
nslookup -type=TXT tizi-consulting.fr
```

### Vérifier DKIM :
```bash
nslookup -type=TXT resend._domainkey.tizi-consulting.fr
```

### Vérifier DMARC :
```bash
nslookup -type=TXT _dmarc.tizi-consulting.fr
```

## Ressources

- [Documentation Resend - Domain Verification](https://resend.com/docs/dashboard/domains/introduction)
- [OVH - Gérer la zone DNS](https://docs.ovh.com/fr/domaines/editer-ma-zone-dns/)
- [MXToolbox - Vérification DNS](https://mxtoolbox.com/)
