"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Calendar,
  Sparkles,
  HelpCircle,
} from "lucide-react";
import { servicesData } from "@/site-data/services";
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

export default function ServicesPage() {
  const [activeSection, setActiveSection] = useState("life-insurance");
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) {
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = setTimeout(() => {
          isScrollingRef.current = false;
        }, 150);
        return;
      }

      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
      if (isAtBottom) {
        setActiveSection(servicesData[servicesData.length - 1].id);
        return;
      }

      const scrollPosition = window.scrollY + 150; // offset for detection

      for (const section of servicesData) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const scrollToSection = (id: string) => {
    isScrollingRef.current = true;
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90; // header height offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
    }, 800);
  };

  return (
    <div className="flex flex-col min-h-screen overflow-x-clip bg-[#fbfbfb]">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-burgundy text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/20 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            <motion.div variants={fadeIn}>
              <Badge className="mb-6 px-4 py-1 text-sm uppercase tracking-widest font-semibold bg-gold text-burgundy-dark border-none shadow-premium">
                Tailored Solutions
              </Badge>
            </motion.div>
            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-7xl font-extrabold tracking-tight font-poppins mb-6 leading-[1.1]"
            >
              Our Services
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-lg md:text-xl text-white/80 font-inter max-w-2xl leading-relaxed"
            >
              Comprehensive insurance and wealth management solutions tailored to your unique lifestyle.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Layout Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {/* Left Sticky Sidebar */}
            <aside className="w-full lg:w-72 shrink-0 sticky lg:top-28">
              <div className="bg-white rounded-3xl p-6 border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
                <h3 className="font-poppins font-bold text-charcoal text-lg mb-5 flex items-center gap-2 border-b border-black/5 pb-3">
                  <Sparkles className="w-5 h-5 text-gold" /> Jump to Service
                </h3>
                <nav className="flex flex-col space-y-1">
                  {servicesData.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`text-left py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 relative w-full ${
                          isActive
                            ? "text-burgundy bg-burgundy/[0.08] pl-6 font-bold"
                            : "text-muted-foreground hover:text-burgundy hover:bg-black/[0.01]"
                        }`}
                      >
                        {/* Dynamic left indicator line */}
                        {isActive && (
                          <motion.span
                            layoutId="activeIndicator"
                            className="absolute left-0 top-3 bottom-3 w-1 bg-gold rounded-full"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                        {item.shortTitle}
                      </button>
                    );
                  })}
                </nav>

                {/* Sidebar Callout Card */}
                <div className="mt-8 bg-gradient-to-br from-burgundy to-burgundy-dark rounded-2xl p-5 text-white relative overflow-hidden shadow-premium">
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-gold/10 rounded-full blur-xl" />
                  <HelpCircle className="w-8 h-8 text-gold mb-3 opacity-80" />
                  <h4 className="font-poppins font-bold text-sm mb-2 text-gold">Not sure what you need?</h4>
                  <p className="text-xs text-white/70 leading-relaxed mb-4">
                    Get in touch today for a comprehensive, free evaluation.
                  </p>
                  <Button
                    asChild
                    size="sm"
                    className="w-full bg-gold hover:bg-gold-light text-burgundy-dark font-bold text-xs"
                  >
                    <Link href="/book">
                      Get a Free Assessment <ArrowRight className="ml-1 w-3.5 h-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </aside>

            {/* Right Details Section */}
            <div className="flex-1 space-y-20 lg:pl-4">
              {servicesData.map((section, idx) => {
                const Icon = section.icon;
                return (
                  <motion.section
                    key={section.id}
                    id={section.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="scroll-mt-24 border-b border-black/5 pb-16 last:border-none last:pb-0"
                  >
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-burgundy/10 text-burgundy flex items-center justify-center shrink-0 mt-1">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h2 className="font-poppins font-extrabold text-2xl md:text-3xl text-charcoal mb-3">
                          {section.title}
                        </h2>
                        <p className="text-muted-foreground text-base leading-relaxed max-w-3xl">
                          {section.description}
                        </p>
                      </div>
                    </div>

                    {/* Content bullet lists for Retirement */}
                    {section.bullets && (
                      <div className="ml-16 mb-8 grid md:grid-cols-2 gap-4 max-w-3xl bg-warm-beige/20 p-6 rounded-2xl border border-gold/10">
                        {section.bullets.map((bullet, i) => (
                          <div key={i} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-5 h-5 text-burgundy shrink-0 mt-0.5" />
                            <span className="text-sm font-medium text-charcoal">{bullet}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Section Cards */}
                    {section.cards && (
                      <div className="ml-0 md:ml-16 grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
                        {section.cards.map((card, cidx) => (
                          <Card
                            key={cidx}
                            className={`border-none shadow-[0_8px_30px_rgb(0,0,0,0.015)] bg-white overflow-hidden rounded-2xl relative transition-all duration-300 hover:shadow-[0_12px_40px_rgb(0,0,0,0.03)] hover:-translate-y-0.5 border-l-4 ${
                              cidx % 2 === 0 ? "border-l-gold" : "border-l-burgundy"
                            }`}
                          >
                            <CardContent className="p-6">
                              <h4 className="font-poppins font-bold text-gold-dark dark:text-gold text-base mb-3 leading-snug">
                                {card.title}
                              </h4>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {card.description}
                              </p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    )}

                    {/* Call to action within section */}
                    {section.cta && (
                      <div className="ml-0 md:ml-16">
                        {section.cta.variant === "outline" ? (
                          <Button
                            asChild
                            variant="outline"
                            className="border-burgundy text-burgundy hover:bg-burgundy hover:text-white font-bold px-6 py-2.5 rounded-xl transition-all"
                          >
                            <Link href={section.cta.href}>
                              {section.cta.text} <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                          </Button>
                        ) : (
                          <Button
                            asChild
                            className="bg-gold hover:bg-gold-light text-burgundy-dark font-bold px-6 py-2.5 rounded-xl transition-all shadow-gold"
                          >
                            <Link href={section.cta.href}>
                              {section.cta.text} <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                          </Button>
                        )}
                      </div>
                    )}
                  </motion.section>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* General Final CTA Section */}
      <section className="bg-charcoal text-white py-20 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h2 className="font-poppins font-extrabold text-3xl md:text-4xl mb-6">
            Ready to Protect Your Wealth and Future?
          </h2>
          <p className="text-white/70 text-lg mb-10 leading-relaxed">
            Let's design a secure strategy together. Schedule a complimentary consultation to map out your financial plan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-light text-burgundy-dark font-bold rounded-xl h-14 px-8 text-base shadow-gold"
            >
              <Link href="/book">
                <Calendar className="mr-2 h-5 w-5" /> Book Consultation
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 hover:bg-white/10 text-white font-semibold rounded-xl h-14 px-8 text-base"
            >
              <Link href="/contact">
                Contact Me
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
