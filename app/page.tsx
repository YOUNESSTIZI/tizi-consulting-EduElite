import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, GraduationCap, Shield, Users, Sparkles, ArrowRight, Calendar, FileText, UserCheck, Lock, School, Zap, Settings, Tablet, Palette, Mail } from 'lucide-react';

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
            alt="Éducation et apprentissage"
            fill
            className="object-cover brightness-110"
            priority
            quality={90}
          />
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-blue-800/40 to-purple-900/50"></div>
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
            <p className="text-xl md:text-2xl text-white/90 mb-4 leading-relaxed">
              Tout ce dont votre école a besoin, en un seul endroit
            </p>
            <p className="text-lg text-white/80 mb-2">
              Planning, administration, ressources pédagogiques sécurisées, et gestion des élèves, parents et professeurs
            </p>
            <p className="text-base text-white/70 mb-8">
              Plateforme entièrement personnalisée avec votre logo et votre identité visuelle
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
                href="/demo"
                className="group bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/50 hover:scale-105 flex items-center gap-2"
          >
                <Sparkles className="w-5 h-5" />
                Découvrir la Plateforme
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
                href="/contact"
                className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
                <Calendar className="w-5 h-5" />
                Planifier un Rendez-vous
          </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-yellow-400 mb-1">100%</div>
                <div className="text-sm text-white/80">Personnalisable</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-yellow-400 mb-1">Tout</div>
                <div className="text-sm text-white/80">En Un Seul Endroit</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-yellow-400 mb-1">24/7</div>
                <div className="text-sm text-white/80">Service Client</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Pourquoi Choisir EduElite ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tout ce dont votre école a besoin, en un seul endroit
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Gestion de Planning</h3>
              <p className="text-gray-600 leading-relaxed">
                Planifiez et gérez les emplois du temps des classes, professeurs et salles. Visualisation claire et intuitive pour toute l'école.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Administration Complète</h3>
              <p className="text-gray-600 leading-relaxed">
                Gérez facilement tous les aspects administratifs de votre école : inscriptions, bulletins, absences, et bien plus.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Lecture Sécurisée</h3>
              <p className="text-gray-600 leading-relaxed">
                Protection totale contre la diffusion non autorisée. Les ressources pédagogiques sont accessibles uniquement aux personnes autorisées par l'école.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <UserCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Gestion des Utilisateurs</h3>
              <p className="text-gray-600 leading-relaxed">
                Gérez facilement les élèves, parents et professeurs. Attribution de rôles et permissions pour un contrôle total.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Ressources Pédagogiques</h3>
              <p className="text-gray-600 leading-relaxed">
                Bibliothèque complète de PDFs organisés par niveau et matière. Accès sécurisé et contrôlé par l'école.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <School className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Communication Centralisée</h3>
              <p className="text-gray-600 leading-relaxed">
                Facilitez la communication entre l'école, les professeurs, les parents et les élèves. Tout au même endroit.
          </p>
        </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gradient-to-br from-yellow-400 to-orange-400 border-yellow-400 relative overflow-hidden">
              {/* Badge "Nouveau" ou accent spécial */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
                Flexible
              </div>
              <div className="bg-gradient-to-br from-yellow-500 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Digitalisation Sur Mesure</h3>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-gray-900">Tout ce que vous voulez digitaliser, nous le faisons.</strong> Besoin spécifique ? Processus unique ? 
                Notre plateforme s'adapte à vos besoins et digitalise tous vos processus scolaires selon vos exigences.
          </p>
        </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gradient-to-br from-cyan-400 to-blue-400 border-cyan-400 relative overflow-hidden">
              {/* Badge "Nouveau" ou accent spécial */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-400 to-blue-400 text-white text-xs font-bold px-3 py-1 rounded-full">
                Solution Complète
              </div>
              <div className="bg-gradient-to-br from-cyan-500 to-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Tablet className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Fourniture de Tablettes</h3>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-gray-900">Équipement complet inclus.</strong> Nous fournissons également les tablettes nécessaires pour votre école. 
                Solution tout-en-un : plateforme + équipement pour une digitalisation complète et immédiate.
          </p>
        </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gradient-to-br from-pink-400 to-rose-400 border-pink-400 relative overflow-hidden">
              {/* Badge "Nouveau" ou accent spécial */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-400 to-rose-400 text-white text-xs font-bold px-3 py-1 rounded-full">
                Votre Marque
              </div>
              <div className="bg-gradient-to-br from-pink-500 to-rose-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Plateforme Entièrement Vôtre</h3>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-gray-900">Votre logo, votre identité, votre vision.</strong> La plateforme est entièrement personnalisée selon votre école : 
                logo, couleurs, interface, et fonctionnalités adaptées à votre projet pédagogique. C'est votre plateforme, à votre image.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Prêt à Commencer ?
            </h2>
            <p className="text-xl text-white/90 mb-4">
              Tout ce dont votre école a besoin, en un seul endroit. Rejoignez les écoles qui font confiance à EduElite.
            </p>
            <p className="text-lg text-white/80 mb-8">
              Plateforme complète + Fourniture de tablettes disponible
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
        </div>
      </div>
    </div>
  );
}

