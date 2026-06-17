"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Download, 
  ShoppingCart, 
  ShieldCheck, 
  Star,
  BookOpen,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { BookCard } from "@/components/books/BookCard";

export interface Book {
  title: string;
  summary?: string;
  price?: number;
  isbn?: string;
  publishedDate?: string;
  coverImage?: {
    asset?: {
      url: string;
    };
  };
  coverImageAlt?: string;
  author?: {
    name: string;
    image?: {
      asset?: {
        url: string;
      };
      alt?: string;
    };
  };
  categories?: Array<{
    _id: string;
    title: string;
    slug?: { current: string };
  }>;
  fileUrl?: string;
  storeTier: string;
  paymentLink?: string;
}

interface BooksClientProps {
  freeBooks: Book[];
  paidBooks: Book[];
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function BooksClient({ freeBooks, paidBooks }: BooksClientProps) {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [downloadName, setDownloadName] = useState("");
  const [downloadEmail, setDownloadEmail] = useState("");
  const [downloadPhone, setDownloadPhone] = useState("");

  const onDownloadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedBook) return;

    try {
      const response = await fetch("/api/download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: downloadName,
          email: downloadEmail,
          phone: downloadPhone,
          bookTitle: selectedBook.title,
        }),
      });

      if (response.ok) {
        if (selectedBook.fileUrl) {
          window.open(selectedBook.fileUrl, "_blank");
        } else {
          alert("This book PDF is currently being prepared. Check back soon!");
        }
        
        // Reset and close only on success
        setDownloadName("");
        setDownloadEmail("");
        setDownloadPhone("");
        setSelectedBook(null);
      } else {
        const data = await response.json();
        alert(data.error || "Failed to process download request. Please try again.");
      }
    } catch (error) {
      console.error("Failed to submit download notification:", error);
      alert("Network error. Please check your connection and try again.");
    }
  };

  const handlePurchase = (book: Book) => {
    if (book.paymentLink) {
      window.location.href = book.paymentLink;
    } else if (book.fileUrl) {
      window.open(book.fileUrl, "_blank");
    } else {
      alert(`Redirecting to payment gateway for "${book.title}"...`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-burgundy text-white">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,var(--tw-color-gold)_0%,transparent_60%)] opacity-30" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <Badge className="mb-6">Knowledge Library</Badge>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight font-poppins mb-8 leading-[1.1]">
              Tools to Build Your <br />
              <span className="text-gradient-gold">Financial Future.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 font-inter max-w-2xl mx-auto leading-relaxed">
              Practical, actionable knowledge distilled into comprehensive guides designed for long-term growth.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-24">
        {/* ==================== FREE BOOKS SECTION ==================== */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-poppins text-charcoal mb-4">Free Resources</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Start building your foundation today with these comprehensive complimentary guides.
            </p>
          </div>

          {freeBooks.length === 0 ? (
            <div className="text-center py-12 border-2 border-dashed border-muted rounded-3xl">
              <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-charcoal">No Free Books Available</h3>
              <p className="text-muted-foreground mt-2">Check back soon for new guides.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {freeBooks.map((book, idx) => (
                <BookCard 
                  key={idx}
                  book={book}
                  onDownloadClick={(b) => setSelectedBook(b)}
                />
              ))}
            </div>
          )}
        </div>

        {/* ==================== PAID BOOKS SECTION ==================== */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-poppins text-charcoal mb-4">Premium Guides</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Take your strategies to the next level with our premium, high-impact blueprints.
            </p>
          </div>

          {paidBooks.length === 0 ? (
            <div className="text-center py-12 border-2 border-dashed border-muted rounded-3xl">
              <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-charcoal">No Premium Books Available</h3>
              <p className="text-muted-foreground mt-2">Check back soon for new premium guides.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {paidBooks.map((book, idx) => (
                <BookCard 
                  key={idx}
                  book={book}
                  onPurchaseClick={(b) => handlePurchase(b)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Download Lead Capture Modal */}
      <AnimatePresence>
        {selectedBook && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBook(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            
            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-lg bg-white rounded-[32px] overflow-hidden border border-burgundy/10 shadow-2xl p-8 md:p-10 z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedBook(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-muted hover:bg-muted-foreground/10 text-charcoal/80 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <Badge className="mb-4">Free eBook Download</Badge>
              <h3 className="text-2xl md:text-3xl font-bold font-poppins text-charcoal mb-3 pr-8">
                {selectedBook.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Enter your details below to receive your complimentary copy instantly in your browser and your email inbox.
              </p>

              <form onSubmit={onDownloadSubmit} className="space-y-4">
                <div>
                  <label htmlFor="downloaderName" className="block text-xs uppercase font-bold text-charcoal mb-1.5 tracking-wider">
                    Your Name
                  </label>
                  <Input
                    id="downloaderName"
                    required
                    value={downloadName}
                    onChange={(e) => setDownloadName(e.target.value)}
                    placeholder="Enter your name"
                    className="h-12 rounded-xl border-border/80 focus:border-burgundy focus:ring-1 focus:ring-burgundy"
                  />
                </div>
                <div>
                  <label htmlFor="downloaderEmail" className="block text-xs uppercase font-bold text-charcoal mb-1.5 tracking-wider">
                    Email Address
                  </label>
                  <Input
                    id="downloaderEmail"
                    type="email"
                    required
                    value={downloadEmail}
                    onChange={(e) => setDownloadEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="h-12 rounded-xl border-border/80 focus:border-burgundy focus:ring-1 focus:ring-burgundy"
                  />
                </div>
                <div>
                  <label htmlFor="downloaderPhone" className="block text-xs uppercase font-bold text-charcoal mb-1.5 tracking-wider">
                    Phone Number
                  </label>
                  <Input
                    id="downloaderPhone"
                    type="tel"
                    required
                    value={downloadPhone}
                    onChange={(e) => setDownloadPhone(e.target.value)}
                    placeholder="e.g. +1 (123) 456-7890"
                    className="h-12 rounded-xl border-border/80 focus:border-burgundy focus:ring-1 focus:ring-burgundy"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full h-14 text-base font-bold bg-burgundy hover:bg-burgundy-light text-white rounded-xl shadow-lg mt-6 flex items-center justify-center gap-2"
                >
                  Download Now <Download className="w-5 h-5" />
                </Button>
                <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest font-bold">
                  Direct Download + Sent instantly to inbox
                </p>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

