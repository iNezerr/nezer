import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL || '';

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
    // Send the email using Resend
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    // Return the response as JSON
    return NextResponse.json(data);
  } catch (error) {
    // Return an error response if something goes wrong
    return NextResponse.json({ error: error instanceof Error ? error.message : 'An unknown error occurred.' });
  }
}
