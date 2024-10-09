import { Resend } from 'resend';
import { render } from '@react-email/render';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Define the React component for the email body
const EmailBody = () => {
  return (
  <>
  <p>Email Body</p>
    </>
)}

// Function to handle the POST request
export async function POST() {
  try {
    // Render the React component to HTML
    const htmlContent = render(<EmailBody />);

    // Send the email using Resend API
    const { data, error } = await resend.emails.send({
      from: 'Ebenezer <bonuzx1@gmail.com>',
      to: ['bonuzx1@gmail.com'],
      subject: 'Hello world',
      html: htmlContent, // Correctly pass the rendered HTML
    });

    // Handle errors
    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    // Return the data on success
    return new Response(JSON.stringify(data));
  } catch (error) {
    // Return error response on failure
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}
