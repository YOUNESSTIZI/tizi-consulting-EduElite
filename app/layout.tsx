import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/components/AuthProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', 'arial'],
});

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://eduelite.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'EduElite - Plateforme de Gestion Scolaire d\'Excellence | Tizi-Consulting',
    template: '%s | EduElite - Tizi-Consulting',
  },
  description: 'EduElite : Solution complète de gestion scolaire d\'excellence. Planning, administration, ressources pédagogiques sécurisées, gestion des élèves, parents et professeurs. Tout ce dont votre école a besoin, en un seul endroit.',
  keywords: [
    'gestion scolaire',
    'plateforme éducative',
    'gestion d\'école',
    'planning scolaire',
    'administration scolaire',
    'ressources pédagogiques',
    'gestion élèves',
    'gestion parents',
    'gestion professeurs',
    'école numérique',
    'digitalisation école',
    'Tizi-Consulting',
    'EduElite',
    'système de gestion scolaire',
    'logiciel école',
  ],
  authors: [{ name: 'Tizi-Consulting', url: 'https://www.tizi-consulting.fr' }],
  creator: 'Tizi-Consulting',
  publisher: 'Tizi-Consulting',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: baseUrl,
    siteName: 'EduElite',
    title: 'EduElite - Plateforme de Gestion Scolaire d\'Excellence',
    description: 'Solution complète de gestion scolaire : planning, administration, ressources pédagogiques sécurisées. Tout ce dont votre école a besoin, en un seul endroit.',
    images: [
      {
        url: `${baseUrl}/images/icon_siteWeb.png`,
        width: 1200,
        height: 630,
        alt: 'EduElite - Gestion Scolaire d\'Excellence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EduElite - Plateforme de Gestion Scolaire d\'Excellence',
    description: 'Solution complète de gestion scolaire : planning, administration, ressources pédagogiques sécurisées.',
    images: [`${baseUrl}/images/icon_siteWeb.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
  category: 'education',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://eduelite.vercel.app';
  
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Tizi-Consulting',
    url: 'https://www.tizi-consulting.fr',
    logo: `${baseUrl}/images/icon_siteWeb.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+33-7-45-68-06-79',
      contactType: 'customer service',
      email: 'contact@tizi-consulting.fr',
      availableLanguage: 'French',
    },
    sameAs: [
      'https://www.tizi-consulting.fr',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'EduElite',
    url: baseUrl,
    description: 'Plateforme de gestion scolaire d\'excellence',
    publisher: {
      '@type': 'Organization',
      name: 'Tizi-Consulting',
    },
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Gestion Scolaire',
    provider: {
      '@type': 'Organization',
      name: 'Tizi-Consulting',
    },
    areaServed: {
      '@type': 'Country',
      name: 'France',
    },
    description: 'Solution complète de gestion scolaire : planning, administration, ressources pédagogiques sécurisées, gestion des élèves, parents et professeurs.',
  };

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}

