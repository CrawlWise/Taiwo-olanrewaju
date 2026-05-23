"use client";

import { motion } from "framer-motion";
import { 
  Star, 
  Quote, 
  MessageSquare, 
  Send,
  ShieldCheck,
  CheckCircle2,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const REVIEWS = [
  { name: "Sarah M.", role: "Small Business Owner", rating: 5, text: "Working with Taiwo changed my entire perspective on business finances. The clarity I gained has allowed me to scale my operations with confidence and precision." },
  { name: "James & Emily T.", role: "Parents", rating: 5, text: "Taiwo helped us set up a rock-solid life insurance plan and education funds for our kids. His patience in explaining complex concepts is unmatched in the industry." },
  { name: "David K.", role: "Newcomer to Canada", rating: 5, text: "Navigating the Canadian financial system was overwhelming until I attended Taiwo's masterclass. He provided a clear roadmap that I'm successfully following today." },
  { name: "Alicia R.", role: "Financial Advisor Trainee", rating: 5, text: "Joining Taiwo's team was the best career decision I've made. The mentorship and system he has in place for new advisors is truly world-class." },
  { name: "Michael P.", role: "Software Engineer", rating: 5, text: "Very practical and straightforward advice on optimizing my portfolio and minimizing taxes. Highly recommended for any professional looking to grow." },
  { name: "Robert G.", role: "Corporate Director", rating: 5, text: "The sophisticated tax-sheltering strategies Taiwo implemented saved our estate significant future liabilities. A master of his craft." },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function ReviewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-burgundy text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,var(--tw-color-gold)_0%,transparent_60%)] opacity-30" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <Badge  className="mb-6">Testimonials</Badge>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight font-poppins mb-8 leading-[1.1]">
              Real Stories of <br />
              <span className="text-gradient-gold">Financial Impact.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 font-inter max-w-2xl mx-auto leading-relaxed">
              Join the hundreds of individuals and families who have transformed their financial future through our partnership.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-16 items-start">
            {/* Reviews Column */}
            <div className="lg:col-span-2 space-y-10">
              <div className="flex flex-wrap items-center gap-12 p-10 bg-white rounded-[40px] shadow-sm mb-12 border border-burgundy/5">
                <div className="space-y-1">
                  <div className="text-5xl font-black text-charcoal">4.9/5</div>
                  <div className="flex text-gold">
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-2">Overall Rating</p>
                </div>
                <div className="flex-1 space-y-4">
                  {[
                    { label: "Expertise", value: "100%" },
                    { label: "Clarity", value: "98%" },
                    { label: "Trust", value: "100%" }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <span className="text-xs font-bold uppercase tracking-widest w-24 text-muted-foreground">{stat.label}</span>
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-burgundy rounded-full" style={{ width: stat.value }} />
                      </div>
                      <span className="text-xs font-black text-charcoal">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="columns-1 md:columns-2 gap-8 space-y-8">
                {REVIEWS.map((review, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="break-inside-avoid bg-white p-10 rounded-[32px] shadow-premium border border-burgundy/5 group hover:border-burgundy/20 transition-all"
                  >
                    <Quote className="w-10 h-10 text-burgundy/10 mb-6 group-hover:text-burgundy/20 transition-colors" />
                    <div className="flex text-gold mb-6 gap-0.5">
                      {Array(review.rating).fill(0).map((_, s) => <Star key={s} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-lg text-charcoal font-medium italic mb-8 leading-relaxed">
                      "{review.text}"
                    </p>
                    <div className="flex items-center gap-4 border-t border-muted/50 pt-8">
                      <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center font-black text-charcoal/30">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-charcoal font-poppins">{review.name}</h4>
                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{review.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1 sticky top-32"
            >
              <Card className="border-none shadow-2xl rounded-[48px] overflow-hidden bg-burgundy text-white">
                <CardContent className="p-10 md:p-12">
                  <div className="text-center mb-10">
                    <div className="w-16 h-16 bg-white/10 text-gold rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <MessageSquare className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-bold font-poppins mb-4">Share Your Journey</h3>
                    <p className="text-white/60 text-sm">Your feedback helps others make informed decisions about their future.</p>
                  </div>

                  <form className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 ml-1">Full Name</label>
                      <Input placeholder="Jane Doe" className="h-14 rounded-2xl bg-white/10 border-white/10 text-white placeholder:text-white/30 focus:ring-gold" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 ml-1">Rating</label>
                      <div className="flex gap-2 p-4 bg-white/5 rounded-2xl justify-center text-gold/40">
                        {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-6 h-6 cursor-pointer hover:text-gold hover:fill-gold transition-all" />)}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 ml-1">Your Story</label>
                      <textarea className="w-full px-5 py-4 rounded-3xl bg-white/10 border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-gold min-h-[140px]" placeholder="Tell us about your experience..."></textarea>
                    </div>

                    <Button className="w-full h-16 text-xl font-bold font-poppins bg-gold hover:bg-gold-light text-burgundy-dark rounded-2xl shadow-xl transition-all">
                      Submit Review <Send className="ml-3 w-5 h-5" />
                    </Button>
                    
                    <div className="flex flex-col gap-4 mt-8 opacity-40">
                      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest justify-center">
                        <ShieldCheck className="w-4 h-4" /> Secure & Private Submission
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>

              <div className="mt-8 p-8 bg-charcoal rounded-[40px] text-white/80 shadow-xl border border-white/5">
                <div className="flex items-center gap-4 mb-6">
                  <Users className="text-gold w-6 h-6" />
                  <h4 className="text-xl font-bold font-poppins text-white">Team Impact</h4>
                </div>
                <p className="text-sm leading-relaxed mb-6">
                  Over <span className="text-white font-bold">95%</span> of our clients report feeling significantly more confident about their financial future after just one session.
                </p>
                <div className="flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-widest">
                  <CheckCircle2 className="w-4 h-4" /> Verified Reviews
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

