import Link from 'next/link';
import { BookOpen, GraduationCap, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl blur opacity-75"></div>
                <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  EduElite
                </h3>
                <p className="text-sm text-gray-400">Gestion Scolaire d'Excellence</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tout ce dont votre école a besoin, en un seul endroit. 
              Planning, administration, ressources pédagogiques sécurisées, et gestion des élèves, parents et professeurs.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 md:ml-auto md:text-right md:flex md:flex-col md:justify-end">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <a 
                href="mailto:contact@tizi-consulting.fr"
                className="flex items-center gap-2 hover:text-white transition-colors group md:justify-end"
              >
                <Mail className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
                <span>contact@tizi-consulting.fr</span>
              </a>
              <a 
                href="tel:+33745680679"
                className="flex items-center gap-2 hover:text-white transition-colors group md:justify-end"
              >
                <Phone className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
                <span>+33 7 45 68 06 79</span>
              </a>
              <a 
                href="https://www.tizi-consulting.fr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors group md:justify-end"
              >
                <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                <span>www.tizi-consulting.fr</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>
                © {new Date().getFullYear()} <span className="font-semibold text-white">Tizi-Consulting</span>. 
                Tous droits réservés.
              </p>
              <p className="text-xs mt-1">
                <a 
                  href="https://www.tizi-consulting.fr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  www.tizi-consulting.fr
                </a>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-gray-400 text-sm">
              <p className="text-xs text-center sm:text-left">
                Service client disponible 24/7
              </p>
              <p className="text-xs text-center sm:text-left">
                Développé avec ❤️ pour l'éducation
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
