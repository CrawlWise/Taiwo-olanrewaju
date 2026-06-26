import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: Request) {
  try {
    const { name, email, phone, bookTitle, fileUrl } = await request.json();

    if (!name || !email || !phone || !bookTitle) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // 1. Send the download email to the user
    const userEmailHtml = `
      <div style="font-family: 'Inter', Helvetica, Arial, sans-serif; background-color: #f7f7f9; padding: 40px 20px; color: #2c2c2c; line-height: 1.6;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); border: 1px solid #e5e7eb;">
          <div style="background: linear-gradient(135deg, #800020 0%, #4a0012 100%); padding: 35px 30px; text-align: center; color: #ffffff;">
            <div style="display: inline-block; padding: 4px 12px; background-color: rgba(212, 175, 55, 0.2); border: 1px solid #D4AF37; border-radius: 20px; color: #D4AF37; font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 15px;">
              Complimentary Guide
            </div>
            <h1 style="margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.5px; line-height: 1.3;">Your Free eBook is Ready</h1>
            <p style="margin: 5px 0 0 0; font-size: 14px; color: rgba(255, 255, 255, 0.8);">Taiwo Olanrewaju | Financial Advisor</p>
          </div>
          <div style="padding: 40px 30px;">
            <p style="margin-top: 0; font-size: 16px; font-weight: 600; color: #111111;">Hello ${name},</p>
            <p style="font-size: 15px; color: #4a4a4a; margin-bottom: 25px;">
              Thank you for requesting a copy of <strong>"${bookTitle}"</strong>. We are excited to share these key insights and strategies with you.
            </p>
            
            ${fileUrl ? `
              <div style="background-color: #fcfbf7; border: 1px dashed #D4AF37; border-radius: 12px; padding: 25px; text-align: center; margin: 30px 0;">
                <h3 style="margin-top: 0; font-size: 16px; color: #800020; font-weight: 700; margin-bottom: 8px;">${bookTitle}</h3>
                <p style="font-size: 13px; color: #666666; margin-bottom: 20px;">Use the button below to download or view your copy instantly.</p>
                <a href="${fileUrl}" target="_blank" style="display: inline-block; background-color: #800020; color: #ffffff; text-decoration: none; padding: 12px 28px; font-weight: 700; font-size: 14px; border-radius: 8px; box-shadow: 0 4px 10px rgba(128, 0, 32, 0.2);">
                  Download eBook (PDF)
                </a>
              </div>
            ` : `
              <div style="background-color: #fcfbf7; border: 1px dashed #800020; border-radius: 12px; padding: 25px; text-align: center; margin: 30px 0;">
                <h3 style="margin-top: 0; font-size: 16px; color: #800020; font-weight: 700; margin-bottom: 8px;">${bookTitle}</h3>
                <p style="font-size: 13px; color: #666666; margin-bottom: 0;">This eBook is currently being prepared and will be sent to you as soon as it is ready.</p>
              </div>
            `}
            
            <p style="font-size: 14px; color: #666666; margin-top: 30px;">
              If you have any questions or would like to schedule a personal strategy consultation, feel free to reply directly to this email or visit our website.
            </p>
            
            <div style="margin-top: 35px; border-top: 1px solid #f0f0f0; padding-top: 20px;">
              <h4 style="margin: 0; font-size: 15px; color: #111111; font-weight: 600;">Taiwo Olanrewaju</h4>
              <p style="margin: 2px 0 0 0; font-size: 13px; color: #888888;">Financial Advisor</p>
            </div>
          </div>
          <div style="background-color: #fafafa; padding: 20px 30px; text-align: center; border-top: 1px solid #f0f0f0; font-size: 12px; color: #aaaaaa;">
            <p style="margin: 0 0 5px 0;">This email was requested from the Taiwo Olanrewaju website.</p>
            <p style="margin: 0;">&copy; ${new Date().getFullYear()} Taiwo Olanrewaju. All rights reserved.</p>
          </div>
        </div>
      </div>
    `;

    const userEmailResponse = await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: email,
      subject: `Your Free Copy: ${bookTitle}`,
      html: userEmailHtml,
    });

    if (userEmailResponse.error) {
      console.error("Resend user email error detail:", userEmailResponse.error);
      return new Response(
        JSON.stringify({ error: userEmailResponse.error.message }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // 2. Notify the admin of the request
    try {
      const adminEmailHtml = `
        <div style="font-family: 'Inter', Helvetica, Arial, sans-serif; background-color: #f7f7f9; padding: 40px 20px; color: #2c2c2c; line-height: 1.6;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); border: 1px solid #e5e7eb;">
            <div style="background: linear-gradient(135deg, #800020 0%, #4a0012 100%); padding: 30px; text-align: center; color: #ffffff;">
              <h1 style="margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">New eBook Download Request</h1>
              <p style="margin: 5px 0 0 0; font-size: 14px; color: rgba(255, 255, 255, 0.75);">Lead Generation Portal</p>
            </div>
            <div style="padding: 40px 30px;">
              <p style="margin-top: 0; font-size: 16px;">Hello Taiwo</p>
              <p style="font-size: 16px;">A user has just requested a free resource from your website.</p>
              
              <div style="margin: 30px 0; border-collapse: collapse; width: 100%;">
                <div style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                  <strong style="font-size: 13px; text-transform: uppercase; color: #888888; display: block; margin-bottom: 4px;">Book Title</strong>
                  <span style="font-size: 16px; color: #800020; font-weight: 700;">${bookTitle}</span>
                </div>
                <div style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                  <strong style="font-size: 13px; text-transform: uppercase; color: #888888; display: block; margin-bottom: 4px;">Lead Name</strong>
                  <span style="font-size: 16px; color: #111111; font-weight: 600;">${name}</span>
                </div>
                <div style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                  <strong style="font-size: 13px; text-transform: uppercase; color: #888888; display: block; margin-bottom: 4px;">Email Address</strong>
                  <a href="mailto:${email}" style="font-size: 16px; color: #800020; text-decoration: none; font-weight: 600;">${email}</a>
                </div>
                <div style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                  <strong style="font-size: 13px; text-transform: uppercase; color: #888888; display: block; margin-bottom: 4px;">Phone Number</strong>
                  <a href="tel:${phone}" style="font-size: 16px; color: #111111; text-decoration: none; font-weight: 600;">${phone}</a>
                </div>
                ${fileUrl ? `
                <div style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;">
                  <strong style="font-size: 13px; text-transform: uppercase; color: #888888; display: block; margin-bottom: 4px;">eBook Link</strong>
                  <a href="${fileUrl}" target="_blank" style="font-size: 14px; color: #800020; font-weight: 600;">View eBook PDF</a>
                </div>
                ` : ""}
              </div>
            </div>
            <div style="background-color: #fafafa; padding: 20px 30px; text-align: center; border-top: 1px solid #f0f0f0; font-size: 12px; color: #aaaaaa;">
              <p style="margin: 0;">This email was sent automatically from the Taiwo Olanrewaju website eBook download route.</p>
            </div>
          </div>
        </div>
      `;

      await resend.emails.send({
        from: process.env.EMAIL_FROM!,
        to: process.env.EMAIL_FROM!,
        subject: `New Lead: eBook Download Requested - ${bookTitle}`,
        html: adminEmailHtml,
      });
    } catch (adminError) {
      console.error("Failed to send admin notification email:", adminError);
    }

    return new Response(
      JSON.stringify({ success: true, message: "Download request processed successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error logging download request:", error);
    return new Response(
      JSON.stringify({ error: "Failed to log download request" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
