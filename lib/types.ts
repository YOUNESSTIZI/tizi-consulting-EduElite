/**
 * Types et interfaces pour la gestion scolaire
 */

export type UserRole = 'admin' | 'professeur' | 'parent' | 'eleve' | 'visiteur';

export interface SchoolUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  schoolId?: string; // ID de l'école (pour multi-écoles)
  createdAt: string;
  // Informations spécifiques selon le rôle
  studentId?: string; // Pour les parents et élèves
  classId?: string; // Pour les élèves et professeurs
  subjectIds?: string[]; // Pour les professeurs
}

export interface School {
  id: string;
  name: string;
  address?: string;
  phone?: string;
  email?: string;
  createdAt: string;
}

export interface Class {
  id: string;
  name: string; // Ex: "CP-A", "CE1-B"
  level: string; // Ex: "CP", "CE1"
  schoolId: string;
  teacherId?: string; // Professeur principal
  studentIds: string[];
  createdAt: string;
}

export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  classId: string;
  parentIds: string[]; // IDs des parents
  schoolId: string;
  dateOfBirth?: string;
  createdAt: string;
}

export interface Schedule {
  id: string;
  classId: string;
  teacherId: string;
  subject: string;
  dayOfWeek: number; // 0-6 (Lundi-Dimanche)
  startTime: string; // Format HH:mm
  endTime: string;
  room?: string;
  createdAt: string;
}

export interface Document {
  id: string;
  title: string;
  filename: string;
  schoolId: string;
  classIds: string[]; // Classes autorisées
  level?: string;
  subject?: string;
  uploadedBy: string; // User ID
  uploadedAt: string;
  isProtected: boolean;
}
