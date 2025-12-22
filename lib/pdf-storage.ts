import fs from 'fs';
import path from 'path';
import { getStorageProvider } from './storage-providers';

export interface PDFBook {
  id: string;
  title: string;
  description?: string;
  level: string; // CP, CE1, CE2, CM1, CM2, 6ème, etc.
  subject: string; // Mathématiques, Français, Histoire, etc.
  filename: string;
  uploadDate: string;
  thumbnail?: string;
}

const UPLOADS_DIR = path.join(process.cwd(), 'uploads');
const PDFS_DATA_FILE = path.join(process.cwd(), 'data', 'pdfs.json');

// Instance du provider de stockage (peut être local, Google Drive, S3, etc.)
const storageProvider = getStorageProvider();

// Assure que les dossiers existent
export function ensureDirectories() {
  if (!fs.existsSync(UPLOADS_DIR)) {
    fs.mkdirSync(UPLOADS_DIR, { recursive: true });
  }
  const dataDir = path.dirname(PDFS_DATA_FILE);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

export function getAllBooks(): PDFBook[] {
  ensureDirectories();
  
  if (!fs.existsSync(PDFS_DATA_FILE)) {
    return [];
  }

  try {
    const data = fs.readFileSync(PDFS_DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export function getBookById(id: string): PDFBook | null {
  const books = getAllBooks();
  return books.find(book => book.id === id) || null;
}

export function getBooksByLevel(level: string): PDFBook[] {
  const books = getAllBooks();
  return books.filter(book => book.level === level);
}

export function getBooksBySubject(subject: string): PDFBook[] {
  const books = getAllBooks();
  return books.filter(book => book.subject === subject);
}

export function getBooksByLevelAndSubject(level: string, subject: string): PDFBook[] {
  const books = getAllBooks();
  return books.filter(book => book.level === level && book.subject === subject);
}

export function saveBook(book: PDFBook): void {
  ensureDirectories();
  const books = getAllBooks();
  const existingIndex = books.findIndex(b => b.id === book.id);
  
  if (existingIndex >= 0) {
    books[existingIndex] = book;
  } else {
    books.push(book);
  }

  fs.writeFileSync(PDFS_DATA_FILE, JSON.stringify(books, null, 2));
}

export function deleteBook(id: string): boolean {
  ensureDirectories();
  const books = getAllBooks();
  const filtered = books.filter(b => b.id !== id);
  
  if (filtered.length === books.length) {
    return false; // Book not found
  }

  fs.writeFileSync(PDFS_DATA_FILE, JSON.stringify(filtered, null, 2));
  return true;
}

export function getPDFPath(filename: string): string {
  // Pour compatibilité avec l'ancien code
  return path.join(UPLOADS_DIR, filename);
}

export async function getPDFBuffer(filename: string): Promise<Buffer> {
  // Utilise le provider de stockage configuré
  return await storageProvider.getFile(filename);
}

export async function getPDFExists(filename: string): Promise<boolean> {
  // Utilise le provider de stockage configuré
  return await storageProvider.fileExists(filename);
}

// Fonction synchrone pour compatibilité (utilise le stockage local uniquement)
export function getPDFExistsSync(filename: string): boolean {
  const filePath = getPDFPath(filename);
  return fs.existsSync(filePath);
}

export function getAllLevels(): string[] {
  const books = getAllBooks();
  const levels = new Set(books.map(b => b.level));
  return Array.from(levels).sort();
}

export function getAllSubjects(): string[] {
  const books = getAllBooks();
  const subjects = new Set(books.map(b => b.subject));
  return Array.from(subjects).sort();
}

