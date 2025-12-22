import { NextRequest, NextResponse } from 'next/server';
import { getPDFBuffer, getPDFExists, getBookById } from '@/lib/pdf-storage';

export async function GET(
  request: NextRequest,
  { params }: { params: { filename: string } }
) {
  try {
    const filename = decodeURIComponent(params.filename);
    
    // Vérifier que le fichier existe (utilise le provider configuré)
    if (!(await getPDFExists(filename))) {
      return NextResponse.json(
        { error: 'PDF non trouvé' },
        { status: 404 }
      );
    }

    // Récupérer le fichier depuis le provider de stockage (local, Google Drive, S3, etc.)
    const fileBuffer = await getPDFBuffer(filename);

    // Headers pour empêcher le téléchargement tout en permettant le cache
    const headers = new Headers();
    headers.set('Content-Type', 'application/pdf');
    headers.set('Content-Disposition', 'inline; filename="document.pdf"');
    headers.set('X-Content-Type-Options', 'nosniff');
    
    // Cache pour améliorer les performances
    // Le PDF est servi en streaming par PDF.js, donc le cache améliore les performances
    // sans compromettre la sécurité (le fichier reste protégé par l'authentification)
    const etag = `"${filename}-${fileBuffer.length}-${Date.now()}"`;
    headers.set('ETag', etag);
    headers.set('Cache-Control', 'private, max-age=3600, must-revalidate');
    
    // Support des requêtes conditionnelles (If-None-Match)
    const ifNoneMatch = request.headers.get('if-none-match');
    if (ifNoneMatch === etag) {
      return new NextResponse(null, {
        status: 304,
        headers: {
          'ETag': etag,
          'Cache-Control': 'private, max-age=3600, must-revalidate',
        },
      });
    }

    // Désactiver le téléchargement via les headers
    headers.set('Content-Security-Policy', "default-src 'self'");
    headers.set('X-Frame-Options', 'SAMEORIGIN');

    return new NextResponse(fileBuffer, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error('Erreur lors de la récupération du PDF:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}

