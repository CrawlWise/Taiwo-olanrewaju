import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Script from "next/script";
import head from "next/head";

export default function RootSiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <head>
      <Script src="https://go.taiwoolanrewaju.org/js/form_embed.js"></Script>
    </head>
      <Navbar />
      <main className="flex-1">

        {children}
      </main>
      <Footer />
    </>
  );
}
