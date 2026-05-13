import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Taiwo Olanrewaju",
  description: "Learn more about Taiwo Olanrewaju's professional biography, mission, and values.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pb-20">
      {/* Hero Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold tracking-tight text-primary font-poppins mb-6">
              Empowering Your Financial Journey
            </h1>
            <p className="text-xl text-muted-foreground font-inter">
              I am Taiwo Olanrewaju, a dedicated financial advisor, educator, and digital entrepreneur committed to helping you build a legacy of wealth.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Portrait Placeholder */}
            <div className="aspect-[3/4] bg-burgundy/10 rounded-2xl border-4 border-gold/20 flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
              <div className="relative z-20 text-center p-6 mt-auto">
                <p className="text-white font-bold font-poppins text-xl">Taiwo Olanrewaju</p>
                <p className="text-gold text-sm">Financial Advisor & Mentor</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-medium z-0">
                [High Quality Portrait Image]
              </div>
            </div>

            {/* Biography */}
            <div className="space-y-8 font-inter text-foreground/80 leading-relaxed">
              <div>
                <h2 className="text-3xl font-bold text-primary font-poppins mb-4">My Story</h2>
                <p className="mb-4">
                  With over a decade of experience in the financial services industry, I have dedicated my career to bridging the gap between complex financial concepts and everyday wealth building. My journey started when I noticed how many hardworking individuals were left behind by traditional financial institutions.
                </p>
                <p>
                  Today, I lead a team of passionate advisors and provide comprehensive financial education to thousands. Whether you are a newcomer looking to establish a solid foundation or an experienced professional aiming to optimize your portfolio, my approach is tailored to your unique circumstances.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary font-poppins mb-4">Mission & Values</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { title: "Integrity", desc: "Transparent advice that always puts your best interests first." },
                    { title: "Education", desc: "Empowering you with knowledge so you can make informed decisions." },
                    { title: "Accessibility", desc: "Making premium financial advice available to everyone." },
                    { title: "Excellence", desc: "Delivering world-class service and strategies." },
                  ].map((val, i) => (
                    <div key={i} className="bg-card p-6 rounded-xl border shadow-sm">
                      <h3 className="font-bold text-gold mb-2 font-poppins">{val.title}</h3>
                      <p className="text-sm">{val.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-burgundy text-white py-16 mt-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-poppins mb-6">Ready to work together?</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Schedule a consultation today and let's map out your path to financial freedom.
          </p>
          <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-gold text-burgundy-dark font-semibold shadow hover:bg-gold/90 transition-colors">
            Book an Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}
