import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { BookOpen, GraduationCap, Shield, Users, Sparkles, ArrowRight, Calendar, FileText, UserCheck, Lock, School, Zap, Settings, Tablet, Palette, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Accueil - Plateforme de Gestion Scolaire d\'Excellence',
  description: 'Découvrez EduElite, la solution complète de gestion scolaire : planning intelligent, administration, ressources pédagogiques sécurisées, gestion des élèves, parents et professeurs. Personnalisable avec votre logo et votre identité visuelle.',
  openGraph: {
    title: 'EduElite - Tout ce dont votre école a besoin, en un seul endroit',
    description: 'Solution complète de gestion scolaire : planning, administration, ressources pédagogiques sécurisées. Plateforme entièrement personnalisable.',
    images: ['/images/icon_siteWeb.png'],
  },
};

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section with Background Image */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Fallback gradient background if image doesn't exist */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700"></div>
          <Image
            src="/images/background.jpg"
            alt="Éducation et apprentissage - EduElite"
            fill
            className="object-cover brightness-110"
            priority
            quality={90}
          />
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-blue-800/40 to-purple-900/50"></div>
          {/* Radial light effect at center for better text visibility - only in the center area */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-4xl h-96" style={{
              background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.08) 30%, transparent 60%)',
            }}></div>
          </div>
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6 border border-white/30">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">EduElite - Gestion Scolaire d'Excellence</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block">EduElite</span>
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Excellence Scolaire
              </span>
        </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Tout ce dont votre école a besoin, en un seul endroit
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
                href="/demo"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center gap-2"
          >
                Découvrir la Plateforme
                <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
                href="/contact"
                className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center gap-2"
          >
                <Mail className="w-5 h-5" />
                Nous Contacter
          </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-yellow-400 mb-1">100%</div>
                <div className="text-sm text-white/80">Personnalisable</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-yellow-400 mb-1">24/7</div>
                <div className="text-sm text-white/80">Service Client</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-yellow-400 mb-1">+</div>
                <div className="text-sm text-white/80">Tablettes Disponibles</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Pourquoi Choisir EduElite ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une solution complète et moderne pour transformer la gestion de votre école
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Gestion de Planning Intelligent</h3>
              <p className="text-gray-600">
                Planifiez et gérez les emplois du temps des classes, professeurs et salles. Visualisation claire et intuitive pour toute l'école.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Administration Simplifiée</h3>
              <p className="text-gray-600">
                Gérez facilement les inscriptions, les paiements, les absences et tous les aspects administratifs de votre école.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Lecture Sécurisée</h3>
              <p className="text-gray-600">
                Accès sécurisé aux ressources pédagogiques avec protection contre le téléchargement et la diffusion non autorisée.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Gestion Multi-Profils</h3>
              <p className="text-gray-600">
                Espaces dédiés pour les élèves, parents, professeurs et administrateurs avec des fonctionnalités adaptées à chaque rôle.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Tout le Reste que Vous Voulez Digitaliser</h3>
              <p className="text-gray-600">
                Notre plateforme est entièrement personnalisable pour répondre à tous vos besoins spécifiques.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Tablet className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Fourniture de Tablettes</h3>
              <p className="text-gray-600">
                Solution complète incluant la fourniture de tablettes pour vos élèves, prêtes à l'emploi avec la plateforme.
              </p>
            </div>

            {/* Feature 7 */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Palette className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Plateforme Entièrement Vôtre</h3>
              <p className="text-gray-600">
                Personnalisation complète avec votre logo, vos couleurs et votre identité visuelle. La plateforme devient vraiment la vôtre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à Commencer ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Plateforme complète + Fourniture de tablettes disponible
            <br />
            Plateforme entièrement personnalisée avec votre logo et votre identité visuelle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center gap-2"
            >
              Découvrir la Plateforme
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Nous Contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
