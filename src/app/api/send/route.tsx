// const { Recipient, EmailParams, MailerSend } = require("mailersend");

// const mailersend = new MailerSend({
//   apiKey: process.env.API_KEY || "", // Use API key from environment variables
// });

// const fromEmail = process.env.FROM_EMAIL || "nezerabsolute@gmail.com"; // Your email as the sender and recipient

// // Define the request body type
// interface EmailRequest {
//   email: string;
//   subject: string;
//   message: string;
// }

// export async function POST(req: { json: () => EmailRequest | PromiseLike<EmailRequest>; }) {
//   // Parse the incoming request body
//   const { email, subject, message }: EmailRequest = await req.json();

//   console.log(email, subject, message);

//   const recipients = [new Recipient(fromEmail, "Your Name")]; // Send to yourself

//   const emailParams = new EmailParams()
//     .setFrom(fromEmail) // Set your own email as the sender
//     .setFromName("Your Name") // Your name as sender
//     .setRecipients(recipients) // You as the recipient
//     .setSubject(subject) // Subject from the form submission
//     .setHtml(`<p>Message from: ${email}</p><p>${message}</p>`) // HTML message body
//     .setText(`Message from: ${email}\n\n${message}`); // Text message body

//   try {
//     // Send the email
//     const response = await mailersend.send(emailParams);
//     console.log('Email sent successfully:', response);
//     return response;
//   } catch (error) {
//     console.error('Error sending email:', error);
//     throw error;
//   }
// }
