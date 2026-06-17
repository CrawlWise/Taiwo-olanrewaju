"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Script from "next/script";
import {
  ArrowRight,
  BookOpen,
  Users,
  TrendingUp,
  CheckCircle2,
  Quote,
  Briefcase,
  GraduationCap,
  Calendar,
  Clock,
  Heart,
  Activity,
  Plane,
  Stethoscope,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { client } from "@/sanity/client";
import { LATEST_POSTS_QUERY, ALL_BOOKS_QUERY } from "@/sanity/queries";
import Partners from "@/components/partners/partners";

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

export default function Home() {
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [freeBook, setFreeBook] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [posts, stores] = await Promise.all([
          client.fetch(LATEST_POSTS_QUERY),
          client.fetch(ALL_BOOKS_QUERY),
        ]);
        setBlogPosts(posts || []);

        let foundFreeBook = null;
        stores?.forEach((store: any) => {
          if (store.tier === "free" && store.books?.length > 0) {
            foundFreeBook = store.books[0];
          }
        });
        if (foundFreeBook) {
          setFreeBook(foundFreeBook);
        }
      } catch (error) {
        console.error("Error fetching homepage data from Sanity:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (freeBook?.fileUrl) {
      window.open(freeBook.fileUrl, "_blank");
    } else {
      alert("This book PDF is currently being prepared. Check back soon!");
    }
  };

  function estimateReadTime(excerpt?: string | null): number {
    if (!excerpt) return 3;
    const words = excerpt.trim().split(/\s+/).length;
    return Math.max(1, Math.ceil((words * 5) / 238));
  }

  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-burgundy text-white py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0 opacity-30">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -top-24 -left-24 w-96 h-96 bg-gold/20 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 15, repeat: Infinity, delay: 2 }}
            className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-burgundy-light/30 rounded-full blur-[120px]"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.div variants={fadeIn}>
                <Badge className="mb-6 px-4 py-1 text-sm uppercase tracking-widest font-semibold">
                  Financial Advisor & Mentor
                </Badge>
              </motion.div>

              <motion.h1
                variants={fadeIn}
                className="text-5xl md:text-7xl font-extrabold tracking-tight font-poppins mb-6 leading-[1.1]"
              >
                Master Your Finances, <br />
                <span className="text-gradient-gold">Build Your Legacy.</span>
              </motion.h1>

              <motion.p
                variants={fadeIn}
                className="text-lg md:text-xl text-white/80 mb-10 font-inter max-w-xl leading-relaxed"
              >
                Secure your future with professional financial guidance. I help
                individuals and entrepreneurs navigate the complexities of
                wealth building and legacy planning.
              </motion.p>

              <motion.div
                variants={fadeIn}
                className="flex flex-col sm:flex-row gap-5"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gold hover:bg-gold-light text-burgundy-dark font-bold text-lg h-14 px-8 shadow-gold"
                >
                  <Link href="/book">
                    Book an Appointment <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/30 hover:bg-white/10 text-white font-semibold text-lg h-14 px-8 backdrop-blur-sm"
                >
                  <Link href="/books">Get My Free Book</Link>
                </Button>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="mt-12 flex items-center gap-4 text-white/60"
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-burgundy bg-charcoal flex items-center justify-center text-[10px] font-bold"
                    >
                      {i}+
                    </div>
                  ))}
                </div>
                <p className="text-sm font-medium">
                  Trusted by 500+ clients across Canada
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-white/5 group bg-black/10 pt-12">
                <Image
                  src="/images/taiwo-nb.png"
                  alt="Taiwo Olanrewaju"
                  fill
                  className="object-contain object-bottom group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-8 -left-8 glass p-6 rounded-2xl shadow-premium border-gold/20 max-w-[240px] hidden md:block"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-burgundy-dark shadow-inner">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gold uppercase tracking-tighter">
                      Verified Expert
                    </p>
                    <p className="text-sm font-bold text-white">
                      Licensed Advisor
                    </p>
                  </div>
                </div>
                <p className="text-xs text-white/70">
                  Providing strategic financial solutions for over a decade.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-charcoal text-white border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
            {[
              { label: "Clients Served", value: "500+", icon: Users },
              { label: "Financial Plans", value: "1.2k+", icon: TrendingUp },
              { label: "Digital Books", value: "3+", icon: BookOpen },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-4 min-w-[200px]"
              >
                <stat.icon className="w-8 h-8 text-gold mb-3 opacity-80" />
                <h3 className="text-3xl md:text-4xl font-bold font-poppins text-white mb-1">
                  {stat.value}
                </h3>
                <p className="text-sm text-white/60 font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge className="mb-4">Our Expertise</Badge>
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-charcoal mb-6">
              Strategic Financial Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              I provide expert insurance guidance tailored to your unique needs.
              My goal is to help you secure the right coverage for your
              financial future.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: "Life Insurance",
                icon: Heart,
                color: "burgundy",
              },
              {
                title: "Critical Illness Insurance",
                icon: Activity,
                color: "gold",
              },
              {
                title:
                  "Registered & Non Registered Investment Accounts (TFSA, RRSP, RESP, FHSA, Annuities)",
                icon: TrendingUp,
                color: "charcoal",
              },
              {
                title: "Travel Insurance / Super Visa Insurance",
                icon: Plane,
                color: "charcoal",
              },
              {
                title: "Health & Dental",
                icon: Stethoscope,
                color: "charcoal",
              },
              {
                title: "Income Replacement Insurance",
                icon: Briefcase,
                color: "charcoal",
              },
              {
                title: "Group Policies & Disability Insurance",
                icon: Users,
                color: "charcoal",
              },
            ].map((service, i) => {
              // Map colors statically for our new minimalist look
              const colorMap = {
                burgundy: {
                  icon: "text-burgundy bg-burgundy/10 group-hover:bg-burgundy group-hover:text-white",
                  cardHover:
                    "hover:border-burgundy/20 hover:bg-burgundy/[0.02]",
                  chevron: "group-hover:text-burgundy",
                },
                gold: {
                  icon: "text-gold-dark bg-gold/15 group-hover:bg-gold group-hover:text-burgundy-dark",
                  cardHover: "hover:border-gold/30 hover:bg-gold/[0.03]",
                  chevron: "group-hover:text-gold-dark",
                },
                charcoal: {
                  icon: "text-charcoal bg-charcoal/10 group-hover:bg-charcoal group-hover:text-white",
                  cardHover:
                    "hover:border-charcoal/20 hover:bg-charcoal/[0.02]",
                  chevron: "group-hover:text-charcoal",
                },
              };
              const styles =
                colorMap[service.color as keyof typeof colorMap] ||
                colorMap.charcoal;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  className="h-full"
                >
                  <Card
                    className={`relative h-full bg-white p-6 md:p-7 rounded-2xl transition-all duration-300 ease-out group overflow-hidden ${styles.cardHover} hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.04)]`}
                  >
                    <div className="relative z-10 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-5">
                        {/* Elegant Icon Container */}
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ease-out shrink-0 ${styles.icon}`}
                        >
                          <service.icon className="w-6 h-6" />
                        </div>

                        {/* Title - Non-bold (font-medium) */}
                        <h3 className="text-base md:text-lg font-medium font-poppins text-charcoal transition-colors duration-300 leading-snug">
                          {service.title}
                        </h3>
                      </div>

                      {/* Premium Hover Arrow Indicator */}
                      <ArrowRight
                        className={`w-4 h-4 text-muted-foreground/60 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out shrink-0 ${styles.chevron}`}
                      />
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/*our partners */}
      <section>
        <Partners />
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-warm-beige/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/taiwo-nb.png"
                  alt="Taiwo Olanrewaju"
                  width={600}
                  height={700}
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold/20 rounded-full blur-2xl z-0" />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-burgundy/10 rounded-full blur-3xl z-0" />
            </div>

            <div className="lg:w-1/2">
              <Badge className="mb-6">The Story</Badge>
              <h2 className="text-4xl font-bold font-poppins text-charcoal mb-8 leading-tight">
                Driven by Purpose, <br />
                Focused on Your Progress.
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed italic">
                <p>
                  &quot;Financial freedom isn&apos;t just about how much money
                  you make; it&apos;s about the security and legacy you create
                  for those you love.&quot;
                </p>
                <div className="not-italic text-charcoal space-y-4">
                  <p>
                    With over a decade of experience, I&lsquo;ve seen firsthand
                    how the right financial strategy can transform lives. My
                    mission is to simplify the complex and provide a clear
                    roadmap to prosperity.
                  </p>
                  <p>
                    Whether you&apos;re just starting your career or looking to
                    optimize your wealth, I&apos;m here to guide you every step
                    of the way.
                  </p>
                </div>
              </div>
              <div className="mt-10">
                <Button
                  asChild
                  variant="outline"
                  className="border-burgundy text-burgundy hover:bg-burgundy hover:text-white rounded-full px-8"
                >
                  <Link href="/about">Read My Full Story</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-24 bg-burgundy relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(212,175,55,0.15),transparent)] z-0" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 bg-white/5 backdrop-blur-sm rounded-[40px] p-12 lg:p-20 border border-white/10 shadow-2xl">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
                Start Your Journey to Legacy.
              </h2>
              <p className="text-xl text-white/80 mb-10 leading-relaxed">
                {freeBook ? (
                  <>
                    Download my exclusive guide:{" "}
                    <span className="text-gold font-bold">
                      &quot;{freeBook.title}&quot;
                    </span>
                    .
                  </>
                ) : (
                  <>
                    Download my exclusive guide:{" "}
                    <span className="text-gold font-bold">
                      &quot;The Legacy Roadmap&quot;
                    </span>
                    . Learn the 5 essential pillars of wealth building that
                    traditional banks won&apos;t tell you.
                  </>
                )}
              </p>

              {freeBook?.summary && (
                <p className="text-base text-white/70 mb-8 leading-relaxed">
                  {freeBook.summary}
                </p>
              )}

              <ul className="space-y-4 mb-10">
                {[
                  "Proven wealth preservation strategies",
                  "How to minimize taxes legally",
                  "Building multi-generational wealth",
                  "Investment basics for newcomers",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/90">
                    <CheckCircle2 className="w-5 h-5 text-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {freeBook ? (
                <form
                  onSubmit={handleDownload}
                  className="space-y-4 bg-white/10 p-6 rounded-3xl border border-white/10 w-full max-w-md backdrop-blur-md"
                >
                  <div className="grid sm:grid-cols-2 gap-3">
                    <input
                      required
                      placeholder="Your Name"
                      className="h-11 rounded-xl px-4 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-gold text-sm"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      className="h-11 rounded-xl px-4 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-gold text-sm"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full h-12 bg-gold hover:bg-gold-light text-burgundy-dark font-black rounded-xl text-sm flex items-center justify-center gap-2 shadow-gold"
                  >
                    Send My eBook <Download className="w-4 h-4" />
                  </Button>
                  <p className="text-[10px] text-center text-white/50 uppercase tracking-widest font-bold">
                    Sent instantly to your inbox / Direct Download
                  </p>
                </form>
              ) : (
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gold hover:bg-gold-light text-burgundy-dark font-bold h-14 px-10 rounded-xl"
                  >
                    <Link href="/books">Download Free Guide</Link>
                  </Button>
                </div>
              )}
            </div>

            <div className="lg:w-1/2 flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative shadow-[20px_20px_60px_rgba(0,0,0,0.5)] rounded-lg overflow-hidden"
              >
                <Image
                  src={
                    freeBook?.coverImage?.asset?.url || "/images/book_cover.png"
                  }
                  alt={
                    freeBook?.coverImageAlt ||
                    freeBook?.title ||
                    "The Legacy Roadmap Book"
                  }
                  width={350}
                  height={500}
                  className="rounded-lg object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <Badge className="mb-4">Join My Team</Badge>
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-charcoal mb-6 italic">
              Empower Others, Grow Your Career.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I am looking for ambitious individuals who want to build a
              rewarding career as financial advisors. Join a community that
              values growth, integrity, and impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            <Card className="border-none bg-charcoal text-white p-10 rounded-3xl shadow-premium">
              <div className="h-full flex flex-col">
                <Users className="w-12 h-12 text-gold mb-6" />
                <h3 className="text-2xl font-bold font-poppins mb-4">
                  Why Join Us?
                </h3>
                <div className="space-y-4 flex-grow">
                  {[
                    "Unmatched mentorship and training",
                    "Flexible hours and remote work options",
                    "Performance-based high income potential",
                    "Meaningful work that changes lives",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold" />
                      <p className="text-white/80">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                  <Button
                    asChild
                    className="w-full bg-white text-charcoal hover:bg-gold hover:text-burgundy-dark font-bold py-6"
                  >
                    <Link href="/careers#benefits">Apply Now</Link>
                  </Button>
                </div>
              </div>
            </Card>

            <div className="relative rounded-3xl overflow-hidden group">
              <Image
                src="/images/taiwo-nb.png"
                alt="Mentorship Session"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-burgundy/40 flex items-center justify-center p-12">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Your Success is My Priority.
                  </h3>
                  <p className="text-white/90">
                    I personally mentor every member of my team to ensure they
                    reach their full potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-charcoal text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-poppins mb-4">
              Client Success Stories
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto" />
          </div>

          <Script
            src="https://elfsightcdn.com/platform.js"
            strategy="lazyOnload"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div
              className="elfsight-app-b2236910-2b35-48be-8779-1560be1b8e1b"
              data-elfsight-app-lazy
            />
          </motion.div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <Badge className="mb-4">Insights & Perspectives</Badge>
              <h2 className="text-4xl md:text-5xl font-bold font-poppins text-charcoal leading-tight">
                Latest from the Blog
              </h2>
            </div>
            <Link
              href="/blog"
              className="group flex items-center gap-2 text-burgundy font-bold text-lg hover:text-gold transition-colors"
            >
              View All Articles
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-16">
              <div className="w-10 h-10 border-4 border-burgundy border-t-transparent rounded-full animate-spin" />
            </div>
          ) : !blogPosts || blogPosts.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground border border-dashed rounded-3xl p-8 bg-warm-beige/5">
              <BookOpen className="w-12 h-12 text-gold mx-auto mb-4 opacity-65 animate-pulse" />
              <p className="text-lg font-medium mb-1">
                No articles published yet
              </p>
              <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                Articles are being prepared. Check back soon for industry
                insights and career strategies.
              </p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, i) => {
                  const imageUrl = post.mainImage?.asset?.url
                    ? `${post.mainImage.asset.url}?w=600&h=400&fit=crop&auto=format`
                    : null;

                  return (
                    <motion.div
                      key={post._id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="group"
                    >
                      <Card className="h-full border-none shadow-premium hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white flex flex-col">
                        <div className="relative aspect-[16/10] overflow-hidden shrink-0">
                          {imageUrl ? (
                            <Image
                              src={imageUrl}
                              alt={
                                post.mainImage?.alt ??
                                post.title ??
                                "Blog Cover"
                              }
                              fill
                              sizes="(max-w-768px) 100vw, 33vw"
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                          ) : (
                            <div
                              className="w-full h-full"
                              style={{
                                background:
                                  "linear-gradient(135deg, #800020 0%, #5c0017 60%, #1a0008 100%)",
                              }}
                            />
                          )}
                          {post.categories && post.categories.length > 0 && (
                            <div className="absolute top-4 left-4">
                              <Badge className="bg-burgundy/90 text-white border-none backdrop-blur-md">
                                {post.categories[0].title}
                              </Badge>
                            </div>
                          )}
                        </div>
                        <CardContent className="p-8 flex flex-col flex-grow">
                          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 shrink-0">
                            {post.publishedAt && (
                              <div className="flex items-center gap-1">
                                <Calendar className="w-3.5 h-3.5" />
                                {formatDate(post.publishedAt)}
                              </div>
                            )}
                            <div className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              {estimateReadTime(post.excerpt)} min read
                            </div>
                          </div>
                          <h3 className="text-2xl font-bold font-poppins mb-4 text-charcoal group-hover:text-burgundy transition-colors line-clamp-2 leading-tight">
                            {post.title}
                          </h3>
                          {post.excerpt && (
                            <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed flex-grow">
                              {post.excerpt}
                            </p>
                          )}
                          <div className="mt-auto">
                            <Link
                              href={`/blog/${post.slug?.current ?? ""}`}
                              className="inline-flex items-center font-bold text-burgundy group-hover:gap-2 transition-all"
                            >
                              Read Article{" "}
                              <ArrowRight className="ml-1 w-4 h-4" />
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-16 text-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-burgundy hover:bg-burgundy-dark text-white font-bold h-14 px-8 rounded-full shadow-lg transition-transform duration-300 hover:scale-[1.02]"
                >
                  <Link href="/blog">
                    View All Blog Posts <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-charcoal mb-8 leading-tight">
            Ready to Take the Next Step <br className="hidden md:block" />{" "}
            Toward Financial Freedom?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Don't wait for the "perfect" time. Start building your wealth today
            with a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button
              asChild
              size="lg"
              className="bg-burgundy hover:bg-burgundy-dark text-white font-bold h-16 px-10 rounded-full text-xl shadow-xl"
            >
              <Link href="/book">
                <Calendar className="mr-3 h-6 w-6" /> Schedule a Call
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-burgundy text-burgundy hover:bg-burgundy/5 font-bold h-16 px-10 rounded-full text-xl"
            >
              <Link href="/contact">Contact Me Directly</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
