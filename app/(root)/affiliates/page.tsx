"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  ShieldCheck,
  ArrowRight,
  Wrench,
  Zap,
  Layers,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const AFFILIATES = [
  { name: "WealthSimple", desc: "Join me on Wealthsimple and get $25 when you fund any account with my referral code H49DAD 🎁 T&Cs", logo: "WS", color: "burgundy", link: "https://my.wealthsimple.com/app/signup?is_retargeting=true&source_caller=ui&shortlink=3i2t30pp&c=referral-promocode-share-link-2023&pid=referral&af_xp=custom&af_reengagement_window=30d&referralcode=H49DAD" },
  { name: "Insurely ", desc: "Compare and save an average of $428 a year* on Your Home Insurance", logo: "IS", color: "gold", link: "https://stan.store/FinanceWithTee " },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function AffiliatesPage() {
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
            <Badge className="mb-6">Curated Stack</Badge>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight font-poppins mb-8 leading-[1.1]">
              Tools for Your <br />
              <span className="text-gradient-gold">Financial Success.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 font-inter max-w-2xl mx-auto leading-relaxed">
              A curated selection of software and services I personally trust and recommend to clients for maximum efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-16 flex items-center gap-4 p-6 bg-white rounded-3xl shadow-sm border border-burgundy/5 max-w-2xl mx-auto">
            <Heart className="text-burgundy fill-burgundy w-6 h-6 flex-shrink-0" />
            <p className="text-sm text-muted-foreground italic font-medium">
              Transparency: Some links below are affiliate links. Using them supports our content at no extra cost to you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AFFILIATES.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full border-none shadow-premium hover:shadow-2xl transition-all group rounded-[32px] overflow-hidden bg-white">
                  <CardContent className="p-10 flex flex-col h-full">
                    <div className="w-16 h-16 rounded-2xl bg-muted/30 flex items-center justify-center text-3xl font-black font-poppins text-charcoal mb-8 group-hover:scale-110 group-hover:bg-burgundy group-hover:text-white transition-all duration-500">
                      {item.logo}
                    </div>
                    <h3 className="text-2xl font-bold font-poppins text-charcoal mb-4 group-hover:text-burgundy transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-muted-foreground mb-10 leading-relaxed flex-1">
                      {item.desc}
                    </p>
                    <div className="mt-auto">
                      <Link href={item.link} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="outline"
                          className="w-full h-14 rounded-2xl border-burgundy/10 text-burgundy font-black uppercase tracking-widest text-xs hover:bg-burgundy hover:text-white transition-all flex items-center justify-center gap-2">
                          Get Started <ExternalLink className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Partner Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 p-12 lg:p-20 bg-gradient-burgundy rounded-[48px] text-white relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-6">Corporate Partners</Badge>
                <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">Becoming a Partner</h2>
                <p className="text-lg text-white/70 mb-10 max-w-xl">
                  Are you a service provider interested in collaborating? We are always looking for partners who align with our mission of financial empowerment.
                </p>
                <Button className="h-14 px-8 bg-gold hover:bg-gold-light text-burgundy-dark font-black rounded-xl">
                  Contact Partnerships <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-6 opacity-30">
                {[Zap, Layers, ShieldCheck, Wrench].map((Icon, i) => (
                  <div key={i} className="aspect-square bg-white/10 rounded-3xl flex items-center justify-center">
                    <Icon className="w-12 h-12 text-white" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

