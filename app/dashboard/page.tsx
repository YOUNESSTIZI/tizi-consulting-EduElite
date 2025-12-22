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
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Bienvenue, {user.name} !
        </h1>
        <p className="text-gray-600">Gérez votre bibliothèque de PDFs éducatifs</p>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Total de livres</p>
              <p className="text-3xl font-bold text-gray-900">{stats.totalBooks}</p>
            </div>
            <BookOpen className="w-12 h-12 text-primary-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Votre compte</p>
              <p className="text-lg font-semibold text-gray-900">Actif</p>
            </div>
            <User className="w-12 h-12 text-green-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Accès</p>
              <p className="text-lg font-semibold text-gray-900">Illimité</p>
            </div>
            <Clock className="w-12 h-12 text-blue-600" />
          </div>
        </div>
      </div>

      {/* Actions rapides */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Actions rapides</h2>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/books"
            className="flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
          >
            <BookOpen className="w-5 h-5" />
            Explorer la bibliothèque
          </Link>
          <Link
            href="/books"
            className="flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition-colors"
          >
            <FileText className="w-5 h-5" />
            Mes lectures récentes
          </Link>
        </div>
      </div>

      {/* Livres récents */}
      {stats.recentBooks.length > 0 && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Livres disponibles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {stats.recentBooks.map((book: any) => (
              <Link
                key={book.id}
                href={`/books/${book.id}`}
                className="p-4 border border-gray-200 rounded-lg hover:border-primary-600 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{book.title}</h3>
                <p className="text-sm text-gray-600">{book.level} - {book.subject}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

