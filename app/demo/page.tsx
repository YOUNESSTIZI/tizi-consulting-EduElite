'use client';

import { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Calendar, 
  FileText, 
  UserCheck, 
  School, 
  ChevronRight, 
  ChevronLeft,
  Play,
  CheckCircle2,
  Lock,
  Users,
  GraduationCap,
  Tablet,
  Palette,
  Shield,
  Ban,
  FileText as FileTextIcon,
  Filter,
  CheckCircle,
  Clock,
  XCircle,
  BarChart3,
  Bell,
  Award,
  Send,
  User,
  UserCog,
  UserCircle,
  Sparkles,
  Plus,
  Upload,
  Edit,
  Share2,
  Eye,
  EyeOff,
  FileCheck,
  AlertCircle,
  CalendarDays,
  MessageSquare,
  UserCircle2,
  XCircle as XCircleIcon,
  User as UserIcon,
  X,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  UserX,
  Download,
  Receipt,
  CreditCard,
  CheckCircle as CheckCircleIcon,
  FolderOpen,
  Mail as MailIcon,
  Search,
  MoreVertical
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface DemoStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  features: string[];
}

type UserRole = 'parent' | 'eleve' | 'professeur' | 'administrateur' | null;

export default function DemoPage() {
  const [selectedRole, setSelectedRole] = useState<UserRole>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [openClass, setOpenClass] = useState<string | null>('CE1-A');
  const [selectedClassFilter, setSelectedClassFilter] = useState<string>('CE1-A');

  // Étapes pour le profil Élève
  const eleveSteps: DemoStep[] = [
    {
      id: 'documentation',
      title: 'Documentation Sécurisée',
      description: 'Accédez à une vaste collection de documents organisés par niveau et matière, protégés contre le partage non autorisé',
      icon: <FileTextIcon className="w-8 h-8" />,
      features: [
        'Organisation par niveau (CP, CE1, CE2, CM1, CM2...)',
        'Filtrage par matière (Mathématiques, Français, Histoire...)',
        'Affichage personnalisé selon la classe et la matière de l\'élève',
        'Suivi du statut des documents (fait/non fait)',
        'Lecture sécurisée sans téléchargement',
        'Protection contre le partage non autorisé des documents de l\'établissement',
        'Recherche intuitive et rapide'
      ],
      content: (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl -mx-4 sm:-mx-6 md:-mx-8 p-4 sm:p-6 md:p-8 border-2 border-blue-200">
          {/* Section Livres et Exercices disponibles */}
          <div className="bg-white rounded-xl shadow-xl p-3 sm:p-4 md:p-6 mb-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Espace Documentation</h4>
                <p className="text-sm text-gray-600">Livres et exercices à votre disposition</p>
              </div>
            </div>

            {/* Livres disponibles */}
            <div className="mb-6">
              <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                Livres Disponibles
              </h5>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {[
                  { title: 'Mathématiques CE1', subject: 'Maths', status: 'disponible', pages: 120 },
                  { title: 'Français CP', subject: 'Français', status: 'disponible', pages: 95 },
                  { title: 'Sciences CE2', subject: 'Sciences', status: 'disponible', pages: 110 },
                  { title: 'Histoire CM1', subject: 'Histoire', status: 'disponible', pages: 140 }
                ].map((book, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border-2 border-blue-200 hover:border-blue-400 transition-all cursor-pointer group">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg p-3 mb-3 flex items-center justify-center h-24 group-hover:scale-105 transition-transform">
                      <BookOpen className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2 break-words">{book.title}</div>
                      <div className="text-xs text-gray-600 mb-2 line-clamp-1 break-words">{book.subject}</div>
                      <div className="flex items-center justify-center gap-1 text-xs text-gray-500 mb-2">
                        <FileTextIcon className="w-3 h-3 flex-shrink-0" />
                        <span>{book.pages} pages</span>
                      </div>
                      <div className="flex justify-center">
                        <div className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                          <CheckCircle className="w-3 h-3 flex-shrink-0" />
                          <span>Disponible</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Exercices disponibles */}
            <div>
              <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-green-600" />
                Exercices Disponibles
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { title: 'Exercices - Addition', subject: 'Mathématiques', level: 'CE1-A', status: 'à faire', type: 'exercice' },
                  { title: 'Exercices - Soustraction', subject: 'Mathématiques', level: 'CE1-A', status: 'en cours', type: 'exercice' },
                  { title: 'Devoir Maison - Géométrie', subject: 'Mathématiques', level: 'CE1-A', status: 'à faire', type: 'devoir' },
                  { title: 'Exercices - Conjugaison', subject: 'Français', level: 'CE1-A', status: 'fait', type: 'exercice' },
                  { title: 'Exercices - Vocabulaire', subject: 'Français', level: 'CE1-A', status: 'à faire', type: 'exercice' },
                  { title: 'Exercices - Sciences', subject: 'Sciences', level: 'CE1-A', status: 'en cours', type: 'exercice' }
                ].map((exercise, index) => (
                  <div 
                    key={index} 
                    className={`bg-white rounded-lg p-4 border-2 shadow-sm hover:shadow-md transition-all ${
                      exercise.status === 'fait' 
                        ? 'border-green-200 bg-green-50' 
                        : exercise.status === 'en cours'
                        ? 'border-yellow-200 bg-yellow-50'
                        : 'border-gray-200'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <FileCheck className={`w-4 h-4 ${
                            exercise.status === 'fait' ? 'text-green-600' : 
                            exercise.status === 'en cours' ? 'text-yellow-600' : 
                            'text-gray-400'
                          }`} />
                          <div className="text-sm font-semibold text-gray-900">{exercise.title}</div>
                        </div>
                        <div className="text-xs text-gray-600 mb-1">{exercise.subject} • {exercise.level}</div>
                        <div className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-medium">
                          <span>{exercise.type === 'exercice' ? 'Exercice' : 'Devoir Maison'}</span>
                        </div>
                      </div>
                      <div className="ml-3">
                        {exercise.status === 'fait' && (
                          <div className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                            <CheckCircle className="w-3 h-3" />
                            <span>Fait</span>
                          </div>
                        )}
                        {exercise.status === 'en cours' && (
                          <div className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-medium">
                            <Clock className="w-3 h-3" />
                            <span>En cours</span>
                          </div>
                        )}
                        {exercise.status === 'à faire' && (
                          <div className="flex items-center gap-1 bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                            <XCircle className="w-3 h-3" />
                            <span>À faire</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-4 sm:p-6 mb-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileTextIcon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-gray-900 text-sm sm:text-base">Mathématiques CP - Addition</h4>
                <p className="text-xs sm:text-sm text-gray-600 break-words">Niveau: CP | Matière: Mathématiques</p>
              </div>
              {/* Badge de sécurité */}
              <div className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1.5 rounded-full self-start sm:self-auto">
                <Shield className="w-4 h-4" />
                <span className="text-xs font-semibold">Sécurisé</span>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 h-64 flex items-center justify-center relative overflow-hidden">
              {/* PDF grisé en arrière-plan */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <div className="bg-white rounded-lg shadow-lg p-6 transform rotate-3 scale-90">
                  <div className="w-48 h-64 bg-gradient-to-b from-gray-200 to-gray-300 rounded border-2 border-gray-400 relative">
                    {/* Simuler des lignes de texte dans le PDF */}
                    <div className="p-4 space-y-2">
                      <div className="h-2 bg-gray-400 rounded w-full"></div>
                      <div className="h-2 bg-gray-400 rounded w-5/6"></div>
                      <div className="h-2 bg-gray-400 rounded w-full"></div>
                      <div className="h-2 bg-gray-400 rounded w-4/5 mt-4"></div>
                      <div className="h-2 bg-gray-400 rounded w-full"></div>
                      <div className="h-2 bg-gray-400 rounded w-3/4"></div>
                      <div className="h-2 bg-gray-400 rounded w-full mt-4"></div>
                      <div className="h-2 bg-gray-400 rounded w-5/6"></div>
                      <div className="h-2 bg-gray-400 rounded w-full"></div>
                    </div>
                    {/* Icône PDF en bas */}
                    <div className="absolute bottom-2 right-2">
                      <FileTextIcon className="w-8 h-8 text-gray-500" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contenu au premier plan */}
              <div className="text-center relative z-10 bg-white/80 backdrop-blur-sm rounded-lg p-6">
                <div className="relative inline-block mb-3">
                  <Lock className="w-12 h-12 text-gray-400 mx-auto" />
                  <div className="absolute -top-1 -right-1 bg-red-500 rounded-full p-1">
                    <Ban className="w-4 h-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-600 font-medium">Lecture sécurisée activée</p>
                <p className="text-sm text-gray-500 mt-1">Téléchargement désactivé</p>
                <div className="mt-3 flex items-center justify-center gap-2 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                  <Ban className="w-4 h-4 text-red-600" />
                  <span className="text-xs text-red-700 font-medium">Partage non autorisé bloqué</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <div className="text-xs text-gray-500 mb-1">Recherche</div>
              <div className="text-sm font-medium text-gray-900">Filtres avancés</div>
            </div>
            <div className="bg-white rounded-lg p-3 shadow-sm border-2 border-green-200 bg-green-50">
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                <Shield className="w-3 h-3 text-green-600" />
                <span>Protection</span>
              </div>
              <div className="text-sm font-medium text-gray-900">Documents protégés</div>
              <div className="flex items-center gap-1 mt-1">
                <Ban className="w-3 h-3 text-red-500" />
                <span className="text-xs text-red-600">Partage bloqué</span>
              </div>
            </div>
          </div>

          {/* Section Filtrage par classe et matière */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border-2 border-indigo-200">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-indigo-600" />
              <h5 className="font-bold text-gray-900">Affichage Personnalisé par Élève</h5>
            </div>
            
            <div className="space-y-4">
              {/* Filtres actifs */}
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="flex items-center gap-1.5 bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-xs font-medium">
                  <School className="w-3.5 h-3.5" />
                  <span>Classe: CE1-A</span>
                </div>
                <div className="flex items-center gap-1.5 bg-purple-100 text-purple-700 px-3 py-1.5 rounded-full text-xs font-medium">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Matière: Mathématiques</span>
                </div>
              </div>

              {/* Liste des documents avec statut */}
              <div className="space-y-2">
                <div className="bg-white rounded-lg p-3 shadow-sm border-l-4 border-green-500">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 flex-1">
                      <FileTextIcon className="w-5 h-5 text-gray-400" />
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-gray-900">Addition - Exercices CP</div>
                        <div className="text-xs text-gray-500">Mathématiques • CE1-A</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-xs font-medium text-green-700">Fait</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-3 shadow-sm border-l-4 border-yellow-500">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 flex-1">
                      <FileTextIcon className="w-5 h-5 text-gray-400" />
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-gray-900">Soustraction - Leçon</div>
                        <div className="text-xs text-gray-500">Mathématiques • CE1-A</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-yellow-500" />
                      <span className="text-xs font-medium text-yellow-700">En cours</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-3 shadow-sm border-l-4 border-gray-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 flex-1">
                      <FileTextIcon className="w-5 h-5 text-gray-400" />
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-gray-900">Multiplication - Exercices</div>
                        <div className="text-xs text-gray-500">Mathématiques • CE1-A</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-gray-400" />
                      <span className="text-xs font-medium text-gray-500">Non fait</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Légende des statuts */}
              <div className="flex flex-wrap gap-4 pt-3 border-t border-indigo-200">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-xs text-gray-600">Document complété</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-yellow-500" />
                  <span className="text-xs text-gray-600">En cours</span>
                </div>
                <div className="flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-gray-400" />
                  <span className="text-xs text-gray-600">À faire</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      )
    },
    {
      id: 'mon-espace',
      title: 'Mon Espace',
      description: 'Consultez vos informations personnelles, notes, bulletins et exercices',
      icon: <UserCheck className="w-8 h-8" />,
      features: [
        'Fiche personnelle complète',
        'Suivi des absences et retards',
        'Gestion des bulletins scolaires',
        'Statistiques détaillées',
        'Exercices envoyés par les professeurs',
        'Notifications en temps réel'
      ],
      content: (
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-green-200">
          <div className="bg-white rounded-xl shadow-xl p-4 sm:p-6 mb-4 -mx-2 sm:-mx-4 md:-mx-6">
            {/* En-tête élève */}
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                  <h4 className="font-bold text-gray-900 text-sm sm:text-lg whitespace-nowrap">Sophie Martin</h4>
                  <span className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">•</span>
                  <span className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">CE1-A</span>
                  <span className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">•</span>
                  <span className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">N°: 2025-001</span>
                </div>
              </div>
              {/* Notification badge */}
              <div className="relative flex-shrink-0">
                <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-bold">2</span>
                </div>
              </div>
            </div>

            {/* Statistiques principales */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
              <div className="bg-blue-50 rounded-lg p-2 sm:p-3 md:p-4 border-l-4 border-blue-500">
                <div className="flex items-center gap-1 sm:gap-2 mb-0.5 sm:mb-1">
                  <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0" />
                  <div className="text-[10px] sm:text-xs text-gray-600 truncate">Absences</div>
                </div>
                <div className="text-base sm:text-xl md:text-2xl font-bold text-blue-600">2</div>
                <div className="text-[10px] sm:text-xs text-gray-500 truncate">Ce trimestre</div>
              </div>
              <div className="bg-green-50 rounded-lg p-2 sm:p-3 md:p-4 border-l-4 border-green-500">
                <div className="flex items-center gap-1 sm:gap-2 mb-0.5 sm:mb-1">
                  <Award className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                  <div className="text-[10px] sm:text-xs text-gray-600 truncate">Moyenne</div>
                </div>
                <div className="text-base sm:text-xl md:text-2xl font-bold text-green-600">15.5/20</div>
                <div className="text-[10px] sm:text-xs text-gray-500 truncate">Générale</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-2 sm:p-3 md:p-4 border-l-4 border-purple-500">
                <div className="flex items-center gap-1 sm:gap-2 mb-0.5 sm:mb-1">
                  <FileTextIcon className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600 flex-shrink-0" />
                  <div className="text-[10px] sm:text-xs text-gray-600 truncate">Exercices</div>
                </div>
                <div className="text-base sm:text-xl md:text-2xl font-bold text-purple-600">8</div>
                <div className="text-[10px] sm:text-xs text-gray-500 truncate">En attente</div>
              </div>
            </div>

            {/* Notification - Nouvelle note */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4">
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="bg-yellow-500 rounded-full p-1.5 sm:p-2 flex-shrink-0">
                  <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Vous avez reçu une note de votre professeur</div>
                  <div className="text-xs sm:text-sm text-gray-600 break-words">Mathématiques - Contrôle du 15/01/2025 : 16/20</div>
                  <div className="text-xs text-gray-500 mt-1">Il y a 2 heures</div>
                </div>
              </div>
            </div>

            {/* Bulletin de notes */}
            <div className="mb-3 sm:mb-4">
              <h5 className="font-bold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                <span>Bulletin de Notes - Trimestre 1</span>
              </h5>
              <div className="space-y-2 sm:space-y-2.5">
                <div className="flex items-center justify-between p-2.5 sm:p-3 bg-gray-50 rounded-lg border-l-4 border-blue-500 gap-2">
                  <div className="flex items-center gap-2 min-w-0 flex-1">
                    <BookOpen className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-gray-700 truncate">Mathématiques</span>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-xs sm:text-sm font-bold text-gray-900 whitespace-nowrap">16/20</span>
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  </div>
                </div>
                <div className="flex items-center justify-between p-2.5 sm:p-3 bg-gray-50 rounded-lg border-l-4 border-purple-500 gap-2">
                  <div className="flex items-center gap-2 min-w-0 flex-1">
                    <BookOpen className="w-4 h-4 text-purple-600 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-gray-700 truncate">Français</span>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-xs sm:text-sm font-bold text-gray-900 whitespace-nowrap">15/20</span>
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  </div>
                </div>
                <div className="flex items-center justify-between p-2.5 sm:p-3 bg-gray-50 rounded-lg border-l-4 border-green-500 gap-2">
                  <div className="flex items-center gap-2 min-w-0 flex-1">
                    <BookOpen className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-gray-700 truncate">Histoire</span>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-xs sm:text-sm font-bold text-gray-900 whitespace-nowrap">15.5/20</span>
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  </div>
                </div>
              </div>
            </div>

            {/* Exercices envoyés par le professeur */}
            <div>
              <h5 className="font-bold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                <Send className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0" />
                <span>Exercices Envoyés par le Professeur</span>
              </h5>
              <div className="space-y-2 sm:space-y-2.5">
                <div className="bg-white border-2 border-purple-200 rounded-lg p-2.5 sm:p-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      <FileTextIcon className="w-4 h-4 text-purple-600 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-gray-900 break-words">Exercices - Addition</span>
                    </div>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2.5 py-1 rounded-full font-medium whitespace-nowrap self-start sm:self-auto">Nouveau</span>
                  </div>
                  <div className="text-xs text-gray-600 mb-1 break-words">Mathématiques • Envoyé le 20/01/2025</div>
                  <div className="flex items-center gap-2 mt-2">
                    <Clock className="w-3 h-3 text-yellow-500 flex-shrink-0" />
                    <span className="text-xs text-gray-500 break-words">À rendre avant le 25/01/2025</span>
                  </div>
                </div>
                <div className="bg-white border-2 border-green-200 rounded-lg p-2.5 sm:p-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      <FileTextIcon className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-gray-900 break-words">Leçon - Soustraction</span>
                    </div>
                    <span className="text-xs bg-green-100 text-green-700 px-2.5 py-1 rounded-full font-medium whitespace-nowrap self-start sm:self-auto">Complété</span>
                  </div>
                  <div className="text-xs text-gray-600 mb-1 break-words">Mathématiques • Envoyé le 15/01/2025</div>
                  <div className="flex items-center gap-2 mt-2">
                    <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                    <span className="text-xs text-green-600 break-words">Rendu le 18/01/2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'planning',
      title: 'Planning',
      description: 'Consultez votre emploi du temps et votre planning hebdomadaire',
      icon: <Calendar className="w-8 h-8" />,
      features: [
        'Emploi du temps hebdomadaire',
        'Visualisation par jour',
        'Informations sur les professeurs et salles',
        'Planning des examens et contrôles'
      ],
      content: (
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-purple-200">
          <div className="bg-white rounded-xl shadow-xl p-6">
            <div className="mb-4">
              <h4 className="font-bold text-gray-900 mb-2">Planning - Classe CE1-A</h4>
              <div className="text-sm text-gray-600">Semaine du 20 au 24 Janvier 2025</div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
              {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven'].map((day, idx) => (
                <div key={day} className="text-center">
                  <div className="text-xs font-semibold text-gray-700 mb-2">{day}</div>
                  <div className="space-y-1">
                    <div className="bg-blue-100 text-blue-800 text-xs p-2 rounded">9h-10h<br/>Math</div>
                    <div className="bg-green-100 text-green-800 text-xs p-2 rounded">10h-11h<br/>Français</div>
                    <div className="bg-purple-100 text-purple-800 text-xs p-2 rounded">14h-15h<br/>Histoire</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex gap-2">
              <div className="flex-1 bg-gray-50 rounded-lg p-3">
                <div className="text-xs text-gray-500">Professeur</div>
                <div className="text-sm font-medium">M. Dupont</div>
              </div>
              <div className="flex-1 bg-gray-50 rounded-lg p-3">
                <div className="text-xs text-gray-500">Salle</div>
                <div className="text-sm font-medium">Salle 101</div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  // Étapes pour le profil Professeur
  const professeurSteps: DemoStep[] = [
    {
      id: 'documentation',
      title: 'Documentation et Ressources',
      description: 'Importez, gérez et partagez vos cours, exercices, devoirs et examens avec vos classes',
      icon: <FileTextIcon className="w-8 h-8" />,
      features: [
        'Filtrage par classe',
        'Importation de cours, exercices, devoirs maison et examens',
        'Gestion des accès (partager avec les élèves ou pas)',
        'Organisation par matière et niveau',
        'Lecture sécurisée sans téléchargement'
      ],
      content: (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-blue-200">
          {/* Filtre par classe */}
          <div className="bg-white rounded-xl shadow-xl p-4 sm:p-6 mb-4">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Filter className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900">Filtrage par Classe</h4>
                <p className="text-sm text-gray-600">Sélectionnez une classe pour voir ses documents</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {['CE1-A', 'CE1-B', 'CE2-A', 'CM1-A'].map((classe) => (
                <button
                  key={classe}
                  onClick={() => setSelectedClassFilter(classe)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedClassFilter === classe
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {classe}
                </button>
              ))}
            </div>
          </div>

          {/* Section Importation */}
          <div className="bg-white rounded-xl shadow-xl p-4 sm:p-6 mb-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3 sm:gap-0">
              <div className="flex items-center gap-3 flex-1">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-2 sm:p-3 rounded-xl flex-shrink-0">
                  <Upload className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-gray-900 text-base sm:text-lg">Importation de Documents</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Ajoutez vos cours, exercices, devoirs et examens</p>
                </div>
              </div>
              <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2.5 sm:py-2 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-sm sm:text-base">
                <Upload className="w-4 h-4 flex-shrink-0" />
                Importer
              </button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200 text-center">
                <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-sm font-semibold text-gray-900">Cours</div>
                <div className="text-xs text-gray-500 mt-1">PDF, DOCX</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200 text-center">
                <FileTextIcon className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-sm font-semibold text-gray-900">Exercices</div>
                <div className="text-xs text-gray-500 mt-1">PDF, DOCX</div>
              </div>
              <div className="bg-orange-50 rounded-lg p-4 border-2 border-orange-200 text-center">
                <FileCheck className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <div className="text-sm font-semibold text-gray-900">Devoirs Maison</div>
                <div className="text-xs text-gray-500 mt-1">PDF, DOCX</div>
              </div>
              <div className="bg-red-50 rounded-lg p-4 border-2 border-red-200 text-center">
                <Award className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <div className="text-sm font-semibold text-gray-900">Examens</div>
                <div className="text-xs text-gray-500 mt-1">PDF, DOCX</div>
              </div>
            </div>
          </div>

          {/* Liste des documents avec gestion d'accès */}
          <div className="bg-white rounded-xl shadow-xl p-4 sm:p-6 mb-4">
            <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FileTextIcon className="w-5 h-5 text-blue-600" />
              Mes Documents - Classe {selectedClassFilter}
            </h4>
            
            <div className="space-y-3">
              {/* Document avec accès partagé */}
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <FileTextIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 break-words">Cours - Addition</div>
                      <div className="text-xs text-gray-600 break-words">Mathématiques • CE1-A • Cours</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 flex-shrink-0 ml-2">
                    <div className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                      <Eye className="w-3 h-3 flex-shrink-0" />
                      <span>Partagé</span>
                    </div>
                    <button className="p-1.5 hover:bg-green-100 rounded-lg transition-all">
                      <Edit className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-3">
                  <button className="flex items-center gap-2 text-xs text-gray-600 hover:text-gray-900">
                    <FileCheck className="w-4 h-4" />
                    <span>Corriger</span>
                  </button>
                  <button className="flex items-center gap-2 text-xs text-gray-600 hover:text-gray-900">
                    <Share2 className="w-4 h-4" />
                    <span>Gérer accès</span>
                  </button>
                </div>
              </div>

              {/* Document avec accès privé */}
              <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <FileTextIcon className="w-5 h-5 text-gray-600 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 break-words">Examen - Contrôle Math</div>
                      <div className="text-xs text-gray-600 break-words">Mathématiques • CE1-A • Examen</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 flex-shrink-0 ml-2">
                    <div className="flex items-center gap-1 bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                      <EyeOff className="w-3 h-3 flex-shrink-0" />
                      <span>Privé</span>
                    </div>
                    <button className="p-1.5 hover:bg-gray-200 rounded-lg transition-all">
                      <Edit className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-3">
                  <button className="flex items-center gap-2 text-xs text-gray-600 hover:text-gray-900">
                    <FileCheck className="w-4 h-4" />
                    <span>Corriger</span>
                  </button>
                  <button className="flex items-center gap-2 text-xs text-blue-600 hover:text-blue-700">
                    <Share2 className="w-4 h-4" />
                    <span>Partager avec élèves</span>
                  </button>
                </div>
              </div>

              {/* Exercice en attente de correction */}
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <FileTextIcon className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 break-words">Exercices - Soustraction</div>
                      <div className="text-xs text-gray-600 break-words">Mathématiques • CE1-A • Exercice</div>
                      <div className="text-xs text-yellow-700 mt-1 font-medium">15 copies à corriger</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 flex-shrink-0 ml-2">
                    <div className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                      <Clock className="w-3 h-3 flex-shrink-0" />
                      <span>En attente</span>
                    </div>
                    <button className="p-1.5 hover:bg-yellow-100 rounded-lg transition-all">
                      <Edit className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-3">
                  <button className="flex items-center gap-2 text-xs bg-yellow-600 text-white px-3 py-1.5 rounded-lg font-medium hover:bg-yellow-700">
                    <FileCheck className="w-4 h-4" />
                    <span>Commencer la correction</span>
                  </button>
                  <button className="flex items-center gap-2 text-xs text-gray-600 hover:text-gray-900">
                    <Share2 className="w-4 h-4" />
                    <span>Gérer accès</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      )
    },
    {
      id: 'mon-espace-prof',
      title: 'Mon Espace',
      description: 'Gérez vos informations personnelles et communiquez avec l\'administration',
      icon: <UserCheck className="w-8 h-8" />,
      features: [
        'Signalement de problèmes à l\'administration',
        'Vue d\'ensemble du nombre d\'élèves',
        'Informations personnelles',
        'Gestion des classes',
        'Correction des exercices et examens'
      ],
      content: (
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-green-200">
          <div className="bg-white rounded-xl shadow-xl p-4 sm:p-6 mb-4 -mx-2 sm:-mx-4 md:-mx-6">
            {/* En-tête professeur */}
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                  <h4 className="font-bold text-gray-900 text-sm sm:text-lg whitespace-nowrap">M. Bernard</h4>
                  <span className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">•</span>
                  <span className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">Professeur</span>
                  <span className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">•</span>
                  <span className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">Mathématiques</span>
                </div>
              </div>
            </div>

            {/* Statistiques principales */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
              <div className="bg-blue-50 rounded-lg p-2 sm:p-3 md:p-4 border-l-4 border-blue-500">
                <div className="flex items-center gap-1 sm:gap-2 mb-0.5 sm:mb-1">
                  <Users className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0" />
                  <div className="text-[10px] sm:text-xs text-gray-600 truncate">Élèves</div>
                </div>
                <div className="text-base sm:text-xl md:text-2xl font-bold text-blue-600">75</div>
                <div className="text-[10px] sm:text-xs text-gray-500 truncate">En total</div>
              </div>
              <div className="bg-green-50 rounded-lg p-2 sm:p-3 md:p-4 border-l-4 border-green-500">
                <div className="flex items-center gap-1 sm:gap-2 mb-0.5 sm:mb-1">
                  <School className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                  <div className="text-[10px] sm:text-xs text-gray-600 truncate">Classes</div>
                </div>
                <div className="text-base sm:text-xl md:text-2xl font-bold text-green-600">3</div>
                <div className="text-[10px] sm:text-xs text-gray-500 truncate">En charge</div>
              </div>
            </div>

            {/* Signalement de problème */}
            <div className="mb-4">
              <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-orange-600" />
                Signalement à l'Administration
              </h5>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-4 border-2 border-orange-200">
                <div className="mb-3">
                  <textarea
                    placeholder="Décrivez votre problème ou votre demande..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                    rows={4}
                  />
                </div>
                <button className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-orange-500 hover:to-amber-500 transition-all flex items-center justify-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Envoyer à l'administration
                </button>
              </div>
            </div>

            {/* Détail des classes */}
            <div>
              <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <School className="w-5 h-5 text-blue-600" />
                Mes Classes
              </h5>
              <div className="space-y-2">
                <div className="bg-white border-2 border-blue-200 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900">CE1-A</div>
                      <div className="text-xs text-gray-600">25 élèves</div>
                    </div>
                    <div className="text-sm font-bold text-blue-600">25</div>
                  </div>
                </div>
                <div className="bg-white border-2 border-purple-200 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900">CE1-B</div>
                      <div className="text-xs text-gray-600">23 élèves</div>
                    </div>
                    <div className="text-sm font-bold text-purple-600">23</div>
                  </div>
                </div>
                <div className="bg-white border-2 border-green-200 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900">CE2-A</div>
                      <div className="text-xs text-gray-600">27 élèves</div>
                    </div>
                    <div className="text-sm font-bold text-green-600">27</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section Correction */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200 mt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-3 rounded-xl">
                <FileCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h5 className="font-bold text-gray-900">Correction des Exercices et Examens</h5>
                <p className="text-sm text-gray-600">Corrigez et notez les travaux de vos élèves</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div className="bg-white rounded-lg p-4 text-center border-2 border-purple-200">
                <div className="text-2xl font-bold text-purple-600 mb-1">12</div>
                <div className="text-xs text-gray-600">À corriger</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center border-2 border-green-200">
                <div className="text-2xl font-bold text-green-600 mb-1">45</div>
                <div className="text-xs text-gray-600">Corrigés</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center border-2 border-blue-200">
                <div className="text-2xl font-bold text-blue-600 mb-1">8</div>
                <div className="text-xs text-gray-600">En cours</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="bg-white rounded-lg p-3 border-2 border-yellow-200">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">Exercices - Soustraction</div>
                    <div className="text-xs text-gray-600 break-words">CE1-A • 15 copies en attente</div>
                  </div>
                  <button className="w-full sm:w-auto bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold hover:from-yellow-600 hover:to-orange-700 transition-all flex items-center gap-2 justify-center">
                    <FileCheck className="w-4 h-4" />
                    Corriger
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-lg p-3 border-2 border-blue-200">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">Examen - Contrôle Math</div>
                    <div className="text-xs text-gray-600 break-words">CE1-A • 12 copies en attente</div>
                  </div>
                  <button className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all flex items-center gap-2 justify-center">
                    <FileCheck className="w-4 h-4" />
                    Corriger
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-lg p-3 border-2 border-green-200">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">Devoir Maison - Géométrie</div>
                    <div className="text-xs text-gray-600 break-words">CE1-B • 23 copies en attente</div>
                  </div>
                  <button className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold hover:from-green-600 hover:to-emerald-700 transition-all flex items-center gap-2 justify-center">
                    <FileCheck className="w-4 h-4" />
                    Corriger
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'mes-eleves',
      title: 'Mes Élèves',
      description: 'Consultez la liste de tous vos élèves, leurs profils et leurs performances',
      icon: <Users className="w-8 h-8" />,
      features: [
        'Liste complète des élèves',
        'Filtrage par classe',
        'Consultation des profils',
        'Suivi des performances',
        'Statistiques par élève'
      ],
      content: (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-blue-200">
          <div className="bg-white rounded-xl shadow-xl p-3 sm:p-4 md:p-6 mb-4 -mx-2 sm:-mx-4 md:-mx-6">
            {/* En-tête avec filtre */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
              <h4 className="font-bold text-gray-900 text-base sm:text-lg flex items-center gap-2">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                <span>Mes Élèves</span>
              </h4>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
                <select className="px-3 sm:px-4 py-1.5 sm:py-2 border-2 border-gray-200 rounded-lg text-xs sm:text-sm focus:outline-none focus:border-blue-500 w-full sm:w-auto">
                  <option value="all">Toutes les classes</option>
                  <option value="CE1-A">CE1-A</option>
                  <option value="CE1-B">CE1-B</option>
                  <option value="CE2-A">CE2-A</option>
                </select>
                <div className="relative w-full sm:w-auto">
                  <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 absolute left-2.5 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Rechercher..."
                    className="pl-8 sm:pl-10 pr-3 sm:pr-4 py-1.5 sm:py-2 border-2 border-gray-200 rounded-lg text-xs sm:text-sm focus:outline-none focus:border-blue-500 w-full"
                  />
                </div>
              </div>
            </div>

            {/* Statistiques rapides */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
              <div className="bg-blue-50 rounded-lg p-2 sm:p-3 md:p-4 border-2 border-blue-200 text-center">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600 mb-0.5 sm:mb-1">75</div>
                <div className="text-[10px] sm:text-xs text-gray-600">Total</div>
              </div>
              <div className="bg-green-50 rounded-lg p-2 sm:p-3 md:p-4 border-2 border-green-200 text-center">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-green-600 mb-0.5 sm:mb-1">68</div>
                <div className="text-[10px] sm:text-xs text-gray-600">Présents</div>
              </div>
              <div className="bg-red-50 rounded-lg p-2 sm:p-3 md:p-4 border-2 border-red-200 text-center">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-red-600 mb-0.5 sm:mb-1">7</div>
                <div className="text-[10px] sm:text-xs text-gray-600">Absents</div>
              </div>
            </div>

            {/* Liste des élèves */}
            <div className="space-y-2 sm:space-y-3">
              {[
                { name: 'Sophie Martin', classe: 'CE1-A', moyenne: 15.5, absences: 3, status: 'present' },
                { name: 'Lucas Dubois', classe: 'CE1-A', moyenne: 16.2, absences: 1, status: 'present' },
                { name: 'Emma Bernard', classe: 'CE1-A', moyenne: 14.8, absences: 0, status: 'present' },
                { name: 'Hugo Laurent', classe: 'CE1-A', moyenne: 13.5, absences: 5, status: 'absent' },
                { name: 'Léa Petit', classe: 'CE1-A', moyenne: 17.0, absences: 0, status: 'present' },
                { name: 'Noah Martin', classe: 'CE1-B', moyenne: 15.0, absences: 2, status: 'present' },
                { name: 'Chloé Dubois', classe: 'CE1-B', moyenne: 16.5, absences: 1, status: 'present' },
                { name: 'Thomas Bernard', classe: 'CE1-B', moyenne: 14.2, absences: 4, status: 'absent' },
                { name: 'Lilou Laurent', classe: 'CE2-A', moyenne: 15.8, absences: 0, status: 'present' },
                { name: 'Maxime Petit', classe: 'CE2-A', moyenne: 16.9, absences: 1, status: 'present' }
              ].map((student, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-lg p-2.5 sm:p-4 border-2 ${
                    student.status === 'absent' ? 'border-red-200 bg-red-50' : 'border-gray-200 hover:border-blue-300'
                  } transition-all`}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    {/* Avatar */}
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-semibold flex-shrink-0 ${
                      student.status === 'absent' 
                        ? 'bg-gradient-to-br from-red-400 to-red-600' 
                        : 'bg-gradient-to-br from-blue-400 to-indigo-500'
                    }`}>
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    
                    {/* Nom et classe */}
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base truncate">{student.name}</div>
                      <div className="text-[10px] sm:text-xs text-gray-600 truncate">{student.classe}</div>
                    </div>
                    
                    {/* Moyenne */}
                    <div className="text-center flex-shrink-0 px-1 sm:px-2">
                      <div className="text-sm sm:text-base md:text-lg font-bold text-blue-600 whitespace-nowrap">{student.moyenne}/20</div>
                      <div className="text-[10px] sm:text-xs text-gray-500">Moy.</div>
                    </div>
                    
                    {/* Absences */}
                    <div className="text-center flex-shrink-0 px-1 sm:px-2">
                      <div className={`text-xs sm:text-sm font-semibold whitespace-nowrap ${
                        student.absences === 0 ? 'text-green-600' : student.absences <= 2 ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        {student.absences}
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-500">Abs.</div>
                    </div>
                    
                    {/* Badge Absent et boutons */}
                    <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                      {student.status === 'absent' && (
                        <div className="text-[10px] sm:text-xs font-medium bg-red-100 text-red-700 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full whitespace-nowrap">
                          Absent
                        </div>
                      )}
                      <button
                        className="p-1.5 sm:p-2 hover:bg-blue-100 rounded-lg transition-all flex-shrink-0"
                        title="Voir profil"
                      >
                        <UserIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
                      </button>
                      <button
                        className="p-1.5 sm:p-2 hover:bg-gray-200 rounded-lg transition-all flex-shrink-0"
                        title="Plus d'options"
                      >
                        <MoreVertical className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'classes',
      title: 'Gestion des Classes',
      description: 'Visualisez vos classes et consultez le profil de chaque élève',
      icon: <School className="w-8 h-8" />,
      features: [
        'Visualisation des classes par cartes',
        'Consultation du profil de chaque élève',
        'Suivi par classe',
        'Statistiques et rapports'
      ],
      content: (
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-orange-200">
          <div className="space-y-3 sm:space-y-4">
            {/* Classe CE1-A */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 overflow-hidden -mx-2 sm:-mx-4 md:mx-0">
              <button
                onClick={() => setOpenClass(openClass === 'CE1-A' ? null : 'CE1-A')}
                className="w-full flex items-center justify-between p-3 sm:p-4 md:p-5 hover:bg-gray-50 transition-all gap-2 sm:gap-4"
              >
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-1 min-w-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <School className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg truncate">CE1-A</h4>
                    <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 text-xs sm:text-sm text-gray-600 flex-wrap">
                      <span className="whitespace-nowrap">Niveau: CE1</span>
                      <span>•</span>
                      <span className="whitespace-nowrap">25 élèves</span>
                      <span>•</span>
                      <span className="truncate">Prof: M. Bernard</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-shrink-0">
                  <div className="bg-blue-50 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-center border border-blue-200">
                    <div className="text-base sm:text-lg font-bold text-blue-600">25</div>
                    <div className="text-[10px] sm:text-xs text-gray-600">Élèves</div>
                  </div>
                  {openClass === 'CE1-A' ? (
                    <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 flex-shrink-0" />
                  )}
                </div>
              </button>
              
              {/* Contenu dépliable */}
              {openClass === 'CE1-A' && (
                <div className="border-t border-gray-200 p-3 sm:p-4 md:p-6 bg-gray-50 -mx-2 sm:-mx-4 md:mx-0">
                  {/* Contenu de la classe - cartes élèves */}
                  <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-3 sm:p-4 md:p-6 border-2 border-gray-200 overflow-hidden -mx-2 sm:-mx-4 md:mx-0">
                    {/* Image de fond - classe */}
                    <div className="absolute inset-0 z-0 opacity-25">
                      <Image
                        src="/images/classroom.jpg"
                        alt="Salle de classe"
                        fill
                        className="object-cover"
                        quality={80}
                      />
                    </div>
                    
                    {/* Contenu par-dessus l'image */}
                    <div className="relative z-10">
                      {/* Grille de cartes élèves */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 max-w-3xl mx-auto">
                        {[
                          { name: 'Sophie M.', fullName: 'Sophie Martin', initial: 'SM', avg: 15.5, isAbsent: false },
                          { name: 'Julien D.', fullName: 'Julien Dubois', initial: 'JD', avg: 14.8, isAbsent: true },
                          { name: 'Lucas M.', fullName: 'Lucas Moreau', initial: 'LM', avg: 16.2, isAbsent: false },
                          { name: 'Emma L.', fullName: 'Emma Laurent', initial: 'EL', avg: 15.0, isAbsent: false },
                          { name: 'Thomas B.', fullName: 'Thomas Bernard', initial: 'TB', avg: 13.5, isAbsent: false },
                          { name: 'Léa R.', fullName: 'Léa Rousseau', initial: 'LR', avg: 16.8, isAbsent: false },
                          { name: 'Hugo C.', fullName: 'Hugo Chevalier', initial: 'HC', avg: 14.2, isAbsent: true },
                          { name: 'Chloé F.', fullName: 'Chloé Fournier', initial: 'CF', avg: 15.7, isAbsent: false },
                          { name: 'Maxime P.', fullName: 'Maxime Petit', initial: 'MP', avg: 13.8, isAbsent: false },
                          { name: 'Inès T.', fullName: 'Inès Thomas', initial: 'IT', avg: 17.0, isAbsent: false },
                          { name: 'Noah G.', fullName: 'Noah Girard', initial: 'NG', avg: 14.5, isAbsent: false },
                          { name: 'Lina K.', fullName: 'Lina Klein', initial: 'LK', avg: 16.5, isAbsent: false }
                        ].map((student, index) => (
                          <div
                            key={index}
                            className={`group relative cursor-pointer transition-all hover:scale-105 ${student.isAbsent ? 'opacity-60' : ''}`}
                          >
                            {/* Carte élève */}
                            <div className={`bg-white rounded-lg sm:rounded-xl shadow-lg border-2 overflow-hidden hover:shadow-xl transition-all ${
                              student.isAbsent ? 'border-red-300' : 'border-gray-200'
                            }`}>
                              {/* Image de l'élève */}
                              <div className="relative h-16 sm:h-20 md:h-24 bg-gradient-to-br from-gray-100 to-gray-200">
                        <div className={`absolute inset-0 flex items-center justify-center ${
                          student.isAbsent 
                            ? 'bg-gradient-to-br from-red-400 to-red-600' 
                            : 'bg-gradient-to-br from-blue-400 to-indigo-500'
                        }`}>
                                  <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 sm:border-4 border-white shadow-xl">
                                    <UserCircle2 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white opacity-90" />
                                  </div>
                                </div>
                                
                                {student.isAbsent && (
                                  <div className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-red-500 text-white rounded-full p-1 sm:p-1.5 shadow-lg">
                                    <XCircleIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                                  </div>
                                )}
                              </div>
                              
                              {/* Informations de l'élève */}
                              <div className="p-2 sm:p-3">
                                <div className="text-center">
                                  <div className="font-bold text-xs sm:text-sm text-gray-900 mb-1 sm:mb-2 truncate">{student.name}</div>
                                  
                                  {student.isAbsent && (
                                    <div className="inline-flex items-center gap-0.5 sm:gap-1 bg-red-50 text-red-700 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium border border-red-200">
                                      <XCircleIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                                      <span>Absent</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                              
                              {/* Boutons d'action */}
                              <div className="px-2 sm:px-3 pb-2 sm:pb-3 flex items-center justify-center gap-1 sm:gap-2">
                                <button 
                                  className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-1.5 sm:px-2 md:px-3 py-1 sm:py-1.5 md:py-2 rounded-lg text-[10px] sm:text-xs font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all flex items-center justify-center gap-1 sm:gap-1.5 shadow-md hover:shadow-lg"
                                  title="Consulter le profil"
                                >
                                  <UserIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                                  <span className="hidden sm:inline">Profil</span>
                                </button>
                                <button 
                                  className={`flex-1 px-1.5 sm:px-2 md:px-3 py-1 sm:py-1.5 md:py-2 rounded-lg text-[10px] sm:text-xs font-semibold transition-all flex items-center justify-center gap-1 sm:gap-1.5 shadow-md hover:shadow-lg ${
                                    student.isAbsent 
                                      ? 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700' 
                                      : 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700'
                                  }`}
                                  title={student.isAbsent ? "Marquer comme présent" : "Marquer comme absent"}
                                >
                                  {student.isAbsent ? (
                                    <>
                                      <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                                      <span className="hidden sm:inline">Présent</span>
                                    </>
                                  ) : (
                                    <>
                                      <X className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                                      <span className="hidden sm:inline">Absent</span>
                                    </>
                                  )}
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Classe CE1-B */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 overflow-hidden -mx-2 sm:-mx-4 md:mx-0">
              <button
                onClick={() => setOpenClass(openClass === 'CE1-B' ? null : 'CE1-B')}
                className="w-full flex items-center justify-between p-3 sm:p-4 md:p-5 hover:bg-gray-50 transition-all gap-2 sm:gap-4"
              >
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-1 min-w-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <School className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg truncate">CE1-B</h4>
                    <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 text-xs sm:text-sm text-gray-600 flex-wrap">
                      <span className="whitespace-nowrap">Niveau: CE1</span>
                      <span>•</span>
                      <span className="whitespace-nowrap">23 élèves</span>
                      <span>•</span>
                      <span className="truncate">Prof: Mme. Dubois</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-shrink-0">
                  <div className="bg-blue-50 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-center border border-blue-200">
                    <div className="text-base sm:text-lg font-bold text-blue-600">23</div>
                    <div className="text-[10px] sm:text-xs text-gray-600">Élèves</div>
                  </div>
                  {openClass === 'CE1-B' ? (
                    <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 flex-shrink-0" />
                  )}
                </div>
              </button>
              
              {openClass === 'CE1-B' && (
                <div className="border-t border-gray-200 p-3 sm:p-4 md:p-6 bg-gray-50 -mx-2 sm:-mx-4 md:mx-0">
                  {/* Contenu de la classe - cartes élèves */}
                  <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-3 sm:p-4 md:p-6 border-2 border-gray-200 overflow-hidden -mx-2 sm:-mx-4 md:mx-0">
                    {/* Image de fond - classe */}
                    <div className="absolute inset-0 z-0 opacity-25">
                      <Image
                        src="/images/classroom.jpg"
                        alt="Salle de classe"
                        fill
                        className="object-cover"
                        quality={80}
                      />
                    </div>
                    
                    {/* Contenu par-dessus l'image */}
                    <div className="relative z-10">
                      {/* Grille de cartes élèves */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 max-w-3xl mx-auto">
                        {[
                          { name: 'Marie D.', fullName: 'Marie Dubois', initial: 'MD', avg: 14.8, isAbsent: false },
                          { name: 'Paul R.', fullName: 'Paul Rousseau', initial: 'PR', avg: 15.2, isAbsent: false },
                          { name: 'Julie L.', fullName: 'Julie Laurent', initial: 'JL', avg: 16.5, isAbsent: false },
                          { name: 'Antoine M.', fullName: 'Antoine Martin', initial: 'AM', avg: 13.9, isAbsent: true },
                          { name: 'Sarah B.', fullName: 'Sarah Bernard', initial: 'SB', avg: 15.7, isAbsent: false },
                          { name: 'Thomas C.', fullName: 'Thomas Chevalier', initial: 'TC', avg: 14.3, isAbsent: false },
                          { name: 'Emma F.', fullName: 'Emma Fournier', initial: 'EF', avg: 16.1, isAbsent: false },
                          { name: 'Lucas P.', fullName: 'Lucas Petit', initial: 'LP', avg: 15.4, isAbsent: false },
                          { name: 'Chloé T.', fullName: 'Chloé Thomas', initial: 'CT', avg: 14.6, isAbsent: false },
                          { name: 'Hugo G.', fullName: 'Hugo Girard', initial: 'HG', avg: 15.9, isAbsent: true },
                          { name: 'Léa K.', fullName: 'Léa Klein', initial: 'LK', avg: 16.3, isAbsent: false },
                          { name: 'Maxime S.', fullName: 'Maxime Simon', initial: 'MS', avg: 15.1, isAbsent: false }
                        ].map((student, index) => (
                          <div
                            key={index}
                            className={`group relative cursor-pointer transition-all hover:scale-105 ${student.isAbsent ? 'opacity-60' : ''}`}
                          >
                            {/* Carte élève */}
                            <div className={`bg-white rounded-lg sm:rounded-xl shadow-lg border-2 overflow-hidden hover:shadow-xl transition-all ${
                              student.isAbsent ? 'border-red-300' : 'border-gray-200'
                            }`}>
                              {/* Image de l'élève */}
                              <div className="relative h-16 sm:h-20 md:h-24 bg-gradient-to-br from-gray-100 to-gray-200">
                                <div className={`absolute inset-0 flex items-center justify-center ${
                                  student.isAbsent 
                                    ? 'bg-gradient-to-br from-red-400 to-red-600' 
                                    : 'bg-gradient-to-br from-blue-400 to-indigo-500'
                                }`}>
                                  <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 sm:border-4 border-white shadow-xl">
                                    <UserCircle2 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white opacity-90" />
                                  </div>
                                </div>
                                
                                {student.isAbsent && (
                                  <div className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-red-500 text-white rounded-full p-1 sm:p-1.5 shadow-lg">
                                    <XCircleIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                                  </div>
                                )}
                              </div>
                              
                              {/* Informations de l'élève */}
                              <div className="p-2 sm:p-3">
                                <div className="text-center">
                                  <div className="font-bold text-xs sm:text-sm text-gray-900 mb-1 sm:mb-2 truncate">{student.name}</div>
                                  
                                  {student.isAbsent && (
                                    <div className="inline-flex items-center gap-0.5 sm:gap-1 bg-red-50 text-red-700 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium border border-red-200">
                                      <XCircleIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                                      <span>Absent</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                              
                              {/* Boutons d'action */}
                              <div className="px-2 sm:px-3 pb-2 sm:pb-3 flex items-center justify-center gap-1 sm:gap-2">
                                <button 
                                  className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-1.5 sm:px-2 md:px-3 py-1 sm:py-1.5 md:py-2 rounded-lg text-[10px] sm:text-xs font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all flex items-center justify-center gap-1 sm:gap-1.5 shadow-md hover:shadow-lg"
                                  title="Consulter le profil"
                                >
                                  <UserIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                                  <span className="hidden sm:inline">Profil</span>
                                </button>
                                <button 
                                  className={`flex-1 px-1.5 sm:px-2 md:px-3 py-1 sm:py-1.5 md:py-2 rounded-lg text-[10px] sm:text-xs font-semibold transition-all flex items-center justify-center gap-1 sm:gap-1.5 shadow-md hover:shadow-lg ${
                                    student.isAbsent 
                                      ? 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700' 
                                      : 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700'
                                  }`}
                                  title={student.isAbsent ? "Marquer comme présent" : "Marquer comme absent"}
                                >
                                  {student.isAbsent ? (
                                    <>
                                      <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                                      <span className="hidden sm:inline">Présent</span>
                                    </>
                                  ) : (
                                    <>
                                      <X className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                                      <span className="hidden sm:inline">Absent</span>
                                    </>
                                  )}
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Classe CE2-A */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 overflow-hidden">
              <button
                onClick={() => setOpenClass(openClass === 'CE2-A' ? null : 'CE2-A')}
                className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <School className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-gray-900 text-lg">CE2-A</h4>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <span>Niveau: CE2</span>
                      <span>•</span>
                      <span>27 élèves</span>
                      <span>•</span>
                      <span>Prof. Principal: M. Martin</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-50 rounded-lg px-3 py-2 text-center border border-blue-200">
                    <div className="text-lg font-bold text-blue-600">27</div>
                    <div className="text-xs text-gray-600">Élèves</div>
                  </div>
                  {openClass === 'CE2-A' ? (
                    <ChevronUp className="w-6 h-6 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-600" />
                  )}
                </div>
              </button>
              
              {openClass === 'CE2-A' && (
                <div className="border-t border-gray-200 p-6 bg-gray-50">
                  {/* Contenu de la classe - cartes élèves */}
                  <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border-2 border-gray-200 overflow-hidden">
                    {/* Image de fond - classe */}
                    <div className="absolute inset-0 z-0 opacity-25">
                      <Image
                        src="/images/classroom.jpg"
                        alt="Salle de classe"
                        fill
                        className="object-cover"
                        quality={80}
                      />
                    </div>
                    
                    {/* Contenu par-dessus l'image */}
                    <div className="relative z-10">
                      {/* Grille de cartes élèves */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
                        {[
                          { name: 'Camille V.', fullName: 'Camille Vincent', initial: 'CV', avg: 16.2, isAbsent: false },
                          { name: 'Nathan M.', fullName: 'Nathan Mercier', initial: 'NM', avg: 15.8, isAbsent: false },
                          { name: 'Inès D.', fullName: 'Inès Dubois', initial: 'ID', avg: 17.1, isAbsent: false },
                          { name: 'Louis R.', fullName: 'Louis Robert', initial: 'LR', avg: 14.5, isAbsent: true },
                          { name: 'Zoé B.', fullName: 'Zoé Blanc', initial: 'ZB', avg: 16.7, isAbsent: false },
                          { name: 'Ethan H.', fullName: 'Ethan Henry', initial: 'EH', avg: 15.3, isAbsent: false },
                          { name: 'Lina J.', fullName: 'Lina Joly', initial: 'LJ', avg: 16.4, isAbsent: false },
                          { name: 'Noah L.', fullName: 'Noah Leroy', initial: 'NL', avg: 15.6, isAbsent: false },
                          { name: 'Manon N.', fullName: 'Manon Noel', initial: 'MN', avg: 14.9, isAbsent: false },
                          { name: 'Alexis W.', fullName: 'Alexis Weber', initial: 'AW', avg: 16.0, isAbsent: false },
                          { name: 'Sarah C.', fullName: 'Sarah Caron', initial: 'SC', avg: 15.2, isAbsent: true },
                          { name: 'Pierre Y.', fullName: 'Pierre Yves', initial: 'PY', avg: 16.5, isAbsent: false }
                        ].map((student, index) => (
                          <div
                            key={index}
                            className={`group relative cursor-pointer transition-all hover:scale-105 ${student.isAbsent ? 'opacity-60' : ''}`}
                          >
                            {/* Carte élève */}
                            <div className={`bg-white rounded-xl shadow-lg border-2 overflow-hidden hover:shadow-xl transition-all ${
                              student.isAbsent ? 'border-red-300' : 'border-gray-200'
                            }`}>
                              {/* Image de l'élève */}
                              <div className="relative h-24 bg-gradient-to-br from-gray-100 to-gray-200">
                                <div className={`absolute inset-0 flex items-center justify-center ${
                                  student.isAbsent 
                                    ? 'bg-gradient-to-br from-red-400 to-red-600' 
                                    : 'bg-gradient-to-br from-blue-400 to-indigo-500'
                                }`}>
                                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-4 border-white shadow-xl">
                                    <UserCircle2 className="w-12 h-12 text-white opacity-90" />
                                  </div>
                                </div>
                                
                                {student.isAbsent && (
                                  <div className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1.5 shadow-lg">
                                    <XCircleIcon className="w-4 h-4" />
                                  </div>
                                )}
                              </div>
                              
                              {/* Informations de l'élève */}
                              <div className="p-3">
                                <div className="text-center">
                                  <div className="font-bold text-sm text-gray-900 mb-2">{student.name}</div>
                                  
                                  {student.isAbsent && (
                                    <div className="inline-flex items-center gap-1 bg-red-50 text-red-700 px-2 py-1 rounded-full text-xs font-medium border border-red-200">
                                      <XCircleIcon className="w-3 h-3" />
                                      <span>Absent</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                              
                              {/* Boutons d'action */}
                              <div className="px-3 pb-3 flex items-center justify-center gap-2">
                                <button 
                                  className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-3 py-2 rounded-lg text-xs font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all flex items-center justify-center gap-1.5 shadow-md hover:shadow-lg"
                                  title="Consulter le profil"
                                >
                                  <UserIcon className="w-3.5 h-3.5" />
                                  <span>Profil</span>
                                </button>
                                <button 
                                  className={`flex-1 px-3 py-2 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 shadow-md hover:shadow-lg ${
                                    student.isAbsent 
                                      ? 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700' 
                                      : 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700'
                                  }`}
                                  title={student.isAbsent ? "Marquer comme présent" : "Marquer comme absent"}
                                >
                                  {student.isAbsent ? (
                                    <>
                                      <CheckCircle2 className="w-3.5 h-3.5" />
                                      <span>Présent</span>
                                    </>
                                  ) : (
                                    <>
                                      <X className="w-3.5 h-3.5" />
                                      <span>Absent</span>
                                    </>
                                  )}
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )
    }
  ];

  // Étapes pour le profil Parent
  const parentSteps: DemoStep[] = [
    {
      id: 'suivi-enfant',
      title: 'Suivi de Mon Enfant',
      description: 'Consultez l\'état de votre enfant, ses absences et ses professeurs',
      icon: <Users className="w-8 h-8" />,
      features: [
        'État général de l\'enfant',
        'Suivi des absences',
        'Liste des professeurs',
        'Contact avec les professeurs',
        'Notes et bulletins'
      ],
      content: (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-blue-200">
          <div className="bg-white rounded-xl shadow-xl p-3 sm:p-4 md:p-6 mb-4 -mx-2 sm:-mx-4 md:-mx-6">
            {/* En-tête enfant */}
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                <UserCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg whitespace-nowrap">Sophie Martin</h4>
                  <span className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">•</span>
                  <span className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">CE1-A</span>
                  <span className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">•</span>
                  <span className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">N°: 2025-001</span>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600">15.5/20</div>
                <div className="text-[10px] sm:text-xs text-gray-500">Moyenne</div>
              </div>
            </div>

            {/* Statistiques principales */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="bg-green-50 rounded-lg p-2 sm:p-3 md:p-4 border-l-4 border-green-500">
                <div className="flex items-center gap-1 sm:gap-2 mb-0.5 sm:mb-1">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                  <div className="text-[10px] sm:text-xs text-gray-600 truncate">Présences</div>
                </div>
                <div className="text-base sm:text-xl md:text-2xl font-bold text-green-600">142</div>
                <div className="text-[10px] sm:text-xs text-gray-500 truncate">Jours</div>
              </div>
              <div className="bg-red-50 rounded-lg p-2 sm:p-3 md:p-4 border-l-4 border-red-500">
                <div className="flex items-center gap-1 sm:gap-2 mb-0.5 sm:mb-1">
                  <UserX className="w-3 h-3 sm:w-4 sm:h-4 text-red-600 flex-shrink-0" />
                  <div className="text-[10px] sm:text-xs text-gray-600 truncate">Absences</div>
                </div>
                <div className="text-base sm:text-xl md:text-2xl font-bold text-red-600">3</div>
                <div className="text-[10px] sm:text-xs text-gray-500 truncate">Jours</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-2 sm:p-3 md:p-4 border-l-4 border-purple-500">
                <div className="flex items-center gap-1 sm:gap-2 mb-0.5 sm:mb-1">
                  <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600 flex-shrink-0" />
                  <div className="text-[10px] sm:text-xs text-gray-600 truncate">Professeurs</div>
                </div>
                <div className="text-base sm:text-xl md:text-2xl font-bold text-purple-600">8</div>
                <div className="text-[10px] sm:text-xs text-gray-500 truncate">En charge</div>
              </div>
            </div>

            {/* Absences */}
            <div className="mb-4">
              <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <UserX className="w-5 h-5 text-red-600" />
                Absences
              </h5>
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-4 border-2 border-red-200">
                <div className="space-y-2">
                  <div className="bg-white rounded-lg p-3 border-l-4 border-red-500">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-900">15 Mars 2025</div>
                        <div className="text-xs text-gray-600">Justifiée - Certificat médical</div>
                      </div>
                      <div className="text-xs font-medium text-red-700 bg-red-100 px-2 py-1 rounded-full">
                        Justifiée
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 border-l-4 border-yellow-500">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-900">22 Mars 2025</div>
                        <div className="text-xs text-gray-600">Non justifiée</div>
                      </div>
                      <div className="text-xs font-medium text-yellow-700 bg-yellow-100 px-2 py-1 rounded-full">
                        Non justifiée
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 border-l-4 border-red-500">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-900">28 Mars 2025</div>
                        <div className="text-xs text-gray-600">Justifiée - Motif familial</div>
                      </div>
                      <div className="text-xs font-medium text-red-700 bg-red-100 px-2 py-1 rounded-full">
                        Justifiée
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Professeurs */}
            <div className="mb-3 sm:mb-4">
              <h5 className="font-bold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0" />
                <span>Professeurs</span>
              </h5>
              <div className="space-y-2 sm:space-y-2.5">
                <div className="bg-white border-2 border-purple-200 rounded-lg p-2.5 sm:p-3 md:p-4">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base truncate">M. Bernard</div>
                      <div className="text-[10px] sm:text-xs text-gray-600 truncate">Mathématiques</div>
                    </div>
                    <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-xs md:text-sm font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all flex items-center gap-1 sm:gap-2 flex-shrink-0">
                      <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">Contacter</span>
                    </button>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1.5 sm:gap-2 md:gap-4 text-[10px] sm:text-xs text-gray-600">
                    <div className="flex items-center gap-1">
                      <Mail className="w-3 h-3 flex-shrink-0" />
                      <span className="break-all truncate">bernard@ecole.fr</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="w-3 h-3 flex-shrink-0" />
                      <span className="whitespace-nowrap">01 23 45 67 89</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-blue-200 rounded-lg p-2.5 sm:p-3 md:p-4">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base truncate">Mme. Dubois</div>
                      <div className="text-[10px] sm:text-xs text-gray-600 truncate">Français</div>
                    </div>
                    <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-xs md:text-sm font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all flex items-center gap-1 sm:gap-2 flex-shrink-0">
                      <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">Contacter</span>
                    </button>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1.5 sm:gap-2 md:gap-4 text-[10px] sm:text-xs text-gray-600">
                    <div className="flex items-center gap-1">
                      <Mail className="w-3 h-3 flex-shrink-0" />
                      <span className="break-all truncate">dubois@ecole.fr</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="w-3 h-3 flex-shrink-0" />
                      <span className="whitespace-nowrap">01 23 45 67 90</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-green-200 rounded-lg p-2.5 sm:p-3 md:p-4">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base truncate">M. Martin</div>
                      <div className="text-[10px] sm:text-xs text-gray-600 truncate">Sciences</div>
                    </div>
                    <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-xs md:text-sm font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all flex items-center gap-1 sm:gap-2 flex-shrink-0">
                      <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">Contacter</span>
                    </button>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1.5 sm:gap-2 md:gap-4 text-[10px] sm:text-xs text-gray-600">
                    <div className="flex items-center gap-1">
                      <Mail className="w-3 h-3 flex-shrink-0" />
                      <span className="break-all truncate">martin@ecole.fr</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="w-3 h-3 flex-shrink-0" />
                      <span className="whitespace-nowrap">01 23 45 67 91</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'paiements',
      title: 'Gestion des Paiements',
      description: 'Consultez vos paiements, le reste à payer et téléchargez vos factures',
      icon: <CreditCard className="w-8 h-8" />,
      features: [
        'Reste à payer',
        'Tableau des paiements mensuels',
        'Statut de paiement par mois',
        'Téléchargement des factures',
        'Historique des paiements'
      ],
      content: (
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-green-200">
          <div className="bg-white rounded-xl shadow-xl p-3 sm:p-4 md:p-6 mb-4 -mx-2 sm:-mx-4 md:-mx-6">
            {/* En-tête */}
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                <CreditCard className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg truncate">Gestion des Paiements</h4>
                <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap text-xs sm:text-sm text-gray-600">
                  <span className="whitespace-nowrap">Sophie Martin</span>
                  <span>•</span>
                  <span className="whitespace-nowrap">CE1-A</span>
                </div>
              </div>
            </div>

            {/* Reste à payer */}
            <div className="mb-4 sm:mb-6">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-3 sm:p-4 md:p-6 border-2 border-orange-200">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 sm:mb-4 gap-3 sm:gap-4">
                  <div className="flex-1 min-w-0">
                    <h5 className="font-bold text-gray-900 mb-1 flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base">
                      <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 flex-shrink-0" />
                      <span>Reste à Payer</span>
                    </h5>
                    <p className="text-xs sm:text-sm text-gray-600">Montant total restant pour l'année scolaire</p>
                  </div>
                  <div className="text-left sm:text-right flex-shrink-0">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600 mb-1">450 €</div>
                    <div className="text-[10px] sm:text-xs text-gray-500">Sur 1200 €</div>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-semibold hover:from-orange-500 hover:to-red-500 transition-all flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base">
                  <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Effectuer un paiement</span>
                </button>
              </div>
            </div>

            {/* Tableau des paiements mensuels */}
            <div>
              <h5 className="font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base">
                <Receipt className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                <span>Historique des Paiements</span>
              </h5>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-3 sm:p-4 border-2 border-gray-200 -mx-2 sm:-mx-4 md:mx-0">
                <div className="space-y-2">
                  {[
                    { month: 'Septembre 2024', amount: 150, status: 'payé', date: '05/09/2024', facture: 'FAC-2024-09-001' },
                    { month: 'Octobre 2024', amount: 150, status: 'payé', date: '03/10/2024', facture: 'FAC-2024-10-001' },
                    { month: 'Novembre 2024', amount: 150, status: 'payé', date: '02/11/2024', facture: 'FAC-2024-11-001' },
                    { month: 'Décembre 2024', amount: 150, status: 'payé', date: '04/12/2024', facture: 'FAC-2024-12-001' },
                    { month: 'Janvier 2025', amount: 150, status: 'payé', date: '05/01/2025', facture: 'FAC-2025-01-001' },
                    { month: 'Février 2025', amount: 150, status: 'payé', date: '03/02/2025', facture: 'FAC-2025-02-001' },
                    { month: 'Mars 2025', amount: 150, status: 'payé', date: '04/03/2025', facture: 'FAC-2025-03-001' },
                    { month: 'Avril 2025', amount: 150, status: 'en attente', date: '-', facture: 'FAC-2025-04-001' },
                    { month: 'Mai 2025', amount: 150, status: 'non payé', date: '-', facture: '-' },
                    { month: 'Juin 2025', amount: 150, status: 'non payé', date: '-', facture: '-' }
                  ].map((payment, index) => (
                    <div
                      key={index}
                      className={`bg-white rounded-lg p-2.5 sm:p-3 md:p-4 border-2 ${
                        payment.status === 'payé' 
                          ? 'border-green-200' 
                          : payment.status === 'en attente'
                          ? 'border-yellow-200'
                          : 'border-red-200'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3">
                        <div className="flex-1 min-w-0 w-full sm:w-auto">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2 md:gap-3 mb-1.5 sm:mb-2">
                            <div className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base truncate">{payment.month}</div>
                            <div className={`text-[10px] sm:text-xs font-medium px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full flex items-center gap-1 w-fit whitespace-nowrap ${
                              payment.status === 'payé'
                                ? 'bg-green-100 text-green-700'
                                : payment.status === 'en attente'
                                ? 'bg-yellow-100 text-yellow-700'
                                : 'bg-red-100 text-red-700'
                            }`}>
                              {payment.status === 'payé' && <CheckCircleIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0" />}
                              {payment.status === 'en attente' && <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0" />}
                              {payment.status === 'non payé' && <XCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0" />}
                              <span className="truncate">{payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 md:gap-4 text-[10px] sm:text-xs text-gray-600">
                            <span className="font-semibold text-gray-900">{payment.amount} €</span>
                            {payment.date !== '-' && (
                              <>
                                <span className="hidden sm:inline">•</span>
                                <span className="whitespace-nowrap">Payé le {payment.date}</span>
                              </>
                            )}
                            {payment.facture !== '-' && (
                              <>
                                <span className="hidden sm:inline">•</span>
                                <span className="break-all truncate">{payment.facture}</span>
                              </>
                            )}
                          </div>
                        </div>
                        <div className="flex gap-1.5 sm:gap-2 w-full sm:w-auto">
                          {payment.status === 'payé' && payment.facture !== '-' && (
                            <button className="flex-1 sm:flex-none bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-xs md:text-sm font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all flex items-center gap-1 sm:gap-2 justify-center flex-shrink-0">
                              <Download className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                              <span className="hidden sm:inline">Facture</span>
                              <span className="sm:hidden">Télécharger</span>
                            </button>
                          )}
                          {payment.status === 'non payé' && (
                            <button className="flex-1 sm:flex-none bg-gradient-to-r from-orange-500 to-red-600 text-white px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-xs md:text-sm font-semibold hover:from-orange-600 hover:to-red-700 transition-all flex items-center gap-1 sm:gap-2 justify-center flex-shrink-0">
                              <CreditCard className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                              <span>Payer</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Résumé */}
            <div className="mt-4 sm:mt-6 grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
              <div className="bg-green-50 rounded-lg p-2 sm:p-3 md:p-4 text-center border-2 border-green-200">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-green-600 mb-0.5 sm:mb-1">8</div>
                <div className="text-[10px] sm:text-xs text-gray-600">Mois payés</div>
              </div>
              <div className="bg-yellow-50 rounded-lg p-2 sm:p-3 md:p-4 text-center border-2 border-yellow-200">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-600 mb-0.5 sm:mb-1">1</div>
                <div className="text-[10px] sm:text-xs text-gray-600">En attente</div>
              </div>
              <div className="bg-red-50 rounded-lg p-2 sm:p-3 md:p-4 text-center border-2 border-red-200">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-red-600 mb-0.5 sm:mb-1">2</div>
                <div className="text-[10px] sm:text-xs text-gray-600">Non payés</div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  // Étapes pour le profil Administrateur
  const adminSteps: DemoStep[] = [
    {
      id: 'dashboard',
      title: 'Dashboard Administrateur',
      description: 'Vue d\'ensemble de l\'établissement : professeurs, classes, élèves et paiements',
      icon: <BarChart3 className="w-8 h-8" />,
      features: [
        'Liste des professeurs',
        'Gestion des classes',
        'Tableau des élèves',
        'Relance des paiements',
        'Consultation des dossiers'
      ],
      content: (
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-orange-200">
          {/* Diagramme des gains mensuels */}
          <div className="bg-white rounded-xl shadow-xl p-3 sm:p-4 md:p-6 border-2 border-gray-200 mb-4 sm:mb-6 -mx-2 sm:-mx-4 md:-mx-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-4">
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg flex items-center gap-1.5 sm:gap-2">
                  <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                  <span>Plan Financier</span>
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">Évolution du chiffre d'affaires et des charges</p>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
                <div className="text-center sm:text-right">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-green-600">36,750 €</div>
                  <div className="text-[10px] sm:text-xs text-gray-600">CA Total</div>
                </div>
                <div className="text-center sm:text-right">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-red-600">28,500 €</div>
                  <div className="text-[10px] sm:text-xs text-gray-600">Charges Total</div>
                </div>
              </div>
            </div>

            {/* Graphique avec deux courbes linéaires */}
            <div className="relative">
              {/* Vue mobile : Liste des données par mois */}
              <div className="block md:hidden space-y-2 mb-4">
                {(() => {
                  const months = [
                    { month: 'Septembre', ca: 3150, charges: 2400 },
                    { month: 'Octobre', ca: 3300, charges: 2500 },
                    { month: 'Novembre', ca: 3000, charges: 2300 },
                    { month: 'Décembre', ca: 2850, charges: 2200 },
                    { month: 'Janvier', ca: 3150, charges: 2400 },
                    { month: 'Février', ca: 3000, charges: 2350 },
                    { month: 'Mars', ca: 3300, charges: 2500 },
                    { month: 'Avril', ca: 3000, charges: 2300 },
                    { month: 'Mai', ca: 3150, charges: 2400 },
                    { month: 'Juin', ca: 3000, charges: 2300 }
                  ];
                  return months.map((m, i) => (
                    <div key={i} className="bg-gray-50 rounded-lg p-2.5 border-2 border-gray-200">
                      <div className="font-semibold text-gray-900 text-xs mb-2">{m.month}</div>
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-1.5 mb-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-[10px] text-gray-600">CA</span>
                          </div>
                          <div className="text-sm font-bold text-green-600">{m.ca.toLocaleString()} €</div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-1.5 mb-1">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="text-[10px] text-gray-600">Charges</span>
                          </div>
                          <div className="text-sm font-bold text-red-600">{m.charges.toLocaleString()} €</div>
                        </div>
                        <div className="flex-1 text-right">
                          <div className="text-[10px] text-gray-500 mb-1">Bénéfice</div>
                          <div className={`text-sm font-bold ${(m.ca - m.charges) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {(m.ca - m.charges).toLocaleString()} €
                          </div>
                        </div>
                      </div>
                    </div>
                  ));
                })()}
              </div>

              {/* Vue desktop : Graphique SVG */}
              <div className="hidden md:block relative mb-4" style={{ height: '320px', minHeight: '280px' }}>
                <div className="relative overflow-x-auto" style={{ height: '320px', minHeight: '280px' }}>
                  <svg className="w-full h-full min-w-[600px]" viewBox="0 0 1000 320" preserveAspectRatio="xMidYMid meet">
                  {/* Grille de fond */}
                  {[0, 1, 2, 3, 4].map((i) => (
                    <line
                      key={`grid-${i}`}
                      x1="0"
                      y1={64 + i * 64}
                      x2="1000"
                      y2={64 + i * 64}
                      stroke="#e5e7eb"
                      strokeWidth="1"
                      strokeDasharray="4,4"
                    />
                  ))}
                  
                  {/* Données */}
                  {(() => {
                    const months = [
                      { month: 'Sept', ca: 3150, charges: 2400 },
                      { month: 'Oct', ca: 3300, charges: 2500 },
                      { month: 'Nov', ca: 3000, charges: 2300 },
                      { month: 'Déc', ca: 2850, charges: 2200 },
                      { month: 'Jan', ca: 3150, charges: 2400 },
                      { month: 'Fév', ca: 3000, charges: 2350 },
                      { month: 'Mar', ca: 3300, charges: 2500 },
                      { month: 'Avr', ca: 3000, charges: 2300 },
                      { month: 'Mai', ca: 3150, charges: 2400 },
                      { month: 'Juin', ca: 3000, charges: 2300 }
                    ];
                    
                    const maxValue = 4000;
                    const chartHeight = 256;
                    const chartWidth = 1000;
                    const padding = 50;
                    const usableWidth = chartWidth - 2 * padding;
                    const usableHeight = chartHeight - 2 * padding;
                    
                    // Calcul des points pour le CA (Chiffre d'affaires)
                    const caPoints = months.map((m, i) => {
                      const x = padding + (i / (months.length - 1)) * usableWidth;
                      const y = padding + usableHeight - (m.ca / maxValue) * usableHeight;
                      return { x, y, value: m.ca };
                    });
                    
                    // Calcul des points pour les Charges
                    const chargesPoints = months.map((m, i) => {
                      const x = padding + (i / (months.length - 1)) * usableWidth;
                      const y = padding + usableHeight - (m.charges / maxValue) * usableHeight;
                      return { x, y, value: m.charges };
                    });
                    
                    // Création du path pour le CA
                    const caPath = caPoints.reduce((path, point, i) => {
                      if (i === 0) return `M ${point.x} ${point.y}`;
                      return `${path} L ${point.x} ${point.y}`;
                    }, '');
                    
                    // Création du path pour les Charges
                    const chargesPath = chargesPoints.reduce((path, point, i) => {
                      if (i === 0) return `M ${point.x} ${point.y}`;
                      return `${path} L ${point.x} ${point.y}`;
                    }, '');
                    
                    return (
                      <>
                        {/* Zone sous la courbe CA */}
                        <defs>
                          <linearGradient id="caGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#4ade80" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#4ade80" stopOpacity="0.05" />
                          </linearGradient>
                          <linearGradient id="chargesGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#f87171" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#f87171" stopOpacity="0.05" />
                          </linearGradient>
                        </defs>
                        
                        {/* Zone remplie CA */}
                        <path
                          d={`${caPath} L ${caPoints[caPoints.length - 1].x} ${padding + usableHeight} L ${caPoints[0].x} ${padding + usableHeight} Z`}
                          fill="url(#caGradient)"
                        />
                        
                        {/* Zone remplie Charges */}
                        <path
                          d={`${chargesPath} L ${chargesPoints[chargesPoints.length - 1].x} ${padding + usableHeight} L ${chargesPoints[0].x} ${padding + usableHeight} Z`}
                          fill="url(#chargesGradient)"
                        />
                        
                        {/* Ligne CA */}
                        <path
                          d={caPath}
                          fill="none"
                          stroke="#22c55e"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        
                        {/* Ligne Charges */}
                        <path
                          d={chargesPath}
                          fill="none"
                          stroke="#ef4444"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        
                        {/* Points CA */}
                        {caPoints.map((point, i) => (
                          <g key={`ca-point-${i}`}>
                            <circle
                              cx={point.x}
                              cy={point.y}
                              r="5"
                              fill="#22c55e"
                              stroke="white"
                              strokeWidth="2"
                              className="hover:r-7 transition-all cursor-pointer"
                            />
                            <title>{months[i].month}: {point.value}€</title>
                          </g>
                        ))}
                        
                        {/* Points Charges */}
                        {chargesPoints.map((point, i) => (
                          <g key={`charges-point-${i}`}>
                            <circle
                              cx={point.x}
                              cy={point.y}
                              r="5"
                              fill="#ef4444"
                              stroke="white"
                              strokeWidth="2"
                              className="hover:r-7 transition-all cursor-pointer"
                            />
                            <title>{months[i].month}: {point.value}€</title>
                          </g>
                        ))}
                      </>
                    );
                  })()}
                  </svg>
                  
                  {/* Labels des mois en bas */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2 sm:px-4" style={{ paddingLeft: '40px', paddingRight: '40px' }}>
                    {['Sept', 'Oct', 'Nov', 'Déc', 'Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'].map((month, i) => (
                      <div key={i} className="text-xs font-medium text-gray-600 truncate">
                        {month}
                      </div>
                    ))}
                  </div>
                  
                  {/* Échelle à gauche */}
                  <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between py-4" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
                    {[4000, 3000, 2000, 1000, 0].map((value, i) => (
                      <div key={i} className="text-xs text-gray-500 whitespace-nowrap">
                        {value.toLocaleString()}€
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Légende - Desktop uniquement */}
              <div className="hidden md:flex flex-row items-center justify-center gap-6 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-0.5 bg-green-500"></div>
                  <span className="text-sm font-semibold text-gray-700">Chiffre d'affaires</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-0.5 bg-red-500"></div>
                  <span className="text-sm font-semibold text-gray-700">Charges</span>
                </div>
              </div>

              {/* Statistiques */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t-2 border-gray-200">
                <div className="bg-green-50 rounded-lg p-2 sm:p-3 md:p-4 border-2 border-green-200">
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm font-semibold text-gray-700 truncate">CA moyen</span>
                  </div>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-green-600">3,075 €</div>
                  <div className="text-[10px] sm:text-xs text-gray-600 mt-0.5 sm:mt-1">Par mois</div>
                </div>
                <div className="bg-red-50 rounded-lg p-2 sm:p-3 md:p-4 border-2 border-red-200">
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm font-semibold text-gray-700 truncate">Charges moy.</span>
                  </div>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-red-600">2,350 €</div>
                  <div className="text-[10px] sm:text-xs text-gray-600 mt-0.5 sm:mt-1">Par mois</div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistiques globales */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
            <div className="bg-white rounded-xl shadow-lg p-2 sm:p-3 md:p-4 border-2 border-blue-200">
              <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                <div className="bg-blue-100 p-1.5 sm:p-2 rounded-lg flex-shrink-0">
                  <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">12</div>
                  <div className="text-[10px] sm:text-xs text-gray-600 truncate">Professeurs</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-2 sm:p-3 md:p-4 border-2 border-green-200">
              <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                <div className="bg-green-100 p-1.5 sm:p-2 rounded-lg flex-shrink-0">
                  <School className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">8</div>
                  <div className="text-[10px] sm:text-xs text-gray-600 truncate">Classes</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-2 sm:p-3 md:p-4 border-2 border-purple-200">
              <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                <div className="bg-purple-100 p-1.5 sm:p-2 rounded-lg flex-shrink-0">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">245</div>
                  <div className="text-[10px] sm:text-xs text-gray-600 truncate">Élèves</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-2 sm:p-3 md:p-4 border-2 border-orange-200">
              <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                <div className="bg-orange-100 p-1.5 sm:p-2 rounded-lg flex-shrink-0">
                  <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">18</div>
                  <div className="text-[10px] sm:text-xs text-gray-600 truncate">Paiements attente</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
            {/* Liste des professeurs */}
            <div className="bg-white rounded-xl shadow-xl p-3 sm:p-4 md:p-6 border-2 border-gray-200 -mx-2 sm:-mx-4 md:mx-0">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 sm:mb-4 gap-2 sm:gap-3">
                <h4 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg flex items-center gap-1.5 sm:gap-2">
                  <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                  <span>Liste des Professeurs</span>
                </h4>
                <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-2 sm:px-3 py-1 rounded-lg text-[10px] sm:text-xs md:text-sm font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all flex items-center gap-1 sm:gap-2 w-full sm:w-auto justify-center flex-shrink-0">
                  <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Ajouter</span>
                </button>
              </div>
              <div className="space-y-1.5 sm:space-y-2 max-h-64 overflow-y-auto">
                {[
                  { name: 'M. Bernard', subject: 'Mathématiques', classes: ['CE1-A', 'CE1-B'], email: 'bernard@ecole.fr' },
                  { name: 'Mme. Dubois', subject: 'Français', classes: ['CE1-A', 'CE2-A'], email: 'dubois@ecole.fr' },
                  { name: 'M. Martin', subject: 'Sciences', classes: ['CE1-A', 'CE1-B', 'CE2-A'], email: 'martin@ecole.fr' },
                  { name: 'Mme. Laurent', subject: 'Histoire', classes: ['CE2-A'], email: 'laurent@ecole.fr' },
                  { name: 'M. Petit', subject: 'Anglais', classes: ['CE1-A', 'CE1-B'], email: 'petit@ecole.fr' }
                ].map((prof, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-2 sm:p-2.5 md:p-3 border-2 border-gray-200 hover:border-blue-300 transition-all">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base truncate">{prof.name}</div>
                        <div className="text-[10px] sm:text-xs text-gray-600 truncate">{prof.subject}</div>
                        <div className="text-[10px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1 truncate">Classes: {prof.classes.join(', ')}</div>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                        <button className="p-1.5 sm:p-2 hover:bg-blue-100 rounded-lg transition-all" title="Contacter">
                          <MailIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
                        </button>
                        <button className="p-1.5 sm:p-2 hover:bg-gray-200 rounded-lg transition-all" title="Plus d'options">
                          <MoreVertical className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Liste des classes */}
            <div className="bg-white rounded-xl shadow-xl p-3 sm:p-4 md:p-6 border-2 border-gray-200 -mx-2 sm:-mx-4 md:mx-0">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 sm:mb-4 gap-2 sm:gap-3">
                <h4 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg flex items-center gap-1.5 sm:gap-2">
                  <School className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                  <span>Classes</span>
                </h4>
                <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-2 sm:px-3 py-1 rounded-lg text-[10px] sm:text-xs md:text-sm font-semibold hover:from-green-600 hover:to-emerald-700 transition-all flex items-center gap-1 sm:gap-2 w-full sm:w-auto justify-center flex-shrink-0">
                  <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Ajouter</span>
                </button>
              </div>
              <div className="space-y-1.5 sm:space-y-2 max-h-64 overflow-y-auto">
                {[
                  { name: 'CE1-A', students: 12, teacher: 'M. Bernard', status: 'active' },
                  { name: 'CE1-B', students: 14, teacher: 'Mme. Dubois', status: 'active' },
                  { name: 'CE2-A', students: 13, teacher: 'M. Martin', status: 'active' },
                  { name: 'CE2-B', students: 15, teacher: 'Mme. Laurent', status: 'active' },
                  { name: 'CM1-A', students: 16, teacher: 'M. Petit', status: 'active' },
                  { name: 'CM1-B', students: 14, teacher: 'M. Bernard', status: 'active' },
                  { name: 'CM2-A', students: 15, teacher: 'Mme. Dubois', status: 'active' },
                  { name: 'CM2-B', students: 13, teacher: 'M. Martin', status: 'active' }
                ].map((classe, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-2 sm:p-2.5 md:p-3 border-2 border-gray-200 hover:border-green-300 transition-all">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base truncate">{classe.name}</div>
                        <div className="text-[10px] sm:text-xs text-gray-600 truncate">{classe.students} élèves • {classe.teacher}</div>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                        <div className="text-[10px] sm:text-xs font-medium bg-green-100 text-green-700 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full whitespace-nowrap">
                          {classe.status === 'active' ? 'Active' : 'Inactive'}
                        </div>
                        <button className="p-1.5 sm:p-2 hover:bg-gray-200 rounded-lg transition-all" title="Voir détails">
                          <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tableau des élèves */}
          <div className="bg-white rounded-xl shadow-xl p-6 border-2 border-gray-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-3">
              <h4 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-600" />
                Tableau des Élèves
              </h4>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
                <div className="relative w-full sm:w-auto">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Rechercher un élève..."
                    className="pl-10 pr-4 py-2 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 w-full"
                  />
                </div>
                <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-3 py-2 rounded-lg text-sm font-semibold hover:from-purple-600 hover:to-indigo-700 transition-all flex items-center gap-2 justify-center w-full sm:w-auto">
                  <Plus className="w-4 h-4" />
                  Ajouter
                </button>
              </div>
            </div>
            <div className="overflow-x-auto -mx-6 px-6">
              <table className="w-full min-w-[640px]">
                <thead>
                  <tr className="bg-gray-100 border-b-2 border-gray-200">
                    <th className="text-left p-2 sm:p-3 text-xs sm:text-sm font-semibold text-gray-700">Nom</th>
                    <th className="text-left p-2 sm:p-3 text-xs sm:text-sm font-semibold text-gray-700">Classe</th>
                    <th className="text-left p-2 sm:p-3 text-xs sm:text-sm font-semibold text-gray-700">Statut</th>
                    <th className="text-left p-2 sm:p-3 text-xs sm:text-sm font-semibold text-gray-700">Montant</th>
                    <th className="text-center p-2 sm:p-3 text-xs sm:text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'Sophie Martin', classe: 'CE1-A', paymentStatus: 'en retard', amount: 450, email: 'sophie.martin@parent.fr' },
                    { name: 'Lucas Dubois', classe: 'CE1-A', paymentStatus: 'à jour', amount: 0, email: 'lucas.dubois@parent.fr' },
                    { name: 'Emma Bernard', classe: 'CE1-B', paymentStatus: 'en attente', amount: 300, email: 'emma.bernard@parent.fr' },
                    { name: 'Hugo Laurent', classe: 'CE2-A', paymentStatus: 'en retard', amount: 600, email: 'hugo.laurent@parent.fr' },
                    { name: 'Léa Petit', classe: 'CE2-A', paymentStatus: 'à jour', amount: 0, email: 'lea.petit@parent.fr' },
                    { name: 'Noah Martin', classe: 'CE1-B', paymentStatus: 'en attente', amount: 150, email: 'noah.martin@parent.fr' }
                  ].map((student, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="p-2 sm:p-3">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
                            {student.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span className="font-medium text-gray-900 text-xs sm:text-sm truncate">{student.name}</span>
                        </div>
                      </td>
                      <td className="p-2 sm:p-3 text-xs sm:text-sm text-gray-700 whitespace-nowrap">{student.classe}</td>
                      <td className="p-2 sm:p-3">
                        <div className={`text-xs font-medium px-2 py-1 rounded-full inline-block whitespace-nowrap ${
                          student.paymentStatus === 'à jour'
                            ? 'bg-green-100 text-green-700'
                            : student.paymentStatus === 'en attente'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-red-100 text-red-700'
                        }`}>
                          {student.paymentStatus === 'à jour' && <CheckCircleIcon className="w-3 h-3 inline mr-1" />}
                          {student.paymentStatus === 'en attente' && <Clock className="w-3 h-3 inline mr-1" />}
                          {student.paymentStatus === 'en retard' && <AlertCircle className="w-3 h-3 inline mr-1" />}
                          <span className="hidden sm:inline">{student.paymentStatus.charAt(0).toUpperCase() + student.paymentStatus.slice(1)}</span>
                          <span className="sm:hidden">{student.paymentStatus === 'à jour' ? 'OK' : student.paymentStatus === 'en attente' ? 'Att.' : 'Ret.'}</span>
                        </div>
                      </td>
                      <td className="p-2 sm:p-3">
                        <span className={`font-semibold text-xs sm:text-sm whitespace-nowrap ${
                          student.amount > 0 ? 'text-red-600' : 'text-green-600'
                        }`}>
                          {student.amount > 0 ? `${student.amount} €` : 'Payé'}
                        </span>
                      </td>
                      <td className="p-2 sm:p-3">
                        <div className="flex items-center justify-center gap-1 sm:gap-2">
                          <button
                            className="p-1.5 sm:p-2 hover:bg-blue-100 rounded-lg transition-all"
                            title="Voir dossier"
                          >
                            <FolderOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
                          </button>
                          {student.amount > 0 && (
                            <button
                              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-2 sm:px-3 py-1 rounded-lg text-xs font-semibold hover:from-orange-600 hover:to-red-700 transition-all flex items-center gap-1"
                              title="Relancer paiement"
                            >
                              <MailIcon className="w-3 h-3" />
                              <span className="hidden sm:inline">Relancer</span>
                            </button>
                          )}
                          <button
                            className="p-1.5 sm:p-2 hover:bg-gray-200 rounded-lg transition-all"
                            title="Plus d'options"
                          >
                            <MoreVertical className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      )
    }
  ];

  // Sélectionner les étapes selon le rôle
  const demoSteps = selectedRole === 'eleve' ? eleveSteps : 
                    selectedRole === 'professeur' ? professeurSteps : 
                    selectedRole === 'parent' ? parentSteps :
                    selectedRole === 'administrateur' ? adminSteps :
                    eleveSteps;

  const nextStep = () => {
    if (currentStep < demoSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (index: number) => {
    setCurrentStep(index);
  };

  // Réinitialiser l'étape quand on change de rôle
  useEffect(() => {
    setCurrentStep(0);
  }, [selectedRole]);

  const currentDemo = demoSteps[currentStep];

  // Page de sélection de rôle
  if (!selectedRole) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white py-6 shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">Visite Guidée d'EduElite</h1>
                <p className="text-blue-100">Découvrez toutes les fonctionnalités de notre plateforme</p>
              </div>
              <Link
                href="/"
                className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-xl font-semibold transition-all backdrop-blur-sm"
              >
                Retour à l'accueil
              </Link>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Choisissez Votre Profil
              </h2>
              <p className="text-xl text-gray-600">
                Sélectionnez votre rôle pour découvrir la visite guidée adaptée à vos besoins
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Élève */}
              <button
                onClick={() => setSelectedRole('eleve')}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-green-500 text-left"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                    <UserCircle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Élève</h3>
                    <p className="text-sm text-gray-600">Accédez à vos cours et exercices</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>Documents et exercices</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>Planning et emploi du temps</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>Notes et bulletins</span>
                  </li>
                </ul>
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-lg p-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-yellow-600" />
                  <span className="text-xs font-semibold text-yellow-800">Premium: Ajouter une fonctionnalité personnalisée</span>
                </div>
              </button>

              {/* Professeur */}
              <button
                onClick={() => setSelectedRole('professeur')}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-purple-500 text-left"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Professeur</h3>
                    <p className="text-sm text-gray-600">Gérez vos classes et élèves</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>Gestion des classes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>Envoi d'exercices et documents</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>Saisie des notes</span>
                  </li>
                </ul>
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-lg p-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-yellow-600" />
                  <span className="text-xs font-semibold text-yellow-800">Premium: Ajouter une fonctionnalité personnalisée</span>
                </div>
              </button>

              {/* Parent */}
              <button
                onClick={() => setSelectedRole('parent')}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-blue-500 text-left"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl group-hover:scale-110 transition-transform flex items-center justify-center">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Parent</h3>
                    <p className="text-sm text-gray-600">Suivez la scolarité de votre enfant</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>Suivi des notes et bulletins</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>Communication avec les professeurs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>Consultation du planning</span>
                  </li>
                </ul>
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-lg p-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-yellow-600" />
                  <span className="text-xs font-semibold text-yellow-800">Premium: Ajouter une fonctionnalité personnalisée</span>
                </div>
              </button>

              {/* Administrateur */}
              <button
                onClick={() => setSelectedRole('administrateur')}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-orange-500 text-left"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                    <UserCog className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Administrateur</h3>
                    <p className="text-sm text-gray-600">Gestion complète de l'établissement</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>Gestion des utilisateurs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>Configuration de la plateforme</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>Gestion financière</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>Statistiques et rapports</span>
                  </li>
                </ul>
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-lg p-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-yellow-600" />
                  <span className="text-xs font-semibold text-yellow-800">Premium: Ajouter une fonctionnalité personnalisée</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Visite Guidée d'EduElite</h1>
              <p className="text-sm sm:text-base text-blue-100">
                Profil: <span className="font-semibold capitalize">{selectedRole === 'eleve' ? 'Élève' : selectedRole === 'parent' ? 'Parent' : selectedRole === 'professeur' ? 'Professeur' : 'Administrateur'}</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <button
                onClick={() => setSelectedRole(null)}
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-500 hover:via-purple-500 hover:to-blue-500 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-xl font-semibold transition-all backdrop-blur-sm text-white shadow-lg hover:shadow-xl flex items-center justify-center gap-2 border border-white/20 text-sm sm:text-base whitespace-nowrap"
              >
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span>Changer de profil</span>
              </button>
              <Link
                href="/"
                className="bg-white/20 hover:bg-white/30 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-xl font-semibold transition-all backdrop-blur-sm text-center text-sm sm:text-base whitespace-nowrap"
              >
                Retour à l'accueil
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center justify-between mb-4">
            {demoSteps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => goToStep(index)}
                className={`flex-1 mx-1 py-3 rounded-xl font-semibold transition-all ${
                  index === currentStep
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                    : index < currentStep
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  {index < currentStep ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : (
                    <div className={`w-5 h-5 rounded-full border-2 ${
                      index === currentStep ? 'border-white' : 'border-gray-400'
                    } flex items-center justify-center`}>
                      {index === currentStep && <div className="w-2 h-2 bg-white rounded-full"></div>}
                    </div>
                  )}
                  <span className="hidden sm:inline">
                    {step.id === 'documentation' ? 'Documentation' : 
                     step.id === 'mon-espace' ? 'Mon Espace' : 
                     step.id === 'mon-espace-prof' ? 'Mon Espace' : 
                     step.id === 'planning' ? 'Planning' : 
                     step.id === 'mes-eleves' ? 'Mes Élèves' : 
                     step.id === 'classes' ? 'Gestion Classes' : 
                     step.id === 'suivi-enfant' ? 'Suivi Enfant' : 
                     step.id === 'paiements' ? 'Paiements' : 
                     step.id === 'dashboard' ? 'Dashboard' : 
                     step.title.split(' ')[0]}
                  </span>
                </div>
              </button>
            ))}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / demoSteps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Main Demo Content */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Step Header */}
            <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white p-6 sm:p-8 shadow-lg">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="bg-white/20 backdrop-blur-sm p-3 sm:p-4 rounded-2xl flex-shrink-0">
                  {currentDemo.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs sm:text-sm font-medium text-blue-100 mb-2">
                    Étape {currentStep + 1} sur {demoSteps.length}
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">{currentDemo.title}</h2>
                  {currentDemo.id === 'documentation' ? (
                    <div className="space-y-2">
                      <p className="text-sm sm:text-base md:text-lg text-blue-100 leading-relaxed">{currentDemo.description}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs sm:text-sm">
                          <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                          Protection maximale
                        </span>
                        <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs sm:text-sm">
                          <FileTextIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                          Documents organisés
                        </span>
                        <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs sm:text-sm">
                          <Lock className="w-3 h-3 sm:w-4 sm:h-4" />
                          Lecture sécurisée
                        </span>
                      </div>
                    </div>
                  ) : (
                    <p className="text-sm sm:text-base md:text-lg text-blue-100">{currentDemo.description}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Demo Content */}
            <div className="p-4 sm:p-6 md:p-8">
              <div className="mb-6 sm:mb-8">
                {currentDemo.content}
              </div>

              {/* Features List */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {currentDemo.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Navigation */}
              <div className="pt-6 border-t border-gray-200">
                {/* Indicateurs de progression - centrés sur mobile */}
                <div className="flex justify-center mb-4 sm:mb-0">
                  <div className="flex gap-2">
                    {demoSteps.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToStep(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentStep
                            ? 'bg-blue-600 w-8'
                            : index < currentStep
                            ? 'bg-green-500'
                            : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Boutons de navigation - centrés sur mobile, espacés sur desktop */}
                <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 sm:gap-0">
                  <button
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                    Précédent
                  </button>

                  {currentStep < demoSteps.length - 1 ? (
                    <button
                      onClick={nextStep}
                      className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg hover:shadow-xl text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start"
                    >
                      Suivant
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  ) : (
                    <Link
                      href="/contact"
                      className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 hover:from-yellow-300 hover:to-orange-300 transition-all shadow-lg hover:shadow-xl text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start"
                    >
                      Planifier un Rendez-vous
                      <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          {currentStep === demoSteps.length - 1 && (
            <div className="mt-8 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-2xl p-8 text-white text-center shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Prêt à transformer votre école ?</h3>
              <p className="text-blue-100 mb-4">
                Découvrez comment EduElite peut répondre à tous vos besoins de gestion scolaire
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 inline-flex items-center gap-2">
                  <Tablet className="w-5 h-5 text-white" />
                  <span className="text-white font-medium text-sm">Fourniture de tablettes</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 inline-flex items-center gap-2">
                  <Palette className="w-5 h-5 text-white" />
                  <span className="text-white font-medium text-sm">Votre logo & identité</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-xl"
                >
                  Planifier un Rendez-vous
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
