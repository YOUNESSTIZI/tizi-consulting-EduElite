'use client';

import { useState } from 'react';
import { Calendar, Phone, Mail, MapPin, Clock, CheckCircle2, Send, User, Building2, MessageSquare, Tablet, Palette } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    school: '',
    role: '',
    preferredDate: '',
    preferredTime: '',
    interestedInTablets: false,
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter l'envoi du formulaire à votre backend
    // Pour l'instant, on simule juste la soumission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        school: '',
        role: '',
        preferredDate: '',
        preferredTime: '',
        interestedInTablets: false,
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [target.name]: target.type === 'checkbox' ? target.checked : target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Planifiez Votre Rendez-vous</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Discutons de la façon dont EduElite peut transformer la gestion de votre école
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Nos Coordonnées</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-xl">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Téléphone</h3>
                      <a href="tel:+33745680679" className="text-blue-600 hover:text-blue-700 font-medium">
                        +33 7 45 68 06 79
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-3 rounded-xl">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <a href="mailto:contact@tizi-consulting.fr" className="text-blue-600 hover:text-blue-700 font-medium">
                        contact@tizi-consulting.fr
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-orange-500 to-amber-600 p-3 rounded-xl">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Site Web</h3>
                      <a href="https://www.tizi-consulting.fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium">
                        www.tizi-consulting.fr
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-3 rounded-xl">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Disponibilité</h3>
                      <p className="text-gray-600">Service client 24/7</p>
                      <p className="text-gray-600 text-sm">Rendez-vous sur demande</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4">Pourquoi nous contacter ?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">Démonstration personnalisée de la plateforme</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">Devis adapté à vos besoins</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">Accompagnement dans la digitalisation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">Support technique dédié</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">Fourniture de tablettes incluse (optionnel)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">Personnalisation complète : votre logo et votre identité visuelle</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="pt-8 border-t border-gray-200 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-3 rounded-xl">
                        <Tablet className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Solution Complète avec Équipement</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          Nous proposons également la fourniture de tablettes pour votre école. 
                          Une solution tout-en-un : plateforme + équipement pour une digitalisation immédiate et complète.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-gray-200 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-pink-500 to-rose-600 p-3 rounded-xl">
                        <Palette className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">Plateforme Entièrement Personnalisée</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          Votre logo, vos couleurs, votre identité visuelle. La plateforme est entièrement à vous et reflète 
                          la vision et les valeurs de votre école. C'est votre plateforme, à votre image.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Demande Envoyée !</h3>
                    <p className="text-gray-600 mb-6">
                      Merci pour votre intérêt. Nous vous contacterons dans les plus brefs délais.
                    </p>
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-500 hover:to-purple-500 transition-all"
                    >
                      Retour à l'accueil
                    </Link>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">Formulaire de Contact</h2>
                      <p className="text-gray-600">
                        Remplissez ce formulaire et nous vous recontacterons rapidement pour planifier votre rendez-vous
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                            <User className="w-4 h-4 inline mr-2" />
                            Nom complet *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            placeholder="Votre nom"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                            <Mail className="w-4 h-4 inline mr-2" />
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            placeholder="votre@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                            <Phone className="w-4 h-4 inline mr-2" />
                            Téléphone *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            placeholder="+33 6 12 34 56 78"
                          />
                        </div>

                        <div>
                          <label htmlFor="role" className="block text-sm font-semibold text-gray-700 mb-2">
                            <User className="w-4 h-4 inline mr-2" />
                            Votre fonction *
                          </label>
                          <select
                            id="role"
                            name="role"
                            required
                            value={formData.role}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          >
                            <option value="">Sélectionnez votre fonction</option>
                            <option value="directeur">Directeur / Directrice</option>
                            <option value="adjoint">Adjoint de direction</option>
                            <option value="secretaire">Secrétaire</option>
                            <option value="professeur">Professeur</option>
                            <option value="parent">Parent d'élève</option>
                            <option value="autre">Autre</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="school" className="block text-sm font-semibold text-gray-700 mb-2">
                          <Building2 className="w-4 h-4 inline mr-2" />
                          École / Établissement *
                        </label>
                        <input
                          type="text"
                          id="school"
                          name="school"
                          required
                          value={formData.school}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Nom de votre établissement"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-700 mb-2">
                            <Calendar className="w-4 h-4 inline mr-2" />
                            Date préférée
                          </label>
                          <input
                            type="date"
                            id="preferredDate"
                            name="preferredDate"
                            value={formData.preferredDate}
                            onChange={handleChange}
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          />
                        </div>

                        <div>
                          <label htmlFor="preferredTime" className="block text-sm font-semibold text-gray-700 mb-2">
                            <Clock className="w-4 h-4 inline mr-2" />
                            Heure préférée
                          </label>
                          <select
                            id="preferredTime"
                            name="preferredTime"
                            value={formData.preferredTime}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          >
                            <option value="">Sélectionnez une heure</option>
                            <option value="09:00">09:00</option>
                            <option value="10:00">10:00</option>
                            <option value="11:00">11:00</option>
                            <option value="14:00">14:00</option>
                            <option value="15:00">15:00</option>
                            <option value="16:00">16:00</option>
                            <option value="17:00">17:00</option>
                          </select>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border-2 border-cyan-200">
                        <div className="flex items-start gap-3">
                          <input
                            type="checkbox"
                            id="interestedInTablets"
                            name="interestedInTablets"
                            checked={formData.interestedInTablets}
                            onChange={handleChange}
                            className="mt-1 w-5 h-5 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500 focus:ring-2"
                          />
                          <div className="flex-1">
                            <label htmlFor="interestedInTablets" className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-1 cursor-pointer">
                              <Tablet className="w-5 h-5 text-cyan-600" />
                              Intéressé(e) par la fourniture de tablettes
                            </label>
                            <p className="text-xs text-gray-600">
                              Nous proposons également la fourniture de tablettes pour équiper votre école. 
                              Solution complète : plateforme + équipement.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                          <MessageSquare className="w-4 h-4 inline mr-2" />
                          Message / Besoins spécifiques
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                          placeholder="Décrivez vos besoins, questions ou demandes spécifiques..."
                        />
                      </div>

                      <div className="pt-4">
                        <button
                          type="submit"
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                        >
                          <Send className="w-5 h-5" />
                          Envoyer la Demande
                        </button>
                        <p className="text-xs text-gray-500 text-center mt-4">
                          En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe.
                        </p>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
