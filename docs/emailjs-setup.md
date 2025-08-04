# EmailJS Setup Guide

This guide will help you set up EmailJS to receive email notifications when users generate designs.

## Prerequisites

- EmailJS account (free tier available at https://www.emailjs.com)
- Access to your email provider (Hostinger/contact@styly.io)

## Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com and sign up for a free account
2. Verify your email address

## Step 2: Add Email Service

1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "SMTP Server" for custom email providers
4. Configure with your Hostinger SMTP settings:
   - **Service Name**: Styly Hostinger
   - **Host**: smtp.hostinger.com
   - **Port**: 465
   - **Username**: contact@styly.io
   - **Password**: Your email password
   - **Secure**: Yes (SSL)
5. Click "Create Service" and note your **Service ID**

## Step 3: Create Email Template

1. Go to "Email Templates" in EmailJS dashboard
2. Click "Create New Template"
3. Set up the template:

**Template Name**: User Generation Notification

**Subject**: New Styly Generation - {{user_name}}

**From Name**: Styly Notifications

**From Email**: contact@styly.io

**To Email**: {{to_email}}

**Reply To**: {{user_email}}

**Content**:
```
Hello,

A new design generation has been completed on Styly.

User Details:
- Name: {{user_name}}
- Email: {{user_email}}

Generation Details:
- Room Type: {{room_type}}
- Style: {{style}}
- Color Theme: {{color_theme}}
- Generated At: {{generated_at}}
- Language: {{language}}

Best regards,
Styly Automated System
```

4. Save the template and note your **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" in EmailJS dashboard
2. Find your **Public Key** in the "General" tab

## Step 5: Configure Environment Variables

Add these values to your `.env` file:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## Step 6: Test the Integration

1. Start your development server: `npm run dev`
2. Generate a design in the staging modal
3. Fill in the form with your details
4. Check contact@styly.io inbox for the notification email

## Troubleshooting

- **Emails not sending**: Check browser console for errors
- **Authentication failed**: Verify SMTP credentials in EmailJS service settings
- **Template variables not working**: Ensure variable names match exactly in template and code

## Security Notes

- The public key is safe to expose in frontend code
- SMTP credentials are stored securely in EmailJS, not in your code
- EmailJS has rate limiting to prevent abuse

## Email Format Example

When a user generates a design, you'll receive an email like:

```
Subject: New Styly Generation - John Doe

Hello,

A new design generation has been completed on Styly.

User Details:
- Name: John Doe
- Email: john.doe@example.com

Generation Details:
- Room Type: living room
- Style: modern
- Color Theme: original
- Generated At: 2024-01-10T15:30:00Z
- Language: en

Best regards,
Styly Automated System
```