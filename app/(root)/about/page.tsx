"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Award,
  Target,
  Heart,
  ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-burgundy text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/20 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeIn}>
              <Badge className="mb-6 px-4 py-1 text-sm uppercase tracking-widest font-semibold">
                The Journey
              </Badge>
            </motion.div>
            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-7xl font-extrabold tracking-tight font-poppins mb-8 leading-[1.1]"
            >
              Driven by Purpose, <br />
              <span className="text-gradient-gold">Focused on Your Progress.</span>
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-xl md:text-2xl text-white/80 font-inter max-w-2xl leading-relaxed"
            >
              I am Taiwo Olanrewaju, and my mission is to demystify wealth building and empower you to take control of your financial destiny.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Portrait Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-8 border-burgundy/5">
                <Image
                  src="/images/ceo.jpeg"
                  alt="Taiwo Olanrewaju"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gold/10 rounded-full blur-3xl -z-10" />

              <div className="absolute -bottom-6 -left-6 glass-dark p-8 rounded-2xl shadow-premium border-gold/20 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-burgundy-dark font-bold text-xl">
                    10+
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gold uppercase tracking-tighter">Years of</p>
                    <p className="text-lg font-bold text-white">Experience</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Biography */}
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal font-poppins mb-6">A Mission Born from Observation</h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    I am a licensed insurance advisor with experience in the financial services industry. For years, I have noticed a simple observation: the most powerful wealth building strategies were often reserved for the elite, while the majority were left with generic advice. I saw hardworking individuals, families, and entrepreneurs struggling to navigate a complex system that didn't seem designed for their success.
                  </p>
                  <p>
                    I decided to change that. Today, I am licensed in ONTARIO, ALBERTA, NEW BRUNSWICK, AND QUEBEC. I'm more than just an advisor. I am an educator and a mentor. My goal is to equip you with the tools, knowledge, and confidence to build a legacy that lasts for generations.”
                  </p>

                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-24 pt-24 border-t border-gray-100"
          >
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal font-poppins mb-6">My Core Values</h2>
              <p className="text-lg text-muted-foreground">
                These principles guide every decision I make and every strategy I develop for my clients.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Unwavering Integrity", desc: "Transparent, honest advice that always prioritizes your long-term well-being.", icon: ShieldCheck, color: "burgundy" },
                { title: "Empowerment", desc: "We don't just manage money; we teach you how money works so you can lead with confidence.", icon: Target, color: "gold" },
                { title: "Accessibility", desc: "Premium financial strategies should be accessible to everyone with a vision for their future.", icon: Heart, color: "burgundy" },
                { title: "Excellence", desc: "A commitment to world-class service and staying at the forefront of financial innovation.", icon: Award, color: "gold" },
              ].map((val, i) => (
                <Card key={i} className="border-none shadow-premium hover:shadow-xl transition-all group">
                  <CardContent className="p-8">
                    <div className={`w-12 h-12 rounded-xl bg-${val.color}/10 text-${val.color} flex items-center justify-center mb-6 group-hover:bg-${val.color} group-hover:text-white transition-colors`}>
                      <val.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-xl mb-3 font-poppins text-charcoal">{val.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{val.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      {/* Expertise Section */}
      <section className="py-24 bg-charcoal text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6">Global Impact</Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-12">Educating the Next Generation</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Digital Products", value: "3+", desc: "Best-selling books and guides on wealth building." },
              { title: "Mentorship", value: "100+", desc: "Successful advisors trained under my personal guidance." },
              { title: "Public Speaking", value: "50+", desc: "Keynote sessions at major financial and leadership conferences." }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white/5 rounded-3xl border border-white/10"
              >
                <div className="text-5xl font-black font-poppins text-gold mb-4">{stat.value}</div>
                <h4 className="text-xl font-bold mb-2">{stat.title}</h4>
                <p className="text-white/60">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-burgundy p-12 lg:p-20 rounded-[40px] shadow-2xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
            <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-8">Ready to Build Your Legacy?</h2>
            <p className="text-lg text-white/80 mb-10">
              Let's map out a customized strategy that aligns with your values and long-term goals.
            </p>
            <Button asChild size="lg" className="bg-gold hover:bg-gold-light text-white font-bold rounded-full px-10 h-16 text-xl">
              <Link href="/book">
                Book a Consultation <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

