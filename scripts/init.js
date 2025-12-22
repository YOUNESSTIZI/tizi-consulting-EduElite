const fs = require('fs');
const path = require('path');

// Créer les dossiers nécessaires
const directories = [
  'uploads',
  'data',
  'public/pdfs',
];

directories.forEach(dir => {
  const dirPath = path.join(process.cwd(), dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`✅ Dossier créé: ${dir}`);
  } else {
    console.log(`ℹ️  Dossier existe déjà: ${dir}`);
  }
});

// Créer le fichier pdfs.json s'il n'existe pas
const pdfsFile = path.join(process.cwd(), 'data', 'pdfs.json');
if (!fs.existsSync(pdfsFile)) {
  fs.writeFileSync(pdfsFile, JSON.stringify([], null, 2));
  console.log('✅ Fichier data/pdfs.json créé');
} else {
  console.log('ℹ️  Fichier data/pdfs.json existe déjà');
}

console.log('\n✨ Initialisation terminée !');
console.log('\n📝 Prochaines étapes:');
console.log('1. Créez un fichier .env avec JWT_SECRET');
console.log('2. Placez vos PDFs dans le dossier uploads/');
console.log('3. Ajoutez les métadonnées dans data/pdfs.json');
console.log('4. Lancez npm run dev');

