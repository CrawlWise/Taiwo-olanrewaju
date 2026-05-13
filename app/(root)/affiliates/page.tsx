import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner Links | Taiwo Olanrewaju",
  description: "Recommended tools and partner links.",
};

const AFFILIATES = [
  { name: "QuickBooks", desc: "The best accounting software for small business owners and freelancers.", logo: "QB" },
  { name: "Wealthsimple", desc: "Start investing with zero commissions and an easy-to-use platform.", logo: "WS" },
  { name: "Notion", desc: "My go-to tool for organizing my business, life, and client notes.", logo: "N" },
  { name: "HubSpot", desc: "Powerful CRM for managing your client relationships and leads.", logo: "HS" },
  { name: "Canva Pro", desc: "Design professional marketing materials and social media posts easily.", logo: "C" },
  { name: "Stripe", desc: "Secure payment processing for your digital products and services.", logo: "S" },
];

export default function AffiliatesPage() {
  return (
    <div className="flex flex-col min-h-screen py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-primary font-poppins mb-4">Tools I Trust & Recommend</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These are the software and services I personally use to run my business and manage my finances.
            <span className="block mt-2 text-sm italic">Note: Some of these are affiliate links. If you purchase through them, I may earn a small commission at no extra cost to you.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AFFILIATES.map((item, i) => (
            <div key={i} className="bg-card border rounded-2xl p-8 shadow-sm flex flex-col items-start hover:shadow-lg hover:border-primary/30 transition-all group">
              <div className="w-16 h-16 rounded-xl bg-muted border flex items-center justify-center text-2xl font-bold text-foreground mb-6 group-hover:scale-110 transition-transform">
                {item.logo}
              </div>
              <h2 className="text-xl font-bold font-poppins text-foreground mb-3">{item.name}</h2>
              <p className="text-muted-foreground mb-6 flex-1">{item.desc}</p>
              <a href="#" className="w-full py-3 text-center rounded-md border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors">
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
