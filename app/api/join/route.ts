import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: Request) {
  try {
    const { name, email, phone, isLicensed, provinces, passive, motivation } = await request.json();

    if (!name || !email || !phone || !isLicensed || !passive || !motivation) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const emailResponse = await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: process.env.EMAIL_FROM!,
      subject: `New Career Application: ${name}`,
      html: `
        <div style="font-family: 'Inter', Helvetica, Arial, sans-serif; background-color: #f7f7f9; padding: 40px 20px; color: #2c2c2c; line-height: 1.6;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); border: 1px solid #e5e7eb;">
            <div style="background: linear-gradient(135deg, #800020 0%, #4a0012 100%); padding: 30px; text-align: center; color: #ffffff;">
              <h1 style="margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">New Career Application</h1>
              <p style="margin: 5px 0 0 0; font-size: 14px; color: rgba(255, 255, 255, 0.75);">Join Us Form Submission</p>
            </div>
            <div style="padding: 40px 30px;">
              <p style="margin-top: 0; font-size: 16px;">Hello,</p>
              <p style="font-size: 16px;">A new candidate has submitted an application to join your team.</p>
              
              <h3 style="color: #800020; font-size: 18px; font-weight: 700; margin: 30px 0 15px 0; border-bottom: 2px solid #800020; padding-bottom: 5px;">Applicant Profile</h3>
              
              <div style="margin-bottom: 30px;">
                <div style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                  <strong style="font-size: 12px; text-transform: uppercase; color: #888888; display: block; margin-bottom: 2px;">Full Name</strong>
                  <span style="font-size: 15px; color: #111111; font-weight: 600;">${name}</span>
                </div>
                <div style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                  <strong style="font-size: 12px; text-transform: uppercase; color: #888888; display: block; margin-bottom: 2px;">Email Address</strong>
                  <a href="mailto:${email}" style="font-size: 15px; color: #800020; text-decoration: none; font-weight: 600;">${email}</a>
                </div>
                <div style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                  <strong style="font-size: 12px; text-transform: uppercase; color: #888888; display: block; margin-bottom: 2px;">Phone Number</strong>
                  <a href="tel:${phone}" style="font-size: 15px; color: #111111; text-decoration: none; font-weight: 600;">${phone}</a>
                </div>
              </div>
              
              <h3 style="color: #800020; font-size: 18px; font-weight: 700; margin: 0 0 15px 0; border-bottom: 2px solid #800020; padding-bottom: 5px;">Licensing & Experience</h3>
              
              <div style="margin-bottom: 30px;">
                <div style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                  <strong style="font-size: 12px; text-transform: uppercase; color: #888888; display: block; margin-bottom: 2px;">Currently Licensed?</strong>
                  <span style="font-size: 15px; color: #111111; font-weight: 600; text-transform: capitalize;">${isLicensed}</span>
                </div>
                ${
                  isLicensed === "yes"
                    ? `
                <div style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                  <strong style="font-size: 12px; text-transform: uppercase; color: #888888; display: block; margin-bottom: 2px;">Provinces</strong>
                  <span style="font-size: 15px; color: #111111; font-weight: 600;">${provinces || "N/A"}</span>
                </div>
                `
                    : ""
                }
                <div style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                  <strong style="font-size: 12px; text-transform: uppercase; color: #888888; display: block; margin-bottom: 2px;">Interest in Passive Income?</strong>
                  <span style="font-size: 15px; color: #111111; font-weight: 600; text-transform: capitalize;">${passive}</span>
                </div>
              </div>

              <h3 style="color: #800020; font-size: 18px; font-weight: 700; margin: 0 0 15px 0; border-bottom: 2px solid #800020; padding-bottom: 5px;">Motivation & Drive</h3>
              
              <div style="font-size: 14px; color: #333333; background-color: #f9f9fb; border-left: 4px solid #d4af37; padding: 15px; border-radius: 8px; white-space: pre-wrap;">${motivation}</div>
            </div>
            <div style="background-color: #fafafa; padding: 20px 30px; text-align: center; border-top: 1px solid #f0f0f0; font-size: 12px; color: #aaaaaa;">
              <p style="margin: 0;">This email was sent automatically from the Taiwo Olanrewaju website career applications route.</p>
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
      JSON.stringify({ success: true, message: "Application submitted successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: "Failed to submit application" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
