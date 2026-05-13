import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Taiwo Olanrewaju",
  description: "Free tools, guides, and videos to help you build wealth.",
};

const RESOURCES = [
  { category: "Guides", title: "The First-Time Homebuyer's Checklist", format: "PDF", link: "#" },
  { category: "Tools", title: "Retirement Savings Calculator", format: "Excel", link: "#" },
  { category: "Guides", title: "Tax Optimization Strategies for 2026", format: "PDF", link: "#" },
  { category: "Videos", title: "Understanding Whole Life Insurance", format: "Video", link: "#" },
  { category: "Tools", title: "Monthly Budget Tracker Template", format: "Google Sheets", link: "#" },
  { category: "Guides", title: "Debt Repayment Snowball Method", format: "PDF", link: "#" },
];

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-primary font-poppins mb-4">Free Resources</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated collection of tools, templates, and guides to help you take control of your financial future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESOURCES.map((res, i) => (
            <div key={i} className="bg-card rounded-2xl border shadow-sm p-6 hover:shadow-md transition-shadow flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider">
                  {res.category}
                </span>
                <span className="text-muted-foreground text-sm font-medium flex items-center gap-1">
                  {res.format === 'Video' ? '▶️' : '📄'} {res.format}
                </span>
              </div>
              <h3 className="text-xl font-bold font-poppins text-foreground mb-4">{res.title}</h3>
              <div className="mt-auto pt-6 border-t border-border/50">
                <a href={res.link} className="flex items-center justify-center w-full py-3 bg-muted hover:bg-primary hover:text-white text-foreground font-medium rounded-lg transition-colors">
                  Download / View
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Video Highlight */}
        <div className="mt-20 bg-burgundy text-white rounded-3xl overflow-hidden shadow-xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <span className="text-gold font-bold uppercase tracking-wider mb-2">Featured Masterclass</span>
              <h2 className="text-3xl font-bold font-poppins mb-4">The Wealth Building Blueprint</h2>
              <p className="text-white/80 mb-8">
                Watch this 45-minute exclusive seminar where I break down the exact strategies wealthy families use to protect and grow their assets across generations.
              </p>
              <button className="self-start px-8 py-4 bg-gold text-burgundy-dark font-bold rounded-md shadow-lg hover:bg-gold/90 transition-colors">
                Watch Now for Free
              </button>
            </div>
            <div className="relative bg-black/20 min-h-[300px]">
              {/* Video Thumbnail Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                  <span className="text-4xl translate-x-1">▶️</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
