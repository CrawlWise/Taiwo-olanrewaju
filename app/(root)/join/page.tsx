"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  TrendingUp, 
  Briefcase, 
  GraduationCap, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  Award
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

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function JoinPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-24 bg-charcoal text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,var(--tw-color-gold)_0%,transparent_50%)] opacity-20" />
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
                Careers & Mentorship
              </Badge>
            </motion.div>
            <motion.h1 
              variants={fadeIn}
              className="text-5xl md:text-7xl font-extrabold tracking-tight font-poppins mb-8 leading-[1.1]"
            >
              Build Your Legacy as a <br />
              <span className="text-gradient-gold">Financial Leader.</span>
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-xl md:text-2xl text-white/70 font-inter max-w-2xl leading-relaxed"
            >
              Join an elite team of advisors. Whether you're seasoned or starting fresh, we provide the platform, mentorship, and resources to scale your impact.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Personal Mentorship", desc: "One-on-one guidance from Taiwo Olanrewaju himself.", icon: Users },
              { title: "Passive Revenue", desc: "Build sustainable, long-term wealth through team overrides.", icon: Zap },
              { title: "Global Network", desc: "Access to a wide network of financial professionals across Canada.", icon: Globe },
              { title: "Proven System", desc: "A turn-key business model designed for rapid scaling.", icon: TrendingUp }
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-premium border border-burgundy/5"
              >
                <div className="w-12 h-12 bg-burgundy/5 text-burgundy rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-poppins text-charcoal mb-3">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Info Side */}
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-bold font-poppins text-charcoal mb-6">Your Future, Redefined.</h2>
                <p className="text-lg text-muted-foreground leading-relaxed italic border-l-4 border-gold pl-6">
                  "Success in this industry isn't just about knowledge; it's about the platform you build upon and the mentorship that guides you. I've built this team to be the foundation for your greatest achievements."
                </p>
              </div>

              <div className="space-y-8">
                {[
                  { title: "Licensed Professionals", desc: "Elevate your practice with advanced products and a stronger brand identity.", icon: Award },
                  { title: "Career Changers", desc: "Full training and support to help you get licensed and start your practice.", icon: GraduationCap },
                  { title: "Mentors & Leaders", desc: "Opportunity to build and lead your own team within our ecosystem.", icon: Briefcase }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gold/10 text-gold-dark flex items-center justify-center">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold font-poppins text-charcoal mb-2">{item.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-burgundy text-white rounded-[32px] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
                <h4 className="text-xl font-bold mb-4">48-Hour Response Time</h4>
                <p className="text-white/70 mb-6">Every application is reviewed personally by our leadership team. You'll hear from us within 2 business days.</p>
                <div className="flex items-center gap-2 text-gold font-bold">
                  <ShieldCheck className="w-5 h-5" /> <span>Secure Submission Guaranteed</span>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <Card className="border-none shadow-premium rounded-[40px] overflow-hidden bg-muted/30">
              <CardContent className="p-8 sm:p-12">
                <form className="space-y-10">
                  <div className="space-y-8">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-burgundy text-white flex items-center justify-center font-bold text-sm">1</div>
                      <h3 className="text-xl font-bold font-poppins text-charcoal">Licensing Status</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Are you currently licensed? *</label>
                      <div className="grid grid-cols-2 gap-4">
                        <label className="flex items-center justify-center p-4 border-2 border-burgundy bg-burgundy/5 rounded-2xl cursor-pointer transition-all">
                          <input type="radio" name="isLicensed" value="yes" className="sr-only" required />
                          <span className="font-bold text-burgundy">Yes, I am</span>
                        </label>
                        <label className="flex items-center justify-center p-4 border-2 border-transparent bg-white rounded-2xl cursor-pointer transition-all hover:border-burgundy/30">
                          <input type="radio" name="isLicensed" value="no" className="sr-only" />
                          <span className="font-bold text-charcoal">Not yet</span>
                        </label>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">If yes, which provinces?</label>
                      <Input placeholder="e.g. Alberta, Ontario" className="h-12 rounded-xl bg-white border-muted-foreground/20" />
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-burgundy text-white flex items-center justify-center font-bold text-sm">2</div>
                      <h3 className="text-xl font-bold font-poppins text-charcoal">Goals & Vision</h3>
                    </div>

                    <div className="space-y-4">
                      <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Interest in Passive Income? *</label>
                      <div className="grid grid-cols-2 gap-4">
                        <label className="flex items-center justify-center p-4 border-2 border-burgundy bg-burgundy/5 rounded-2xl cursor-pointer transition-all">
                          <input type="radio" name="passive" value="yes" className="sr-only" required />
                          <span className="font-bold text-burgundy">High Interest</span>
                        </label>
                        <label className="flex items-center justify-center p-4 border-2 border-transparent bg-white rounded-2xl cursor-pointer transition-all hover:border-burgundy/30">
                          <input type="radio" name="passive" value="no" className="sr-only" />
                          <span className="font-bold text-charcoal">Unsure</span>
                        </label>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">What motivates you? *</label>
                      <textarea className="w-full px-4 py-3 rounded-2xl border border-muted-foreground/20 bg-white focus:outline-none focus:ring-2 focus:ring-burgundy min-h-[100px]" placeholder="Tell us about your drive..."></textarea>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-burgundy text-white flex items-center justify-center font-bold text-sm">3</div>
                      <h3 className="text-xl font-bold font-poppins text-charcoal">Contact Details</h3>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                        <Input required placeholder="John Doe" className="h-12 rounded-xl bg-white border-muted-foreground/20" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Email</label>
                        <Input type="email" required placeholder="john@example.com" className="h-12 rounded-xl bg-white border-muted-foreground/20" />
                      </div>
                      <div className="space-y-2 sm:col-span-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Phone Number</label>
                        <Input type="tel" required placeholder="+1 (555) 000-0000" className="h-12 rounded-xl bg-white border-muted-foreground/20" />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button type="submit" className="w-full py-8 text-xl font-bold font-poppins bg-burgundy hover:bg-burgundy-dark text-white rounded-2xl shadow-xl transition-all transform hover:scale-[1.02] active:scale-[0.98]">
                      Submit Application <ArrowRight className="ml-3 h-6 w-6" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

