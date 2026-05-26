"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { meetingData } from "@/site-data/book";
import { meetingTypes } from "@/types/book";
import { ArrowRight, Clock, ShieldCheck, X } from "lucide-react";

export default function BookPage() {
  
const [selectedMeeting, setSelectedMeeting] = useState<typeof meetingTypes[0] | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Header */}
      <section className="relative py-20 bg-gradient-burgundy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,var(--tw-color-gold)_0%,transparent_70%)] opacity-30" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge  className="mb-6 px-6 py-1.5 text-xs uppercase tracking-[0.2em] font-bold">
              Secure Your Future
            </Badge>
            <h1 className="text-4xl md:text-6xl font-black font-poppins mb-6 leading-tight">
              Schedule Your <br />
              <span className="text-gradient-gold text-5xl md:text-7xl">Private Consultation</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-inter leading-relaxed">
              Take the first step towards financial mastery. Select your preferred meeting format below to view available time slots.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Selection Section */}
      <section className="py-24 -mt-12 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {meetingData.map((type, i) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
              >
                <Card 
                  className={cn(
                    "group relative h-full overflow-hidden border-none shadow-premium hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.15)] transition-all duration-500 cursor-pointer",
                    "bg-white before:absolute before:left-0 before:top-0 before:h-full before:w-2",
                    type.id === "online" ? "before:bg-burgundy" : "before:bg-gold"
                  )}
                  onClick={() => setSelectedMeeting(type)}
                >
                  <CardContent className="p-10 md:p-14">
                    <div className="flex flex-col md:flex-row md:items-start gap-8">
                      <div className={cn(
                        "w-20 h-20 rounded-3xl flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg",
                        type.id === "online" ? "bg-burgundy text-white" : "bg-gold text-burgundy-dark"
                      )}>
                        <type.icon className="w-10 h-10" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={cn(
                            "text-xs font-black uppercase tracking-widest",
                            type.id === "online" ? "text-burgundy" : "text-gold-dark"
                          )}>
                            {type.subtitle}
                          </span>
                        </div>
                        <h2 className="text-3xl font-bold font-poppins text-charcoal mb-4 group-hover:text-burgundy transition-colors">
                          {type.title}
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                          {type.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-6 items-center">
                          <div className="flex items-center gap-2 text-sm font-bold text-charcoal/60">
                            <Clock className="w-4 h-4" />
                            {type.duration}
                          </div>
                          <div className="flex items-center gap-2 text-sm font-bold text-charcoal/60">
                            <ShieldCheck className="w-4 h-4 text-green-600" />
                            Confirmed Booking
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-10 pt-8 border-t border-border/50 flex items-center justify-between">
                      <span className="text-burgundy font-black uppercase tracking-[0.2em] text-xs">
                        Check Availability
                      </span>
                      <div className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-2 shadow-sm",
                        type.id === "online" ? "bg-burgundy/5 text-burgundy group-hover:bg-burgundy group-hover:text-white" : "bg-gold/10 text-gold-dark group-hover:bg-gold group-hover:text-burgundy-dark"
                      )}>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Social Proof */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 flex flex-col items-center justify-center text-center px-4"
          >
            <div className="flex -space-x-3 mb-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-charcoal/10 flex items-center justify-center text-[10px] font-bold">
                  {i}+
                </div>
              ))}
            </div>
            <p className="text-muted-foreground max-w-md">
              Join <strong>500+ satisfied clients</strong> who have secured their financial legacy through professional guidance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Modal */}
      <AnimatePresence>
        {selectedMeeting && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMeeting(null)}
              className="absolute inset-0 bg-burgundy-dark/60 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl h-[90vh] bg-white rounded-[32px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/20"
            >
              {/* Modal Header */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-white border-b border-border/50 px-8 flex items-center justify-between z-10">
                <div className="flex items-center gap-3">
                  <selectedMeeting.icon className={cn("w-5 h-5", selectedMeeting.id === "online" ? "text-burgundy" : "text-gold-dark")} />
                  <span className="font-bold text-charcoal">{selectedMeeting.title}</span>
                  <Badge variant="outline" className="text-[10px] ml-2">{selectedMeeting.duration}</Badge>
                </div>
                <button 
                  onClick={() => setSelectedMeeting(null)}
                  className="w-10 h-10 rounded-full hover:bg-muted transition-colors flex items-center justify-center"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>

              {/* Calendar Iframe */}
              <div className="w-full h-full pt-16">
                <iframe
                  src={selectedMeeting.link}
                  className="w-full h-full border-none"
                  title={`Book ${selectedMeeting.title}`}
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
