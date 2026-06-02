"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  ArrowRight,
  Wrench,
  Zap,
  Layers,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

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

