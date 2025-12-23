import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bibliothèque - Ressources Pédagogiques',
  description: 'Explorez notre bibliothèque de ressources pédagogiques sécurisées. Livres, exercices et documents éducatifs organisés par niveau et matière.',
  openGraph: {
    title: 'Bibliothèque EduElite - Ressources Pédagogiques',
    description: 'Accédez à une vaste collection de ressources pédagogiques sécurisées pour tous les niveaux scolaires.',
    type: 'website',
  },
};

export default function BooksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
