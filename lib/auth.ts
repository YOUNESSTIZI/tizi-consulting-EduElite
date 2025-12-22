import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

import { UserRole } from './types';

export interface User {
  id: string;
  email: string;
  name: string;
  role?: UserRole; // Rôle de l'utilisateur
  schoolId?: string; // ID de l'école
  createdAt: string;
}

// Simule une base de données (à remplacer par une vraie DB en production)
let users: User[] = [];
// Stockage des mots de passe hashés (à remplacer par une vraie DB)
const userPasswords: Record<string, string> = {};

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

export function generateToken(userId: string): string {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '7d' });
}

export function verifyToken(token: string): { userId: string } | null {
  try {
    return jwt.verify(token, JWT_SECRET) as { userId: string };
  } catch {
    return null;
  }
}

export async function getCurrentUser(): Promise<User | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth-token')?.value;

  if (!token) {
    return null;
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    return null;
  }

  const user = users.find(u => u.id === decoded.userId);
  return user || null;
}

export async function createUser(email: string, name: string, password: string): Promise<{ user: User; hashedPassword: string }> {
  const hashedPassword = await hashPassword(password);
  const user: User = {
    id: Date.now().toString(),
    email,
    name,
    createdAt: new Date().toISOString(),
  };
  
  // En production, sauvegarder dans une vraie DB avec le hash
  users.push(user);
  userPasswords[user.id] = hashedPassword;
  
  return { user, hashedPassword };
}

export async function findUserByEmail(email: string): Promise<User | null> {
  return users.find(u => u.email === email) || null;
}

export function getUserPasswordHash(userId: string): string | null {
  return userPasswords[userId] || null;
}

export function setAuthCookie(token: string) {
  // Cette fonction sera utilisée dans les API routes
  return token;
}

