import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-burgundy text-white overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-burgundy-dark to-burgundy" />
          {/* Decorative pattern placeholder */}
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight font-poppins mb-6">
                Master Your Finances, <br />
                <span className="text-gold">Build Your Legacy.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 font-inter max-w-xl">
                I am Taiwo Olanrewaju, your trusted financial advisor and mentor. Let's create a customized roadmap for your financial freedom.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-gold text-burgundy-dark font-semibold shadow hover:bg-gold/90 transition-colors text-lg"
                >
                  Book an Appointment
                </Link>
                <Link
                  href="/books"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-transparent border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors text-lg"
                >
                  Get My Free Book
                </Link>
              </div>
            </div>
            
            <div className="relative mx-auto w-full max-w-md lg:max-w-none lg:ml-auto">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative border-4 border-gold/30">
                {/* Placeholder for Taiwo's Portrait */}
                <div className="absolute inset-0 bg-burgundy-light/50 flex items-center justify-center">
                  <span className="text-white/60 font-medium">Portrait of Taiwo</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-charcoal p-6 rounded-xl shadow-xl border border-border max-w-xs">
                <p className="text-sm font-bold text-foreground">Trusted Advisor</p>
                <div className="flex text-gold mt-1">
                  {"★".repeat(5)}
                </div>
                <p className="text-xs text-muted-foreground mt-2">Helping hundreds achieve financial clarity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-poppins text-primary mb-6">Meet Taiwo Olanrewaju</h2>
            <p className="text-lg text-muted-foreground mb-8">
              With years of experience in the financial sector, I've dedicated my career to demystifying wealth building and empowering individuals to take control of their financial destinies.
            </p>
            <Link href="/about" className="text-burgundy font-semibold hover:underline decoration-gold underline-offset-4">
              Read My Full Story &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Services / Value Proposition */}
      <section className="py-20 bg-warm-beige dark:bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-poppins text-foreground mb-4">How I Can Help You</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive financial solutions tailored to your unique goals.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Financial Planning", desc: "Customized strategies to protect and grow your wealth over time." },
              { title: "Education & Coaching", desc: "Learn the fundamentals of money management and investing." },
              { title: "Career Mentorship", desc: "Join my team and start your own successful career as a financial advisor." }
            ].map((service, i) => (
              <div key={i} className="bg-background p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-burgundy/10 text-burgundy rounded-lg flex items-center justify-center mb-6">
                  <div className="w-6 h-6 bg-burgundy rounded-sm" />
                </div>
                <h3 className="text-xl font-bold font-poppins mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet Preview */}
      <section className="py-20 bg-burgundy text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-poppins mb-6">Ready to Transform Your Finances?</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Download my free guide on wealth building strategies and take the first step towards your financial freedom today.
          </p>
          <Link href="/books" className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-gold text-burgundy-dark font-semibold shadow hover:bg-gold/90 transition-colors">
            Download Free Guide
          </Link>
        </div>
      </section>
    </div>
  );
}
