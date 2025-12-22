'use client';

import Link from 'next/link';
import { useAuth } from './AuthProvider';
import { BookOpen, LogIn, LogOut, User, Home, Menu, X, GraduationCap, Calendar } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const { user, setUser } = useAuth();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    setUser(null);
    router.push('/');
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full">
      {/* Glassmorphism Background */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-lg"></div>
      
      {/* Gradient Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>

      <div className="relative container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
            <Link
              href="/"
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-xl group-hover:scale-110 transition-transform">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                EduElite
              </span>
              <span className="text-xs text-gray-500 hidden sm:block">Gestion Scolaire d'Excellence</span>
            </div>
            </Link>
            
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {user ? (
              <>
                <div className="h-6 w-px bg-gray-300 mx-2"></div>
                <Link
                  href="/dashboard"
                  className="group relative px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 transition-all duration-300 hover:bg-white/50"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <User className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="font-medium">{user.name}</span>
                  </div>
                </Link>
                <button
                  onClick={handleLogout}
                  className="group px-4 py-2 rounded-lg text-gray-700 hover:text-red-600 transition-all duration-300 hover:bg-red-50 flex items-center gap-2"
                >
                  <LogOut className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Déconnexion</span>
                </button>
              </>
            ) : (
            <Link
                href="/contact"
                className="group relative px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
            >
                <Calendar className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                <span>Rendez-vous</span>
            </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-white/50 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200/50 animate-in slide-in-from-top">
            <div className="flex flex-col gap-2">
            {user ? (
              <>
                  <div className="h-px bg-gray-200 my-2"></div>
                <Link
                  href="/dashboard"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-white/50 hover:text-blue-600 transition-all"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium">{user.name}</span>
                </Link>
                <button
                  onClick={handleLogout}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all text-left"
                >
                  <LogOut className="w-5 h-5" />
                    <span className="font-medium">Déconnexion</span>
                </button>
              </>
            ) : (
              <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                  <Calendar className="w-5 h-5" />
                  <span>Rendez-vous</span>
              </Link>
            )}
          </div>
        </div>
        )}
      </div>
    </nav>
  );
}

