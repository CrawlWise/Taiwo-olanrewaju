import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Newsletter Signup | Taiwo Olanrewaju",
  description: "Subscribe to Taiwo Olanrewaju's newsletter for financial tips and insights.",
};

export default function NewsletterPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex items-center justify-center py-20 bg-gradient-to-br from-burgundy-dark to-burgundy relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-gold blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto bg-card text-card-foreground border shadow-2xl rounded-3xl p-8 sm:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <span className="text-2xl">✉️</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary font-poppins mb-4">
                Join the Wealth Builders Newsletter
              </h1>
              <p className="text-lg text-muted-foreground">
                Get exclusive financial insights, market updates, and wealth-building strategies delivered straight to your inbox every week.
              </p>
            </div>

            <form className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">First Name</label>
                  <input type="text" id="name" required className="w-full px-5 py-4 rounded-xl border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-lg" placeholder="First Name" />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email Address</label>
                  <input type="email" id="email" required className="w-full px-5 py-4 rounded-xl border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-lg" placeholder="Email Address" />
                </div>
              </div>
              
              <button type="submit" className="w-full py-4 px-8 bg-gold hover:bg-gold/90 text-burgundy-dark font-bold rounded-xl transition-colors text-lg font-poppins shadow-lg">
                Subscribe Now
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                No spam, ever. Unsubscribe at any time. <br/>
                Read our <Link href="/privacy" className="underline hover:text-foreground">Privacy Policy</Link>.
              </p>
            </div>
            
            <div className="mt-8 pt-8 border-t flex justify-center items-center gap-6 opacity-60">
              <span className="text-sm font-semibold uppercase tracking-wider">Trusted by 5,000+ Subscribers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
