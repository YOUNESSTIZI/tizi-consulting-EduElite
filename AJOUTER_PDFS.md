# 📚 Guide : Comment Ajouter des PDFs

## Méthode Simple (Recommandée)

### Étape 1 : Préparer votre PDF

1. Assurez-vous que votre PDF est bien formaté
2. Nommez-le de manière descriptive (ex: `maths-cp-addition.pdf`)
3. Vérifiez la taille (recommandé : < 50MB)

### Étape 2 : Copier le PDF

Placez votre PDF dans le dossier `uploads/` :

```bash
# Windows (PowerShell)
Copy-Item "C:\MesDocuments\mon-livre.pdf" "uploads\mon-livre.pdf"

# Linux/Mac
cp ~/Documents/mon-livre.pdf uploads/mon-livre.pdf
```

### Étape 3 : Ajouter les Métadonnées

Ouvrez le fichier `data/pdfs.json` et ajoutez une nouvelle entrée :

```json
{
  "id": "unique-id-123",
  "title": "Mathématiques CP - Addition et Soustraction",
  "description": "Introduction aux opérations de base pour les élèves de CP",
  "level": "CP",
  "subject": "Mathématiques",
  "filename": "mon-livre.pdf",
  "uploadDate": "2024-01-20T10:00:00Z"
}
```

**Important :**
- `id` : Doit être unique (utilisez un timestamp ou UUID)
- `filename` : Doit correspondre exactement au nom du fichier dans `uploads/`
- `level` : Niveau scolaire (CP, CE1, CE2, CM1, CM2, 6ème, 5ème, etc.)
- `subject` : Matière (Mathématiques, Français, Histoire, etc.)
- `uploadDate` : Format ISO 8601

### Étape 4 : Vérifier

1. Redémarrez le serveur de développement (`npm run dev`)
2. Allez sur http://localhost:3000/books
3. Votre livre devrait apparaître dans la liste

## Exemple Complet

Voici un exemple complet pour ajouter un livre :

```json
[
  {
    "id": "demo-1",
    "title": "Mathématiques CP - Addition et Soustraction",
    "description": "Introduction aux opérations de base pour les élèves de CP",
    "level": "CP",
    "subject": "Mathématiques",
    "filename": "demo.pdf",
    "uploadDate": "2024-01-15T10:00:00Z"
  },
  {
    "id": "demo-2",
    "title": "Français CE1 - Grammaire de base",
    "description": "Cours de grammaire pour les élèves de CE1",
    "level": "CE1",
    "subject": "Français",
    "filename": "demo.pdf",
    "uploadDate": "2024-01-16T10:00:00Z"
  },
  {
    "id": "nouveau-livre-2024",
    "title": "Histoire CM2 - La Révolution Française",
    "description": "Cours complet sur la Révolution Française avec exercices",
    "level": "CM2",
    "subject": "Histoire",
    "filename": "histoire-cm2-revolution.pdf",
    "uploadDate": "2024-01-20T14:30:00Z"
  }
]
```

## Niveaux Scolaires Recommandés

### Maternelle
- `PS` (Petite Section)
- `MS` (Moyenne Section)
- `GS` (Grande Section)

### Primaire
- `CP` (Cours Préparatoire)
- `CE1` (Cours Élémentaire 1)
- `CE2` (Cours Élémentaire 2)
- `CM1` (Cours Moyen 1)
- `CM2` (Cours Moyen 2)

### Collège
- `6ème`
- `5ème`
- `4ème`
- `3ème`

### Lycée
- `2nde`
- `1ère`
- `Terminale`

## Matières Recommandées

- `Mathématiques`
- `Français`
- `Histoire`
- `Géographie`
- `Sciences`
- `Anglais`
- `Espagnol`
- `Physique-Chimie`
- `SVT` (Sciences de la Vie et de la Terre)
- `Technologie`
- `Arts Plastiques`
- `Musique`
- `EPS` (Éducation Physique et Sportive)

## Script Automatique (Optionnel)

Vous pouvez créer un script pour automatiser l'ajout :

```javascript
// scripts/add-pdf.js
const fs = require('fs');
const path = require('path');

const pdfsFile = path.join(__dirname, '../data/pdfs.json');
const pdfs = JSON.parse(fs.readFileSync(pdfsFile, 'utf-8'));

const newBook = {
  id: `book-${Date.now()}`,
  title: process.argv[2] || 'Nouveau Livre',
  description: process.argv[3] || '',
  level: process.argv[4] || 'CP',
  subject: process.argv[5] || 'Mathématiques',
  filename: process.argv[6] || 'nouveau.pdf',
  uploadDate: new Date().toISOString(),
};

pdfs.push(newBook);
fs.writeFileSync(pdfsFile, JSON.stringify(pdfs, null, 2));

console.log('✅ Livre ajouté:', newBook.title);
```

Usage :
```bash
node scripts/add-pdf.js "Titre" "Description" "CP" "Mathématiques" "fichier.pdf"
```

## Vérification des Erreurs

### Le livre n'apparaît pas
1. ✅ Vérifiez que le fichier PDF existe dans `uploads/`
2. ✅ Vérifiez que le nom dans `filename` correspond exactement
3. ✅ Vérifiez que le JSON est valide (utilisez un validateur JSON)
4. ✅ Redémarrez le serveur

### Erreur lors de l'ouverture
1. ✅ Vérifiez que le PDF n'est pas corrompu
2. ✅ Vérifiez les permissions du fichier
3. ✅ Vérifiez les logs du serveur

### Le PDF ne s'affiche pas
1. ✅ Vérifiez que le PDF est valide
2. ✅ Vérifiez la taille du fichier (peut être trop grand)
3. ✅ Vérifiez la console du navigateur pour les erreurs

## Bonnes Pratiques

1. **Nommage des fichiers**
   - Utilisez des noms descriptifs : `maths-cp-addition.pdf`
   - Évitez les espaces : utilisez des tirets ou underscores
   - Utilisez des minuscules

2. **Organisation**
   - Groupez par niveau et matière dans les métadonnées
   - Utilisez des descriptions claires
   - Ajoutez des dates cohérentes

3. **Qualité**
   - Optimisez la taille des PDFs
   - Vérifiez la qualité d'affichage
   - Testez sur différents appareils

## Prochaines Étapes

Une fois que vous avez ajouté vos PDFs :
1. Testez l'affichage sur différents appareils
2. Vérifiez que la protection fonctionne
3. Organisez vos livres par niveau et matière
4. Ajoutez des descriptions utiles

