import Link from 'next/link';
import { BookOpen } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <BookOpen className="w-24 h-24 text-gray-400 mx-auto mb-4" />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Page non trouvée</p>
      <Link
        href="/"
        className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-block"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
}

