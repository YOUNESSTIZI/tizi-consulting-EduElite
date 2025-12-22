import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    // Vérifier que la clé API est présente
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Configuration serveur manquante. Veuillez contacter le support.' },
        { status: 500 }
      );
    }

    // Initialiser Resend avec la clé API
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const {
      name,
      email,
      phone,
      school,
      role,
      preferredDate,
      preferredTime,
      interestedInTablets,
      message
    } = body;

    // Validation des champs requis
    if (!name || !email || !phone || !school || !role) {
      return NextResponse.json(
        { error: 'Tous les champs requis doivent être remplis' },
        { status: 400 }
      );
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Format d\'email invalide' },
        { status: 400 }
      );
    }

    // Formatage de la date et heure
    let dateTimeInfo = '';
    if (preferredDate) {
      const date = new Date(preferredDate);
      const formattedDate = date.toLocaleDateString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      dateTimeInfo = `Date préférée : ${formattedDate}`;
      if (preferredTime) {
        dateTimeInfo += ` à ${preferredTime}`;
      }
    }

    // Préparation du contenu de l'email
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
          Nouvelle demande de contact - EduElite
        </h2>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1f2937; margin-top: 0;">Informations du contact</h3>
          
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Téléphone :</strong> <a href="tel:${phone}">${phone}</a></p>
          <p><strong>Fonction :</strong> ${role}</p>
          <p><strong>École / Établissement :</strong> ${school}</p>
          
          ${dateTimeInfo ? `<p><strong>${dateTimeInfo}</strong></p>` : ''}
          
          ${interestedInTablets ? '<p><strong style="color: #059669;">✓ Intéressé(e) par la fourniture de tablettes</strong></p>' : ''}
        </div>
        
        ${message ? `
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #2563eb; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Message :</h3>
            <p style="color: #4b5563; white-space: pre-wrap;">${message}</p>
          </div>
        ` : ''}
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
          <p>Ce message a été envoyé depuis le formulaire de contact d'EduElite.</p>
          <p>Répondez directement à cet email pour contacter ${name}.</p>
        </div>
      </div>
    `;

    // Email de confirmation pour le client
    const confirmationEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
          Merci pour votre demande - EduElite
        </h2>
        
        <p>Bonjour ${name},</p>
        
        <p>Nous avons bien reçu votre demande de contact concernant <strong>EduElite</strong>, notre plateforme de gestion scolaire d'excellence.</p>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1f2937; margin-top: 0;">Récapitulatif de votre demande :</h3>
          <p><strong>École :</strong> ${school}</p>
          <p><strong>Fonction :</strong> ${role}</p>
          ${dateTimeInfo ? `<p><strong>${dateTimeInfo}</strong></p>` : ''}
          ${interestedInTablets ? '<p><strong>✓ Intéressé(e) par la fourniture de tablettes</strong></p>' : ''}
        </div>
        
        <p>Notre équipe va examiner votre demande et vous contactera dans les plus brefs délais à l'adresse <strong>${email}</strong> ou au numéro <strong>${phone}</strong>.</p>
        
        <div style="background-color: #dbeafe; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0;"><strong>En attendant, vous pouvez :</strong></p>
          <ul style="margin: 10px 0; padding-left: 20px;">
            <li>Découvrir notre <a href="${process.env.NEXT_PUBLIC_APP_URL || 'https://eduelite.vercel.app'}/demo" style="color: #2563eb;">visite guidée interactive</a></li>
            <li>Nous contacter directement au <a href="tel:+33745680679" style="color: #2563eb;">+33 7 45 68 06 79</a></li>
            <li>Visiter notre site web : <a href="https://www.tizi-consulting.fr" style="color: #2563eb;">www.tizi-consulting.fr</a></li>
          </ul>
        </div>
        
        <p>Cordialement,<br>
        <strong>L'équipe EduElite - Tizi-Consulting</strong></p>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
          <p>Service client disponible 24/7</p>
          <p>Email : contact@tizi-consulting.fr | Téléphone : +33 7 45 68 06 79</p>
        </div>
      </div>
    `;

    // Envoyer l'email à l'administrateur
    const adminEmailResult = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'EduElite <contact@tizi-consulting.fr>',
      to: process.env.CONTACT_EMAIL || 'contact@tizi-consulting.fr',
      replyTo: email,
      subject: `Nouvelle demande de contact - ${name} (${school})`,
      html: emailContent,
    });

    if (adminEmailResult.error) {
      console.error('Erreur Resend (admin email):', adminEmailResult.error);
      return NextResponse.json(
        { error: `Erreur lors de l'envoi de l'email: ${adminEmailResult.error.message || 'Erreur inconnue'}` },
        { status: 500 }
      );
    }

    // Envoyer l'email de confirmation au client
    const confirmationEmailResult = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'EduElite <contact@tizi-consulting.fr>',
      to: email,
      subject: 'Merci pour votre demande - EduElite',
      html: confirmationEmailContent,
    });

    if (confirmationEmailResult.error) {
      console.error('Erreur Resend (confirmation email):', confirmationEmailResult.error);
      // L'email admin a été envoyé avec succès, mais la confirmation a échoué
      // On retourne quand même un succès partiel
      return NextResponse.json(
        { 
          success: true,
          message: 'Votre demande a été reçue. Un problème est survenu lors de l\'envoi de l\'email de confirmation, mais votre demande a bien été transmise.',
          warning: 'Email de confirmation non envoyé'
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { 
        success: true,
        message: 'Votre demande a été envoyée avec succès. Vous allez recevoir un email de confirmation.'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur lors du traitement de la demande:', error);
    return NextResponse.json(
      { error: 'Erreur serveur lors du traitement de votre demande' },
      { status: 500 }
    );
  }
}
