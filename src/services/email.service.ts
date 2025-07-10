import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

interface UserGenerationData {
  name: string;
  email: string;
  roomType: string;
  style: string;
  colorTheme: string;
  generatedAt: string;
  language: string;
}

export const sendUserGenerationEmail = async (data: UserGenerationData): Promise<void> => {
  // Check if EmailJS is configured
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    console.warn('EmailJS not configured. Skipping email notification.');
    return;
  }

  try {
    // Initialize EmailJS
    emailjs.init(EMAILJS_PUBLIC_KEY);

    // Prepare template parameters
    const templateParams = {
      to_email: 'contact@styly.io', // Your email
      user_name: data.name,
      user_email: data.email,
      room_type: data.roomType,
      style: data.style,
      color_theme: data.colorTheme,
      generated_at: data.generatedAt,
      language: data.language,
      subject: `New Styly Generation - ${data.name}`,
    };

    // Send email
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', response);
  } catch (error) {
    console.error('Failed to send email:', error);
    // Don't throw error to avoid breaking the user experience
  }
};