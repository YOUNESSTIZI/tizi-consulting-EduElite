/**
 * Abstraction pour différents fournisseurs de stockage
 * Permet de basculer facilement entre stockage local, Google Drive, S3, etc.
 */

export interface StorageProvider {
  // Télécharger un fichier depuis le stockage
  getFile(filename: string): Promise<Buffer>;
  
  // Vérifier si un fichier existe
  fileExists(filename: string): Promise<boolean>;
  
  // Uploader un fichier
  uploadFile(filename: string, buffer: Buffer): Promise<string>;
  
  // Supprimer un fichier
  deleteFile(filename: string): Promise<boolean>;
  
  // Obtenir l'URL publique du fichier (si applicable)
  getFileUrl(filename: string): string | null;
}

// ============================================
// 1. STOCKAGE LOCAL (actuel)
// ============================================
import fs from 'fs';
import path from 'path';

export class LocalStorageProvider implements StorageProvider {
  private uploadsDir: string;

  constructor() {
    this.uploadsDir = path.join(process.cwd(), 'uploads');
    if (!fs.existsSync(this.uploadsDir)) {
      fs.mkdirSync(this.uploadsDir, { recursive: true });
    }
  }

  async getFile(filename: string): Promise<Buffer> {
    const filePath = path.join(this.uploadsDir, filename);
    return fs.promises.readFile(filePath);
  }

  async fileExists(filename: string): Promise<boolean> {
    const filePath = path.join(this.uploadsDir, filename);
    return fs.existsSync(filePath);
  }

  async uploadFile(filename: string, buffer: Buffer): Promise<string> {
    const filePath = path.join(this.uploadsDir, filename);
    await fs.promises.writeFile(filePath, buffer);
    return filePath;
  }

  async deleteFile(filename: string): Promise<boolean> {
    const filePath = path.join(this.uploadsDir, filename);
    if (fs.existsSync(filePath)) {
      await fs.promises.unlink(filePath);
      return true;
    }
    return false;
  }

  getFileUrl(filename: string): string | null {
    // Pour le stockage local, on utilise l'API route
    return `/api/pdf/${encodeURIComponent(filename)}`;
  }
}

// ============================================
// 2. GOOGLE DRIVE API
// ============================================
// Nécessite: npm install googleapis
// Configuration: Variables d'environnement GOOGLE_DRIVE_*

export class GoogleDriveStorageProvider implements StorageProvider {
  private folderId: string;
  private drive: any; // googleapis Drive instance

  constructor() {
    this.folderId = process.env.GOOGLE_DRIVE_FOLDER_ID || '';
    
    if (!this.folderId) {
      throw new Error('GOOGLE_DRIVE_FOLDER_ID is required');
    }

    // Initialiser Google Drive API
    try {
      const { google } = require('googleapis');
      const credentials = process.env.GOOGLE_DRIVE_CREDENTIALS;
      
      if (!credentials) {
        throw new Error('GOOGLE_DRIVE_CREDENTIALS is required');
      }

      const auth = new google.auth.GoogleAuth({
        credentials: JSON.parse(credentials),
        scopes: ['https://www.googleapis.com/auth/drive.file'],
      });
      
      this.drive = google.drive({ version: 'v3', auth });
    } catch (error: any) {
      if (error.message.includes('require')) {
        throw new Error('googleapis package is required. Run: npm install googleapis');
      }
      throw error;
    }
  }

  async getFile(filename: string): Promise<Buffer> {
    try {
      // Chercher le fichier dans Google Drive
      const response = await this.drive.files.list({
        q: `name='${filename}' and '${this.folderId}' in parents and trashed=false`,
        fields: 'files(id, name)',
        spaces: 'drive',
      });

      if (!response.data.files || response.data.files.length === 0) {
        throw new Error(`File ${filename} not found in Google Drive folder ${this.folderId}`);
      }

      const fileId = response.data.files[0].id;
      
      // Télécharger le fichier
      const fileResponse = await this.drive.files.get(
        { fileId, alt: 'media' },
        { responseType: 'arraybuffer' }
      );

      return Buffer.from(fileResponse.data);
    } catch (error: any) {
      throw new Error(`Error getting file from Google Drive: ${error.message}`);
    }
  }

  async fileExists(filename: string): Promise<boolean> {
    try {
      const response = await this.drive.files.list({
        q: `name='${filename}' and '${this.folderId}' in parents and trashed=false`,
        fields: 'files(id)',
        spaces: 'drive',
      });
      return response.data.files && response.data.files.length > 0;
    } catch {
      return false;
    }
  }

  async uploadFile(filename: string, buffer: Buffer): Promise<string> {
    try {
      const fileMetadata = {
        name: filename,
        parents: [this.folderId],
      };

      const media = {
        mimeType: 'application/pdf',
        body: buffer,
      };

      const response = await this.drive.files.create({
        requestBody: fileMetadata,
        media: media,
        fields: 'id, name',
      });

      return response.data.id;
    } catch (error: any) {
      throw new Error(`Error uploading file to Google Drive: ${error.message}`);
    }
  }

  async deleteFile(filename: string): Promise<boolean> {
    try {
      const response = await this.drive.files.list({
        q: `name='${filename}' and '${this.folderId}' in parents and trashed=false`,
        fields: 'files(id)',
        spaces: 'drive',
      });

      if (!response.data.files || response.data.files.length === 0) {
        return false;
      }

      await this.drive.files.delete({
        fileId: response.data.files[0].id,
      });

      return true;
    } catch {
      return false;
    }
  }

  getFileUrl(filename: string): string | null {
    // Pour Google Drive, on peut utiliser l'API route qui télécharge depuis Drive
    return `/api/pdf/${encodeURIComponent(filename)}`;
  }
}

// ============================================
// 3. AWS S3
// ============================================
// Nécessite: npm install @aws-sdk/client-s3
// Configuration: Variables d'environnement AWS_*

export class S3StorageProvider implements StorageProvider {
  private bucketName: string;
  private s3Client: any; // AWS S3 Client

  constructor() {
    this.bucketName = process.env.AWS_S3_BUCKET_NAME || '';
    // const { S3Client } = require('@aws-sdk/client-s3');
    // this.s3Client = new S3Client({
    //   region: process.env.AWS_REGION || 'us-east-1',
    //   credentials: {
    //     accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    //     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
    //   },
    // });
  }

  async getFile(filename: string): Promise<Buffer> {
    // const { GetObjectCommand } = require('@aws-sdk/client-s3');
    // const command = new GetObjectCommand({
    //   Bucket: this.bucketName,
    //   Key: filename,
    // });
    // const response = await this.s3Client.send(command);
    // return Buffer.from(await response.Body.transformToByteArray());
    throw new Error('S3 not implemented yet');
  }

  async fileExists(filename: string): Promise<boolean> {
    // const { HeadObjectCommand } = require('@aws-sdk/client-s3');
    // try {
    //   await this.s3Client.send(new HeadObjectCommand({
    //     Bucket: this.bucketName,
    //     Key: filename,
    //   }));
    //   return true;
    // } catch {
    //   return false;
    // }
    return false;
  }

  async uploadFile(filename: string, buffer: Buffer): Promise<string> {
    // const { PutObjectCommand } = require('@aws-sdk/client-s3');
    // await this.s3Client.send(new PutObjectCommand({
    //   Bucket: this.bucketName,
    //   Key: filename,
    //   Body: buffer,
    //   ContentType: 'application/pdf',
    // }));
    // return filename;
    throw new Error('S3 not implemented yet');
  }

  async deleteFile(filename: string): Promise<boolean> {
    // const { DeleteObjectCommand } = require('@aws-sdk/client-s3');
    // try {
    //   await this.s3Client.send(new DeleteObjectCommand({
    //     Bucket: this.bucketName,
    //     Key: filename,
    //   }));
    //   return true;
    // } catch {
    //   return false;
    // }
    return false;
  }

  getFileUrl(filename: string): string | null {
    // Pour S3, on peut utiliser l'URL signée ou l'API route
    return `/api/pdf/${encodeURIComponent(filename)}`;
  }
}

// ============================================
// 4. SUPABASE STORAGE (Gratuit jusqu'à 1GB)
// ============================================
// Nécessite: npm install @supabase/supabase-js
// Configuration: Variables d'environnement SUPABASE_*

export class SupabaseStorageProvider implements StorageProvider {
  private bucketName: string;
  private supabase: any; // Supabase Client

  constructor() {
    this.bucketName = process.env.SUPABASE_STORAGE_BUCKET || 'pdfs';
    // const { createClient } = require('@supabase/supabase-js');
    // this.supabase = createClient(
    //   process.env.SUPABASE_URL || '',
    //   process.env.SUPABASE_ANON_KEY || ''
    // );
  }

  async getFile(filename: string): Promise<Buffer> {
    // const { data, error } = await this.supabase.storage
    //   .from(this.bucketName)
    //   .download(filename);
    // if (error) throw error;
    // return Buffer.from(await data.arrayBuffer());
    throw new Error('Supabase not implemented yet');
  }

  async fileExists(filename: string): Promise<boolean> {
    // const { data } = await this.supabase.storage
    //   .from(this.bucketName)
    //   .list('', { search: filename });
    // return data && data.length > 0;
    return false;
  }

  async uploadFile(filename: string, buffer: Buffer): Promise<string> {
    // const { data, error } = await this.supabase.storage
    //   .from(this.bucketName)
    //   .upload(filename, buffer, {
    //     contentType: 'application/pdf',
    //     upsert: true,
    //   });
    // if (error) throw error;
    // return data.path;
    throw new Error('Supabase not implemented yet');
  }

  async deleteFile(filename: string): Promise<boolean> {
    // const { error } = await this.supabase.storage
    //   .from(this.bucketName)
    //   .remove([filename]);
    // return !error;
    return false;
  }

  getFileUrl(filename: string): string | null {
    // const { data } = this.supabase.storage
    //   .from(this.bucketName)
    //   .getPublicUrl(filename);
    // return data.publicUrl;
    return `/api/pdf/${encodeURIComponent(filename)}`;
  }
}

// ============================================
// FACTORY - Sélection du provider
// ============================================

export function getStorageProvider(): StorageProvider {
  const provider = process.env.STORAGE_PROVIDER || 'local';

  switch (provider) {
    case 'google-drive':
      return new GoogleDriveStorageProvider();
    case 's3':
      return new S3StorageProvider();
    case 'supabase':
      return new SupabaseStorageProvider();
    case 'local':
    default:
      return new LocalStorageProvider();
  }
}
