import { NextResponse } from 'next/server';
import { getAllBooks, getAllLevels, getAllSubjects } from '@/lib/pdf-storage';

export async function GET() {
  try {
    const books = getAllBooks();
    const levels = getAllLevels();
    const subjects = getAllSubjects();

    return NextResponse.json({
      books,
      levels,
      subjects,
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des livres:', error);
    return NextResponse.json(
      { error: 'Erreur serveur', books: [], levels: [], subjects: [] },
      { status: 500 }
    );
  }
}

