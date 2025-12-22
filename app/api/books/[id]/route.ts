import { NextRequest, NextResponse } from 'next/server';
import { getBookById } from '@/lib/pdf-storage';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const book = getBookById(params.id);

    if (!book) {
      return NextResponse.json(
        { error: 'Livre non trouvé' },
        { status: 404 }
      );
    }

    return NextResponse.json({ book });
  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}

