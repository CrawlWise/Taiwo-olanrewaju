"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ContactGreatway from "@/components/forms/contactGreatway";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-burgundy py-24 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,var(--tw-color-gold)_0%,transparent_50%)] opacity-20" />
        </div>

        <div className="container relative z-10 mx-auto max-w-4xl px-4 text-center">
          <motion.div initial="initial" animate="animate" variants={fadeIn}>
            <Badge className="mb-6">Contact Us</Badge>

            <h1 className="mb-8 font-poppins text-5xl font-extrabold leading-[1.1] tracking-tight md:text-7xl">
              Let's Start a <br />
              <span className="text-gradient-gold">Conversation.</span>
            </h1>

            <p className="mx-auto max-w-2xl text-xl leading-relaxed text-white/70 md:text-2xl">
              Have questions about wealth building, insurance, or joining our
              team? We're here to provide the clarity you need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-100 py-24">
        {/* Background Decorations */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-burgundy/5 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          {/* Section Heading */}
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mx-auto mb-20 max-w-3xl text-center"
          >
            <Badge className="mb-5">Get In Touch</Badge>

            <h2 className="mb-6 font-poppins text-4xl font-bold text-charcoal md:text-5xl">
              We'd Love to Hear From You
            </h2>

            <p className="text-lg leading-8 text-muted-foreground md:text-xl">
              Whether you're looking for financial guidance, insurance
              solutions, or opportunities to grow your career, our team is
              ready to help. Reach out today and we'll respond as quickly as
              possible.
            </p>
          </motion.div>

          {/* Content */}
          <div className="relative">
            {/* Divider */}
            <div className="absolute left-[39.8%] top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent lg:block" />

            <div className="grid items-start gap-12 lg:grid-cols-5 xl:gap-20">
              {/* Left Side */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-10 lg:col-span-2"
              >
                <div>
                  <h3 className="mb-8 font-poppins text-3xl font-bold text-charcoal">
                    Contact Information
                  </h3>

                  <div className="space-y-8">
                    {[
                      {
                        title: "Email Address",
                        value: "insured@taiwoolanrewaju.org",
                        icon: Mail,
                        link: "mailto:insured@taiwoolanrewaju.org",
                      },
                      {
                        title: "Phone Number",
                        value: "+1 613 519 4228",
                        icon: Phone,
                        link: "tel:+16135194228",
                      },
                      {
                        title: "Office Location",
                        value:
                          "6 Antares Drive, Unit 7, Nepean, ON K2E 8A9",
                        icon: MapPin,
                        link: "#",
                      },
                    ].map((item, index) => (
                      <motion.a
                        key={index}
                        href={item.link}
                        whileHover={{ x: 8 }}
                        className="group flex gap-5"
                      >
                        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-white text-burgundy shadow-lg transition-all duration-300 group-hover:bg-burgundy group-hover:text-white">
                          <item.icon className="h-6 w-6" />
                        </div>

                        <div>
                          <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                            {item.title}
                          </p>

                          <p className="text-lg font-semibold leading-7 text-charcoal transition-colors group-hover:text-burgundy">
                            {item.value}
                          </p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Hours Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="relative overflow-hidden rounded-[36px] bg-charcoal p-8 text-white shadow-2xl"
                >
                  <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-gold/10 blur-3xl" />

                  <div className="relative">
                    <div className="mb-8 flex items-center gap-3">
                      <div className="rounded-xl bg-gold/10 p-3">
                        <Clock className="h-6 w-6 text-gold" />
                      </div>

                      <h3 className="font-poppins text-2xl font-bold">
                        Business Hours
                      </h3>
                    </div>

                    <div className="space-y-4 text-white/70">
                      <div className="flex justify-between border-b border-white/10 pb-3">
                        <span>Monday - Friday</span>
                        <span className="font-semibold text-white">
                          9:00 AM - 5:00 PM
                        </span>
                      </div>

                      <div className="flex justify-between border-b border-white/10 pb-3">
                        <span>Saturday</span>
                        <span className="font-semibold text-white">
                          By Appointment
                        </span>
                      </div>

                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span className="font-semibold text-gold/80">
                          Closed
                        </span>
                      </div>
                    </div>

                    <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-8">
                      <ShieldCheck className="h-5 w-5 text-gold" />
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                        Secure & Confidential Communication
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Side */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="lg:col-span-3"
              >
                <ContactGreatway />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}