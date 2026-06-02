import type { Metadata } from "next";
import { SanityLive } from "@/sanity/live";
import "./globals.css";


export const metadata: Metadata = {
  title: "Taiwo Olanrewaju | Financial Advisor & Educator",
  description: "A trusted financial advisor, professional educator, and digital entrepreneur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans min-h-screen flex flex-col bg-background text-foreground">
        {children}
        <SanityLive/>
      </body>
    </html>
  );
}
