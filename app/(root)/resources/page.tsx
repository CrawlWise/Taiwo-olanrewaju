"use client";

import { motion } from "framer-motion";
import { 
  FileText, 
  Play, 
  Calculator, 
  Download, 
  ArrowRight,
  ShieldCheck,
  Video,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const RESOURCES = [
  { category: "Guides", title: "First-Time Homebuyer's Checklist", format: "PDF", icon: FileText, color: "burgundy" },
  { category: "Tools", title: "Retirement Savings Calculator", format: "Excel", icon: Calculator, color: "gold" },
  { category: "Guides", title: "Tax Optimization Strategies 2026", format: "PDF", icon: FileText, color: "burgundy" },
  { category: "Videos", title: "Understanding Whole Life Insurance", format: "Video", icon: Video, color: "gold" },
  { category: "Tools", title: "Monthly Budget Tracker Template", format: "Sheets", icon: Calculator, color: "burgundy" },
  { category: "Guides", title: "Debt Repayment Snowball Method", format: "PDF", icon: FileText, color: "gold" },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-24 bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <Badge  className="mb-6">Knowledge Library</Badge>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight font-poppins mb-8 leading-[1.1]">
              Equipping You with the <br />
              <span className="text-gradient-gold">Right Tools.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 font-inter max-w-2xl mx-auto leading-relaxed">
              Explore our curated collection of free templates, calculators, and guides designed to accelerate your financial progress.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RESOURCES.map((res, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full border-none shadow-premium hover:shadow-xl transition-all group rounded-3xl overflow-hidden bg-white">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-8">
                      <Badge className={res.color === 'burgundy' ? 'bg-burgundy/10 text-burgundy border-none' : 'bg-gold/10 text-gold-dark border-none'}>
                        {res.category}
                      </Badge>
                      <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-1">
                        <res.icon className="w-3 h-3" /> {res.format}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold font-poppins text-charcoal mb-8 leading-tight group-hover:text-burgundy transition-colors">
                      {res.title}
                    </h3>
                    <div className="mt-auto">
                      <Button variant="ghost" className="w-full h-12 rounded-xl group/btn hover:bg-burgundy hover:text-white transition-all font-bold">
                        Access Now <ArrowRight className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Featured Masterclass */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-24 bg-gradient-burgundy rounded-[48px] overflow-hidden shadow-2xl relative"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
            <div className="grid lg:grid-cols-2 items-center">
              <div className="p-12 lg:p-20 relative z-10">
                <Badge  className="mb-6">Featured Masterclass</Badge>
                <h2 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6">The Wealth Building Blueprint</h2>
                <p className="text-lg text-white/80 mb-10 leading-relaxed">
                  Join Taiwo Olanrewaju for an exclusive 45-minute seminar breaking down the strategies used by high-net-worth individuals to preserve generational wealth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="h-14 px-8 bg-gold hover:bg-gold-light text-burgundy-dark font-black rounded-xl shadow-lg text-lg">
                    Watch for Free <Play className="ml-2 w-5 h-5 fill-current" />
                  </Button>
                  <Button variant="ghost" className="h-14 px-8 text-white hover:bg-white/10 font-bold rounded-xl border border-white/20">
                    Learn More <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] lg:h-full bg-black/40 group overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gold rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform active:scale-95 group">
                    <Play className="w-10 h-10 text-burgundy fill-current translate-x-1" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 flex items-center gap-2 text-white/60 font-bold text-xs uppercase tracking-widest">
                  <ShieldCheck className="w-4 h-4 text-gold" /> Exclusive Content
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

