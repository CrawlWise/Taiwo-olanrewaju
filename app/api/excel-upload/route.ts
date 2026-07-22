import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      bookTitle,
    } = body;

    // Basic validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email and phone are required.",
        },
        { status: 400 }
      );
    }

    const sheets = google.sheets({
      version: "v4",
      auth,
    });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:F",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            
            name,
            email,
            phone,
            bookTitle || "",
            new Date().toLocaleString(),
          ],
        ],
      },
    });

    return NextResponse.json({
      success: true,
      message: "Record saved successfully.",
    });
  } catch (error) {
    console.error("Google Sheets Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}