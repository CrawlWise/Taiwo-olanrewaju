"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ShieldCheck, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ContactForm from "@/components/forms/contactForm";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-burgundy text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,var(--tw-color-gold)_0%,transparent_50%)] opacity-20" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
          <motion.div initial="initial" animate="animate" variants={fadeIn}>
            <Badge className="mb-6">Contact Us</Badge>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight font-poppins mb-8 leading-[1.1]">
              Let&apos;s Start a <br />
              <span className="text-gradient-gold">Conversation.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 font-inter max-w-2xl mx-auto leading-relaxed">
              Have questions about wealth building, insurance, or joining our
              team? We&apos;re here to provide the clarity you need.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            {/* Contact Info Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-10"
            >
              <div>
                <h2 className="text-3xl font-bold font-poppins text-charcoal mb-6">
                  Direct Channels
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "Email Address",
                      value: "taiwo.olanrewaju@mygreatway.ca",
                      icon: Mail,
                      link: "mailto:taiwo.olanrewaju@mygreatway.ca",
                    },
                    {
                      title: "Direct Phone",
                      value: "+1 613 519 4228",
                      icon: Phone,
                      link: "tel: +1 613 519 4228",
                    },
                    {
                      title: "Corporate Office",
                      value:
                        "6 Antares Drive, Unit 7, Nepean, ON K2E 8A9 Phone Number: +1 613 519 4228",
                      icon: MapPin,
                      link: "#",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white text-burgundy flex items-center justify-center shadow-sm group-hover:bg-burgundy group-hover:text-white transition-all">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">
                          {item.title}
                        </h4>
                        <a
                          href={item.link}
                          className="text-lg font-bold text-charcoal hover:text-burgundy transition-colors"
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-charcoal rounded-[40px] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl" />
                <div className="flex items-center gap-4 mb-6">
                  <Clock className="text-gold w-6 h-6" />
                  <h4 className="text-xl font-bold font-poppins">
                    Operating Hours
                  </h4>
                </div>
                <div className="space-y-3 text-white/60 font-medium">
                  <div className="flex justify-between">
                    <span>Mon - Fri</span> <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span> <span>By Appointment</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>{" "}
                    <span className="text-gold/60">Closed</span>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-3">
                  <ShieldCheck className="text-gold w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-widest text-white/40">
                    Secure Communication
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Form Side */}
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
