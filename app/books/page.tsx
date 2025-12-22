'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BookOpen, Search, Filter, GraduationCap, Book } from 'lucide-react';
import { PDFBook } from '@/lib/pdf-storage';

export default function BooksPage() {
  const [books, setBooks] = useState<PDFBook[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<PDFBook[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [levels, setLevels] = useState<string[]>([]);
  const [subjects, setSubjects] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBooks();
  }, []);

  useEffect(() => {
    filterBooks();
  }, [books, searchTerm, selectedLevel, selectedSubject]);

  async function fetchBooks() {
    try {
      const response = await fetch('/api/books');
      const data = await response.json();
      setBooks(data.books || []);
      setLevels(data.levels || []);
      setSubjects(data.subjects || []);
      setLoading(false);
    } catch (error) {
      console.error('Erreur lors du chargement des livres:', error);
      setLoading(false);
    }
  }

  function filterBooks() {
    let filtered = [...books];

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        book =>
          book.title.toLowerCase().includes(term) ||
          book.description?.toLowerCase().includes(term) ||
          book.subject.toLowerCase().includes(term) ||
          book.level.toLowerCase().includes(term)
      );
    }

    if (selectedLevel !== 'all') {
      filtered = filtered.filter(book => book.level === selectedLevel);
    }

    if (selectedSubject !== 'all') {
      filtered = filtered.filter(book => book.subject === selectedSubject);
    }

    setFilteredBooks(filtered);
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="text-xl text-gray-600">Chargement de la bibliothèque...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <BookOpen className="w-10 h-10 text-primary-600" />
          Bibliothèque de Livres
        </h1>
        <p className="text-gray-600">
          Explorez notre collection de PDFs éducatifs organisés par niveau et matière
        </p>
      </div>

      {/* Barre de recherche et filtres */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Rechercher un livre..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div className="flex gap-4">
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="all">Tous les niveaux</option>
                {levels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>

            <div className="relative">
              <Book className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="all">Toutes les matières</option>
                {subjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Liste des livres */}
      {filteredBooks.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl shadow-lg">
          <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-xl text-gray-600 mb-2">Aucun livre trouvé</p>
          <p className="text-gray-500">
            {books.length === 0
              ? 'La bibliothèque est vide pour le moment.'
              : 'Essayez de modifier vos filtres de recherche.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBooks.map(book => (
            <Link
              key={book.id}
              href={`/books/${book.id}`}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group"
            >
              <div className="aspect-[3/4] bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-primary-600 group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-4 h-4 text-primary-600" />
                  <span className="text-xs font-semibold text-primary-600">{book.level}</span>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{book.subject}</p>
                {book.description && (
                  <p className="text-sm text-gray-500 line-clamp-2">{book.description}</p>
                )}
                <div className="mt-4 text-primary-600 font-medium text-sm group-hover:underline">
                  Lire le livre →
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      <div className="mt-8 text-center text-gray-600">
        <p>
          {filteredBooks.length} livre{filteredBooks.length > 1 ? 's' : ''} trouvé
          {filteredBooks.length > 1 ? 's' : ''}
        </p>
      </div>
    </div>
  );
}

