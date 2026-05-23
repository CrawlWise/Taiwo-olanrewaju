"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Download, 
  ShoppingCart, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Star,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function BooksPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-burgundy text-white">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,var(--tw-color-gold)_0%,transparent_60%)] opacity-30" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <Badge  className="mb-6">Knowledge Library</Badge>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight font-poppins mb-8 leading-[1.1]">
              Tools to Build Your <br />
              <span className="text-gradient-gold">Financial Future.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 font-inter max-w-2xl mx-auto leading-relaxed">
              Practical, actionable knowledge distilled into comprehensive guides designed for long-term growth.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-24">
        {/* Free Book Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-muted/30 rounded-[48px] overflow-hidden shadow-premium mb-24 border border-burgundy/5"
        >
          <div className="grid lg:grid-cols-2 items-center">
            <div className="p-10 lg:p-20 order-2 lg:order-1">
              <Badge className="mb-6">Free Resource</Badge>
              <h2 className="text-4xl md:text-5xl font-bold font-poppins text-charcoal mb-6">Financial Independence 101</h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                The foundational guide for anyone looking to break free from the cycle of debt and start building a solid base for wealth.
              </p>
              
              <div className="space-y-4 mb-10">
                {['Basic budgeting frameworks', 'Debt elimination strategies', 'Principles of compound interest'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 font-bold text-charcoal">
                    <CheckCircle2 className="text-burgundy w-5 h-5" /> <span>{item}</span>
                  </div>
                ))}
              </div>

              <form className="space-y-4 bg-white p-8 rounded-3xl shadow-xl border border-burgundy/5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input required placeholder="Your Name" className="h-12 rounded-xl" />
                  <Input type="email" required placeholder="Email Address" className="h-12 rounded-xl" />
                </div>
                <Button type="submit" className="w-full h-14 text-lg font-bold bg-burgundy hover:bg-burgundy-dark text-white rounded-xl shadow-lg">
                  Send My eBook <Download className="ml-2 w-5 h-5" />
                </Button>
                <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest font-bold">Sent instantly to your inbox</p>
              </form>
            </div>
            
            <div className="relative h-[500px] lg:h-full bg-charcoal flex items-center justify-center order-1 lg:order-2 overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
              <div className="relative group">
                <div className="w-64 h-80 bg-white rounded shadow-2xl relative transform rotate-3 group-hover:rotate-0 transition-transform duration-700 overflow-hidden">
                  <Image 
                    src="/images/book-mockup.png" 
                    alt="Financial Independence 101" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gold/20 rounded-full blur-3xl -z-10" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Paid Book Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-charcoal text-white rounded-[48px] overflow-hidden shadow-2xl border border-white/5"
        >
          <div className="grid lg:grid-cols-2 items-center">
            <div className="relative h-[500px] lg:h-full bg-white/5 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
              <div className="relative group">
                <div className="w-72 h-96 bg-black rounded-lg shadow-2xl relative transform -rotate-3 group-hover:rotate-0 transition-transform duration-700 overflow-hidden border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-tr from-burgundy/40 to-transparent" />
                  <div className="p-8 h-full flex flex-col justify-center text-center">
                    <Star className="w-12 h-12 text-gold mx-auto mb-6 fill-gold" />
                    <h3 className="text-3xl font-black font-poppins text-white mb-2 leading-tight">The Wealth Legacy</h3>
                    <p className="text-gold font-bold uppercase tracking-widest text-xs">Premium Edition</p>
                  </div>
                </div>
                <div className="absolute -top-10 -left-10 w-48 h-48 bg-burgundy/20 rounded-full blur-3xl -z-10" />
              </div>
            </div>
            
            <div className="p-10 lg:p-20">
              <Badge className="mb-6">Premium Guide</Badge>
              <h2 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6 leading-tight">The Wealth Legacy: Advanced Strategies</h2>
              <div className="flex items-end gap-3 mb-8">
                <span className="text-4xl font-black text-gold">$49.99</span>
                <span className="text-white/40 mb-1 font-bold">CAD</span>
              </div>
              
              <p className="text-lg text-white/70 mb-10 leading-relaxed">
                Dive deep into advanced tax optimization, complex insurance structures, and generational wealth transfer techniques usually reserved for the elite.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {[
                  { title: "Tax Optimization", icon: ShieldCheck },
                  { title: "Estate Planning", icon: FileText },
                  { title: "Asset Protection", icon: Star },
                  { title: "Bonus Templates", icon: ArrowRight }
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/90 font-bold">
                    <feat.icon className="text-gold w-5 h-5" /> <span>{feat.title}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-6">
                <Button className="w-full h-16 text-xl font-bold bg-[#0070BA] hover:bg-[#003087] text-white rounded-2xl shadow-xl transition-all transform hover:scale-[1.02]">
                  Purchase with PayPal <ShoppingCart className="ml-3 w-6 h-6" />
                </Button>
                <div className="flex justify-center items-center gap-6 text-xs font-bold text-white/40 uppercase tracking-widest">
                  <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Secure</span>
                  <span className="flex items-center gap-1">Instant Access</span>
                  <span className="flex items-center gap-1">PDF & EPUB</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

