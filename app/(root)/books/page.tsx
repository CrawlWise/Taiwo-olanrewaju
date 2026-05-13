import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Books | Taiwo Olanrewaju",
  description: "Get Taiwo Olanrewaju's free and paid digital books.",
};

export default function BooksPage() {
  return (
    <div className="flex flex-col min-h-screen py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary font-poppins mb-4">My Books</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Practical, actionable knowledge distilled into comprehensive guides.
          </p>
        </div>

        {/* Free Book Section */}
        <div className="bg-card border shadow-lg rounded-3xl overflow-hidden mb-16">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center bg-burgundy/5">
              <span className="inline-block px-3 py-1 bg-burgundy text-white text-xs font-bold rounded-full uppercase tracking-wider mb-4 w-max">Free eBook</span>
              <h2 className="text-3xl font-bold font-poppins text-foreground mb-4">Financial Independence 101</h2>
              <p className="text-muted-foreground mb-8">
                Learn the core concepts of money management, debt elimination, and basic investing. A perfect starting point for your financial journey.
              </p>
              
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="freeBookName" className="text-sm font-medium text-foreground">Name</label>
                  <input type="text" id="freeBookName" required className="w-full px-4 py-3 rounded-md border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="freeBookEmail" className="text-sm font-medium text-foreground">Email</label>
                  <input type="email" id="freeBookEmail" required className="w-full px-4 py-3 rounded-md border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your Email" />
                </div>
                <button type="submit" className="w-full py-4 px-8 bg-burgundy hover:bg-burgundy-light text-white font-bold rounded-md transition-colors text-lg">
                  Send Me The Book
                </button>
              </form>
            </div>
            <div className="relative bg-muted p-12 flex items-center justify-center min-h-[400px]">
              {/* 3D Book Mockup Placeholder */}
              <div className="w-64 h-80 bg-white shadow-2xl border-l-8 border-burgundy flex items-center justify-center text-center p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="border-2 border-gold p-4 h-full w-full flex flex-col justify-center">
                  <h3 className="font-poppins font-bold text-xl text-burgundy">Financial Independence 101</h3>
                  <p className="mt-4 text-sm font-medium text-muted-foreground">Taiwo Olanrewaju</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Paid Book Section */}
        <div className="bg-card border shadow-lg rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="relative bg-charcoal p-12 flex items-center justify-center min-h-[400px] order-2 lg:order-1">
              {/* Premium Book Mockup Placeholder */}
              <div className="w-64 h-80 bg-black shadow-2xl border-l-8 border-gold flex items-center justify-center text-center p-6 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="border border-gold/50 p-4 h-full w-full flex flex-col justify-center">
                  <h3 className="font-poppins font-bold text-xl text-gold">The Wealth Legacy</h3>
                  <p className="mt-4 text-sm text-white/60">Advanced Strategies</p>
                </div>
              </div>
            </div>
            
            <div className="p-8 lg:p-12 flex flex-col justify-center order-1 lg:order-2">
              <span className="inline-block px-3 py-1 bg-gold text-burgundy-dark text-xs font-bold rounded-full uppercase tracking-wider mb-4 w-max">Premium Book</span>
              <h2 className="text-3xl font-bold font-poppins text-foreground mb-4">The Wealth Legacy: Advanced Strategies</h2>
              <div className="text-3xl font-bold text-primary mb-6">$49.99 <span className="text-lg text-muted-foreground font-normal">CAD</span></div>
              <p className="text-muted-foreground mb-8">
                Dive deep into advanced tax optimization, complex insurance structures, and generational wealth transfer techniques usually reserved for high-net-worth individuals.
              </p>
              
              <ul className="space-y-3 mb-8">
                {['Tax-sheltered growth strategies', 'Corporate structure optimization', 'Estate planning essentials', 'Exclusive bonus templates'].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-foreground">
                    <span className="text-green-500">✓</span> {feat}
                  </li>
                ))}
              </ul>
              
              <div className="space-y-4">
                <button className="w-full flex items-center justify-center gap-2 py-4 px-8 bg-[#0070BA] hover:bg-[#003087] text-white font-bold rounded-md transition-colors text-lg">
                  Buy with PayPal
                </button>
                <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-2">
                  <span>🔒 Secure checkout</span>
                  <span>• Instant digital download (PDF/ePub)</span>
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
