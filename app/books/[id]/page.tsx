import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';

// Import dynamique pour éviter les problèmes avec react-pdf côté serveur
const ProtectedPDFViewer = dynamic(
  () => import('@/components/ProtectedPDFViewer'),
  { 
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-screen bg-gray-800">
        <div className="text-white text-xl">Chargement du lecteur PDF...</div>
      </div>
    ),
  }
);

async function getBook(id: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/books/${id}`, {
      cache: 'no-store',
    });
    if (!response.ok) return null;
    return await response.json();
  } catch {
    return null;
  }
}

export default async function BookReaderPage({ params }: { params: { id: string } }) {
  const data = await getBook(params.id);
  
  if (!data || !data.book) {
    notFound();
  }

  const pdfUrl = `/api/pdf/${data.book.filename}`;

  return (
    <div className="h-screen">
      <ProtectedPDFViewer pdfUrl={pdfUrl} title={data.book.title} />
    </div>
  );
}

