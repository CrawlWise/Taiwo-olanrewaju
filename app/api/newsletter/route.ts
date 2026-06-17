import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: Request) {
  try {
    const { firstName, email } = await request.json();

    if (!firstName || !email) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const emailResponse = await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: process.env.EMAIL_FROM!,
      subject: `New Newsletter Subscription: ${firstName}`,
      html: `
        <div style="font-family: 'Inter', Helvetica, Arial, sans-serif; background-color: #f7f7f9; padding: 40px 20px; color: #2c2c2c; line-height: 1.6;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); border: 1px solid #e5e7eb;">
            <div style="background: linear-gradient(135deg, #800020 0%, #4a0012 100%); padding: 30px; text-align: center; color: #ffffff;">
              <h1 style="margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">Newsletter Subscription</h1>
              <p style="margin: 5px 0 0 0; font-size: 14px; color: rgba(255, 255, 255, 0.75);">Subscriber Portal</p>
            </div>
            <div style="padding: 40px 30px;">
              <p style="margin-top: 0; font-size: 16px;">Hello,</p>
              <p style="font-size: 16px;">You have a new subscriber for your weekly newsletter!</p>
              
              <div style="margin: 30px 0; border-collapse: collapse; width: 100%;">
                <div style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                  <strong style="font-size: 13px; text-transform: uppercase; color: #888888; display: block; margin-bottom: 4px;">First Name</strong>
                  <span style="font-size: 16px; color: #111111; font-weight: 600;">${firstName}</span>
                </div>
                <div style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                  <strong style="font-size: 13px; text-transform: uppercase; color: #888888; display: block; margin-bottom: 4px;">Email Address</strong>
                  <a href="mailto:${email}" style="font-size: 16px; color: #800020; text-decoration: none; font-weight: 600;">${email}</a>
                </div>
              </div>
            </div>
            <div style="background-color: #fafafa; padding: 20px 30px; text-align: center; border-top: 1px solid #f0f0f0; font-size: 12px; color: #aaaaaa;">
              <p style="margin: 0;">This email was sent automatically from the Taiwo Olanrewaju website newsletter route.</p>
            </div>
          </div>
        </div>
      `
    });

    if (emailResponse.error) {
      console.error("Resend error detail:", emailResponse.error);
      return new Response(
        JSON.stringify({ error: emailResponse.error.message }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: "Subscribed successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error subscribing user:", error);
    return new Response(
      JSON.stringify({ error: "Failed to subscribe" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
