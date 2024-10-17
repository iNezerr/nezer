import { NextResponse } from "next/server";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

// Initialize MailerSend with the API key from environment variables
const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY || "",
});

const fromEmail = process.env.FROM_EMAIL || 'nezerabsolute@gmail.com'; // Your email as the sender

// Define the request body type
interface EmailRequest {
  email: string;
  subject: string;
  message: string;
}

export async function POST(req: Request) {
  // Parse the incoming request body
  const { email, subject, message }: EmailRequest = await req.json();
  console.log(email, subject, message);

  try {
    // Set the sender and recipient (only yourself)
    const sentFrom = new Sender(fromEmail, " Nezer");
    const recipients = [
      new Recipient(fromEmail, "Eben") // Send to yourself
    ];

    // Configure the email parameters
    const emailParams = new EmailParams()
      .setFrom(sentFrom) // Sender (yourself)
      .setTo(recipients) // Recipient (yourself)
      .setReplyTo(sentFrom) // Reply-to goes to you
      .setSubject(subject) // Subject from the request
      .setHtml(`<strong>Message from: ${email}</strong><p>${message}</p>`) // HTML content
      .setText(`Message from: ${email}\n\n${message}`); // Text content fallback

    // Send the email using MailerSend
    const data = await mailerSend.email.send(emailParams);

    // Return the response as JSON
    return NextResponse.json(data);
  } catch (error) {
    // Return an error response if something goes wrong
    return NextResponse.json({
      error: error instanceof Error ? error.message : 'An unknown error occurred.'
    });
  }
}
