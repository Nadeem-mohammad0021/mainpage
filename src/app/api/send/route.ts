import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    
    // Log incoming data for debugging
    console.log('Received contact form data:', { name, email, message });

    // Validate required fields
    if (!name || !email || !message) {
      console.error('Missing required fields:', { name, email, message });
      return NextResponse.json({ 
        success: false, 
        error: 'Missing required fields: name, email, and message are all required' 
      }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error('Invalid email format:', email);
      return NextResponse.json({ 
        success: false, 
        error: 'Invalid email format' 
      }, { status: 400 });
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json({ 
        success: false, 
        error: 'Email service is not configured' 
      }, { status: 500 });
    }

    // Determine recipient based on environment
    const isDevelopment = process.env.NODE_ENV === 'development';
    const adminEmail = process.env.ADMIN_EMAIL || 'support@kynex.dev';
    
    // In development, we can only send to verified emails
    // In production, we can send to any email if domain is verified
    const recipients = isDevelopment 
      ? ['contact@kynex.dev'] // Your verified email for development
      : [adminEmail]; // Admin email for production

    // Send email to admin/support team
    const adminEmailResult = await resend.emails.send({
      from: 'customer support bot via KYNEX <support@kynex.dev>',
      to: recipients,
      replyTo: `customer support bot <${email}>`,
      subject: `New Contact Form Message from ${name}`,
html: `
  <div style="font-family: 'Segoe UI', Roboto, Arial, sans-serif; background-color: #f5f7fa; padding: 40px; color: #333;">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); overflow: hidden;">
      <tr>
        <td style="background: linear-gradient(90deg, #2563eb, #9333ea); padding: 24px 32px;">
          <h1 style="color: #ffffff; font-size: 24px; margin: 0; font-weight: 700;">
            ✉️ New Contact Message
          </h1>
          <p style="color: #e0e7ff; font-size: 14px; margin: 4px 0 0;">
            From the KYNEX.dev contact form
          </p>
        </td>
      </tr>

      <tr>
        <td style="padding: 32px;">
          <h2 style="color: #111827; font-size: 20px; margin-top: 0;">Hello KYNEX Team,</h2>
          <p style="font-size: 16px; color: #374151; line-height: 1.6;">
            You’ve received a new message from the contact form on <strong>KYNEX.dev</strong>.
          </p>

          <div style="margin-top: 20px; background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px;">
            <p style="margin: 0; font-size: 15px;"><strong style="color: #2563eb;">Name:</strong> ${name}</p>
            <p style="margin: 4px 0;"><strong style="color: #9333ea;">Email:</strong> <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></p>
            <p style="margin-top: 8px; font-size: 15px;"><strong style="color: #16a34a;">Message:</strong></p>
            <p style="white-space: pre-wrap; font-size: 15px; color: #374151;">${message}</p>
          </div>

          <p style="margin-top: 32px; font-size: 14px; color: #6b7280;">
            — <strong>KYNEX.dev Contact Bot</strong><br/>
            <span style="font-style: italic;">"Empowering the future of intelligent innovation"</span>
          </p>
        </td>
      </tr>

      <tr>
        <td style="background-color: #f3f4f6; text-align: center; padding: 16px; font-size: 12px; color: #6b7280;">
          <p style="margin: 0;">This message was sent automatically by <strong>KYNEX.dev</strong>.</p>
          <p style="margin: 0;">© ${new Date().getFullYear()} KYNEX.dev. All rights reserved.</p>
        </td>
      </tr>
    </table>
  </div>
`,

    });

    // Send confirmation email to user
    const userEmailResult = await resend.emails.send({
      from: 'KYNEX.dev Support <support@kynex.dev>',
      to: email, // Send to the user's email
      subject: `Thank you for contacting KYNEX.dev, ${name}!`,
html: `
  <div style="font-family: 'Segoe UI', Roboto, Arial, sans-serif; background-color: #f4f6f8; padding: 40px; color: #333;">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); overflow: hidden;">
      
      <!-- Header -->
      <tr>
        <td style="background: linear-gradient(90deg, #2563eb, #9333ea); padding: 24px 32px; text-align: center;">
          <h1 style="color: #ffffff; font-size: 24px; margin: 0; font-weight: 700;">Thank You for Contacting KYNEX.dev</h1>
          <p style="color: #e0e7ff; font-size: 14px; margin: 6px 0 0;">Your message has been received successfully</p>
        </td>
      </tr>

      <!-- Body -->
      <tr>
        <td style="padding: 32px;">
          <p style="font-size: 16px; color: #374151;">Hi <strong>${name}</strong>,</p>
          <p style="font-size: 16px; color: #374151; line-height: 1.6;">
            We’ve received your message and our team will get back to you shortly.
          </p>

          <div style="margin-top: 24px; background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px;">
            <p style="margin: 0; font-size: 15px; color: #111827;"><strong>Your Message:</strong></p>
            <p style="margin-top: 8px; font-size: 15px; color: #374151; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="margin-top: 24px; font-size: 15px; color: #374151;">
            Have a great day! <br />
            — <strong>The KYNEX.dev Team</strong>
          </p>

          <div style="margin-top: 32px; text-align: center;">
            <a href="https://kynex.dev" style="display: inline-block; background: linear-gradient(90deg, #2563eb, #9333ea); color: #ffffff; text-decoration: none; padding: 12px 28px; border-radius: 8px; font-weight: 600; font-size: 15px; box-shadow: 0 4px 10px rgba(147,51,234,0.3);">
              Visit KYNEX.dev
            </a>
          </div>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background-color: #f3f4f6; text-align: center; padding: 16px; font-size: 12px; color: #6b7280;">
          <p style="margin: 0;">This is an automated confirmation. Please do not reply to this email.</p>
          <p style="margin: 0;">© ${new Date().getFullYear()} KYNEX.dev. All rights reserved.</p>
        </td>
      </tr>

    </table>
  </div>
`,

    });

    if (adminEmailResult.error || userEmailResult.error) {
      console.error('Resend API error:', adminEmailResult.error || userEmailResult.error);
      return NextResponse.json({ success: false, error: 'Failed to send one or more emails' }, { status: 400 });
    }
    
    console.log('Emails sent successfully to admin and user');
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Internal server error:', err);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}