'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/AuthProvider';
import { BookOpen, Upload, FileText, User, Clock } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [stats, setStats] = useState({
    totalBooks: 0,
    recentBooks: [] as any[],
  });

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login');
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    if (user) {
      fetchStats();
    }
  }, [user]);

  async function fetchStats() {
    try {
      const response = await fetch('/api/books');
      const data = await response.json();
      setStats({
        totalBooks: data.books?.length || 0,
        recentBooks: data.books?.slice(0, 5) || [],
      });
    } catch (error) {
      console.error('Erreur:', error);
    }
  }

  if (authLoading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="text-xl text-gray-600">Chargement...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Bienvenue, {user.name} !
        </h1>
        <p className="text-sm sm:text-base text-gray-600">Gérez votre bibliothèque de PDFs éducatifs</p>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-6 sm:mb-8">
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-5 md:p-6">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-gray-600 text-xs sm:text-sm mb-1">Total de livres</p>
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">{stats.totalBooks}</p>
            </div>
            <BookOpen className="w-10 h-10 sm:w-12 sm:h-12 text-primary-600 flex-shrink-0 ml-3" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-5 md:p-6">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-gray-600 text-xs sm:text-sm mb-1">Votre compte</p>
              <p className="text-base sm:text-lg font-semibold text-gray-900">Actif</p>
            </div>
            <User className="w-10 h-10 sm:w-12 sm:h-12 text-green-600 flex-shrink-0 ml-3" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-5 md:p-6 sm:col-span-2 md:col-span-1">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-gray-600 text-xs sm:text-sm mb-1">Accès</p>
              <p className="text-base sm:text-lg font-semibold text-gray-900">Illimité</p>
            </div>
            <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 flex-shrink-0 ml-3" />
          </div>
        </div>
      </div>

      {/* Actions rapides */}
      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-5 md:p-6 mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Actions rapides</h2>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Link
            href="/books"
            className="flex items-center justify-center gap-2 bg-primary-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-primary-700 transition-colors text-sm sm:text-base"
          >
            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
            Explorer la bibliothèque
          </Link>
          <Link
            href="/books"
            className="flex items-center justify-center gap-2 bg-white text-primary-600 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition-colors text-sm sm:text-base"
          >
            <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
            Mes lectures récentes
          </Link>
        </div>
      </div>

      {/* Livres récents */}
      {stats.recentBooks.length > 0 && (
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-5 md:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Livres disponibles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {stats.recentBooks.map((book: any) => (
              <Link
                key={book.id}
                href={`/books/${book.id}`}
                className="p-3 sm:p-4 border border-gray-200 rounded-lg hover:border-primary-600 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-1 sm:mb-2 line-clamp-2">{book.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{book.level} - {book.subject}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

