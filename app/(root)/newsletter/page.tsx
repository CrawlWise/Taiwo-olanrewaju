"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Mail, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Award,
  Users
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

export default function NewsletterPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      {/* Hero / Main Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-burgundy text-white overflow-hidden py-24">
        {/* Background Particles/Patterns */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-gold/10 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-burgundy/40 blur-[120px]" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Side: Content */}
            <motion.div 
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="space-y-10"
            >
              <div>
                <Badge  className="mb-6 px-4 py-1 text-sm uppercase tracking-widest font-semibold">
                  Elite Insights
                </Badge>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight font-poppins mb-8 leading-[1.1]">
                  Master Your <br />
                  <span className="text-gradient-gold">Financial Narrative.</span>
                </h1>
                <p className="text-xl md:text-2xl text-white/70 font-inter max-w-xl leading-relaxed">
                  Join 5,000+ ambitious professionals who receive our weekly breakdown of wealth strategies, insurance updates, and market insights.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { title: "Weekly Wealth Hacks", desc: "Actionable tips to optimize your current assets.", icon: TrendingUp },
                  { title: "Policy Deep-Dives", desc: "Understanding the fine print of insurance products.", icon: Award },
                  { title: "Market Commentary", desc: "A calm perspective on economic volatility.", icon: Mail }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/10 text-gold flex items-center justify-center">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold font-poppins">{item.title}</h4>
                      <p className="text-white/50 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-burgundy bg-charcoal flex items-center justify-center text-[10px] font-bold overflow-hidden">
                      <Users className="w-5 h-5 text-gold/60" />
                    </div>
                  ))}
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-white/40">
                  Trusted by 5,000+ Subscribers
                </p>
              </div>
            </motion.div>

            {/* Right Side: Form Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Card className="border-none shadow-2xl rounded-[48px] overflow-hidden bg-white text-charcoal relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-burgundy/5 rounded-full blur-3xl" />
                <CardContent className="p-10 md:p-16">
                  <div className="text-center mb-10">
                    <div className="w-20 h-20 bg-burgundy/5 text-burgundy rounded-[24px] flex items-center justify-center mx-auto mb-6">
                      <Mail className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-bold font-poppins mb-4">Start Your Subscription</h3>
                    <p className="text-muted-foreground">Free weekly delivery. No fluff. Just value.</p>
                  </div>

                  <form className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">First Name</label>
                        <Input required placeholder="Taiwo" className="h-14 rounded-2xl bg-muted/30 border-none focus:ring-burgundy" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                        <Input type="email" required placeholder="hello@taiwo.com" className="h-14 rounded-2xl bg-muted/30 border-none focus:ring-burgundy" />
                      </div>
                    </div>

                    <Button type="submit" className="w-full h-16 text-xl font-bold font-poppins bg-burgundy hover:bg-burgundy-dark text-white rounded-2xl shadow-xl transition-all transform hover:scale-[1.02] active:scale-[0.98]">
                      Subscribe Now <ArrowRight className="ml-3 w-6 h-6" />
                    </Button>
                    
                    <div className="flex flex-col items-center gap-4 mt-8">
                      <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                        <ShieldCheck className="w-4 h-4 text-green-600" /> No spam. Unsubscribe anytime.
                      </div>
                      <p className="text-[10px] text-muted-foreground">
                        By subscribing, you agree to our <Link href="/privacy" className="underline hover:text-burgundy">Privacy Policy</Link>.
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

