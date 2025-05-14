import { NextResponse } from 'next/server';
 
export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    
    console.log('Form submission:', { name, email, subject, message });
    
    // Here you would normally integrate with an email service like Resend, SendGrid, etc.
    // For now, we'll just return a success response
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
