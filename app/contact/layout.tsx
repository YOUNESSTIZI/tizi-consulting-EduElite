import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Planifier un Rendez-vous',
  description: 'Contactez EduElite pour découvrir comment notre plateforme de gestion scolaire peut transformer votre école. Planifiez un rendez-vous avec notre équipe. Service client disponible 24/7.',
  openGraph: {
    title: 'Contactez EduElite - Planifier un Rendez-vous',
    description: 'Discutons de la façon dont EduElite peut transformer la gestion de votre école. Service client disponible 24/7.',
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
