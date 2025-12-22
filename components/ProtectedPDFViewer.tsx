'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCw } from 'lucide-react';

// Configuration de PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface ProtectedPDFViewerProps {
  pdfUrl: string;
  title: string;
}

export default function ProtectedPDFViewer({ pdfUrl, title }: ProtectedPDFViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [rotation, setRotation] = useState(0);
  const [loading, setLoading] = useState(true);

  // Mémoriser les options du document pour éviter les rechargements
  const documentOptions = useMemo(() => ({
    cMapUrl: `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/cmaps/`,
    cMapPacked: true,
    disableAutoFetch: false, // Permettre le préchargement automatique des pages
    disableStream: false, // Permettre le streaming pour charger progressivement
    // Utiliser le cache du navigateur (géré par les headers HTTP du serveur)
  }), []);

  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setLoading(false);
  }, []);

  const onDocumentLoadError = useCallback((error: Error) => {
    console.error('Erreur lors du chargement du PDF:', error);
    setLoading(false);
  }, []);

  // Désactiver le menu contextuel et la sélection
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const handleSelectStart = (e: Event) => {
      e.preventDefault();
    };

    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('selectstart', handleSelectStart);
    document.addEventListener('dragstart', handleDragStart);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  // Désactiver les raccourcis clavier pour sauvegarder/télécharger
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Bloquer Ctrl+S, Ctrl+P, Ctrl+A, etc.
      if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'p' || e.key === 'a')) {
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-800">
      {/* Barre d'outils */}
      <div className="bg-gray-900 text-white p-4 flex items-center justify-between flex-wrap gap-4">
        <h2 className="text-lg font-semibold truncate flex-1">{title}</h2>
        
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
            disabled={pageNumber <= 1}
            className="p-2 bg-gray-700 rounded hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
            title="Page précédente"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <span className="px-4 py-2 bg-gray-700 rounded">
            Page {pageNumber} / {numPages}
          </span>

          <button
            onClick={() => setPageNumber(Math.min(numPages, pageNumber + 1))}
            disabled={pageNumber >= numPages}
            className="p-2 bg-gray-700 rounded hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
            title="Page suivante"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="w-px h-6 bg-gray-600" />

          <button
            onClick={() => setScale(Math.max(0.5, scale - 0.25))}
            className="p-2 bg-gray-700 rounded hover:bg-gray-600"
            title="Zoom arrière"
          >
            <ZoomOut className="w-5 h-5" />
          </button>

          <span className="px-2 py-2 bg-gray-700 rounded min-w-[60px] text-center">
            {Math.round(scale * 100)}%
          </span>

          <button
            onClick={() => setScale(Math.min(3, scale + 0.25))}
            className="p-2 bg-gray-700 rounded hover:bg-gray-600"
            title="Zoom avant"
          >
            <ZoomIn className="w-5 h-5" />
          </button>

          <div className="w-px h-6 bg-gray-600" />

          <button
            onClick={() => setRotation((rotation + 90) % 360)}
            className="p-2 bg-gray-700 rounded hover:bg-gray-600"
            title="Tourner"
          >
            <RotateCw className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Zone de lecture PDF */}
      <div className="flex-1 overflow-auto bg-gray-800 pdf-viewer-container">
        {loading && (
          <div className="flex items-center justify-center h-full">
            <div className="text-white text-xl">Chargement du PDF...</div>
          </div>
        )}
        
        <div className="flex justify-center p-4">
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={
              <div className="text-white text-xl">Chargement du document...</div>
            }
            options={documentOptions}
          >
            <Page
              key={`page-${pageNumber}`}
              pageNumber={pageNumber}
              scale={scale}
              rotate={rotation}
              renderTextLayer={true}
              renderAnnotationLayer={true}
              className="shadow-2xl"
            />
          </Document>
        </div>
      </div>

      {/* Note de protection */}
      <div className="bg-yellow-900 text-yellow-100 px-4 py-2 text-sm text-center">
        ⚠️ Ce document est protégé. Le téléchargement et la copie sont désactivés.
      </div>
    </div>
  );
}

