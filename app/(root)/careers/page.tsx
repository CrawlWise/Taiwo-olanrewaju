"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  TrendingUp,
  Clock,
  Users,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

/* ─── Animation Variants ──────────────────────────────────────── */

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.12 } },
};

/* ─── Data ────────────────────────────────────────────────────── */

const benefits = [
  {
    icon: GraduationCap,
    title: "Mentorship & Training",
    desc: "Get educated and learn the exact steps through hands-on mentorship from Taiwo Olanrewaju. We provide complete training on product knowledge, compliance, and client acquisition.",
  },
  {
    icon: TrendingUp,
    title: "Uncapped Income Potential",
    desc: "Build a business that pays you what you're worth. Enjoy industry-leading commission structures, recurring residual income, and the ability to build your own agency.",
  },
  {
    icon: Clock,
    title: "Flexible Lifestyle",
    desc: "Say goodbye to the 9-to-5. You're an independent advisor, set your own hours, and enjoy the freedom to work from anywhere while building a residual income stream.",
  },
  {
    icon: Users,
    title: "Supportive Team Culture",
    desc: "You don't have to do this for yourself, but you're never alone. We are a collaborative, growth-oriented culture that celebrates your wins and supports your development.",
  },
];

const steps = [
  {
    number: "1",
    title: "Get Licensed",
    desc: "We guide you through the LLQP licensing process and help you satisfy any licensing requirements to get you certified quickly.",
  },
  {
    number: "2",
    title: "Field Training",
    desc: "A supervised dedicated phase of real client work to learn how to connect, advise, and close effectively.",
  },
  {
    number: "3",
    title: "Build & Scale",
    desc: "Build your own book of business while potentially growing your own team. Learn to leverage your network and create generational wealth.",
  },
];

const licensingOptions = [
  "Currently Licensed",
  "Not Yet Licensed",
  "In Progress",
  "Previously Licensed",
];

/* ─── Page Component ──────────────────────────────────────────── */

export default function CareersPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative py-28 md:py-36 bg-gradient-burgundy text-white overflow-hidden">
        {/* Decorative glow orbs */}
        <div className="absolute top-[-80px] left-[-100px] w-[420px] h-[420px] rounded-full bg-gold/10 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[-100px] right-[-80px] w-[360px] h-[360px] rounded-full bg-white/5 blur-[120px] pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="max-w-3xl mx-auto"
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.55 }}>
              <Badge className="mb-6 px-5 py-1.5 text-xs uppercase tracking-[0.18em] font-bold bg-gold/10 text-gold border border-gold/30 rounded-full">
                Opportunities for Aspiring Advisors
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-4xl md:text-6xl font-extrabold font-poppins tracking-tight leading-[1.1] mb-6"
            >
              Build a{" "}
              <span className="text-gradient-gold">Meaningful Career</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto"
            >
              Join our team of dedicated financial professionals and build a
              flexible, high-income business while helping families secure their
              futures.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a href="#apply">
                <Button className="px-8 py-6 text-base font-bold bg-gold hover:bg-gold-dark text-charcoal rounded-2xl shadow-gold transition-all hover:scale-[1.03]">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="#path">
                <Button
                  variant="outline"
                  className="px-8 py-6 text-base font-bold border-white/30 text-white hover:bg-white/10 rounded-2xl transition-all"
                >
                  See How It Works
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Why Partner With Us ─────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center mb-16"
          >
            <p className="text-gold font-bold text-xs uppercase tracking-[0.2em] mb-3">
              Opportunities for Aspiring Advisors
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold font-poppins text-charcoal">
              Why Partner With Us?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We don't just provide a platform, we provide a proven blueprint for
              success in the financial services industry.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white border border-burgundy/8 rounded-3xl p-8 shadow-sm hover:shadow-premium hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gold/10 text-gold-dark flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <b.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold font-poppins text-charcoal mb-3">
                  {b.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {b.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Your Path to Success ────────────────────────────────── */}
      <section
        id="path"
        className="py-24 bg-gradient-burgundy text-white overflow-hidden relative"
      >
        <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold font-poppins">
              Your Path to Success
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="relative text-center p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all"
              >
                {/* Connector line (hidden on mobile) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-8 h-px bg-gold/40 -translate-x-4 z-10" />
                )}

                <div className="w-14 h-14 rounded-full bg-gold text-charcoal font-extrabold text-xl flex items-center justify-center mx-auto mb-6 shadow-gold">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold font-poppins mb-4">
                  {step.title}
                </h3>
                <p className="text-white/65 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Application Form ────────────────────────────────────── */}
      <section id="apply" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="max-w-2xl mx-auto"
          >
            {/* Card */}
            <div className="bg-white rounded-[40px] shadow-premium border border-burgundy/8 p-8 sm:p-14">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-extrabold font-poppins text-charcoal mb-3">
                  Take the First Step
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Fill in the form below to learn about our licensing program and
                  choose your path forward.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16 space-y-5"
                >
                  <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10 text-gold-dark" />
                  </div>
                  <h3 className="text-2xl font-bold font-poppins text-charcoal">
                    Application Received!
                  </h3>
                  <p className="text-muted-foreground max-w-xs mx-auto">
                    Thank you for your interest. Our team will review your
                    application and be in touch within 48 hours.
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm font-bold text-burgundy">
                    <ShieldCheck className="w-4 h-4" />
                    Secure submission guaranteed
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Row */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label
                        htmlFor="career-first-name"
                        className="text-xs font-bold uppercase tracking-widest text-muted-foreground"
                      >
                        First Name
                      </label>
                      <Input
                        id="career-first-name"
                        required
                        placeholder="Jane"
                        className="h-12 rounded-xl bg-muted/40 border-muted-foreground/15 focus:border-burgundy focus:ring-burgundy"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="career-last-name"
                        className="text-xs font-bold uppercase tracking-widest text-muted-foreground"
                      >
                        Last Name
                      </label>
                      <Input
                        id="career-last-name"
                        required
                        placeholder="Smith"
                        className="h-12 rounded-xl bg-muted/40 border-muted-foreground/15 focus:border-burgundy focus:ring-burgundy"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label
                      htmlFor="career-email"
                      className="text-xs font-bold uppercase tracking-widest text-muted-foreground"
                    >
                      Email Address
                    </label>
                    <Input
                      id="career-email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      className="h-12 rounded-xl bg-muted/40 border-muted-foreground/15 focus:border-burgundy focus:ring-burgundy"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label
                      htmlFor="career-phone"
                      className="text-xs font-bold uppercase tracking-widest text-muted-foreground"
                    >
                      Phone Number
                    </label>
                    <Input
                      id="career-phone"
                      type="tel"
                      required
                      placeholder="+1 (613) 000-0000"
                      className="h-12 rounded-xl bg-muted/40 border-muted-foreground/15 focus:border-burgundy focus:ring-burgundy"
                    />
                  </div>

                  {/* Licensing Status */}
                  <div className="space-y-2">
                    <label
                      htmlFor="career-licensing"
                      className="text-xs font-bold uppercase tracking-widest text-muted-foreground"
                    >
                      Current Licensing Status
                    </label>
                    <div className="relative">
                      <select
                        id="career-licensing"
                        required
                        defaultValue=""
                        className="w-full h-12 rounded-xl bg-muted/40 border border-muted-foreground/15 px-4 pr-10 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-burgundy appearance-none"
                      >
                        <option value="" disabled>
                          Select your status…
                        </option>
                        {licensingOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                        ▾
                      </span>
                    </div>
                  </div>

                  {/* Motivation */}
                  <div className="space-y-2">
                    <label
                      htmlFor="career-motivation"
                      className="text-xs font-bold uppercase tracking-widest text-muted-foreground"
                    >
                      Why are you interested in a career in financial services?
                    </label>
                    <textarea
                      id="career-motivation"
                      required
                      placeholder="Tell us what motivates you to pursue this career path…"
                      rows={4}
                      className="w-full px-4 py-3 rounded-2xl border border-muted-foreground/15 bg-muted/40 text-sm font-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-burgundy resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full py-7 text-base font-bold font-poppins bg-gold hover:bg-gold-dark text-charcoal rounded-2xl shadow-gold transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8H4z"
                          />
                        </svg>
                        Submitting…
                      </span>
                    ) : (
                      <>
                        Submit Application{" "}
                        <ArrowRight className="ml-2 h-5 w-5 inline" />
                      </>
                    )}
                  </Button>

                  <p className="text-center text-xs text-muted-foreground flex items-center justify-center gap-1.5 pt-1">
                    <ShieldCheck className="w-4 h-4 text-gold-dark" />
                    Your information is secure and will never be shared.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
