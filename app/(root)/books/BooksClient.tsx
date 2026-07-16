"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  ShoppingCart,
  ShieldCheck,
  Star,
  BookOpen,
  X,
  Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { BookCard } from "@/components/books/BookCard";
import { BookCardHardCopy } from "@/components/books/BookCardHardCopy";
import type { AmazonBook, Book } from "@/types/book";

export type { Book };

interface BooksClientProps {
  freeBooks: Book[];
  paidBooks: Book[];
  amazonBooks: AmazonBook[];
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function BooksClient({ freeBooks, paidBooks, amazonBooks }: BooksClientProps) {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [purchaseBook, setPurchaseBook] = useState<Book | null>(null);
  const [downloadName, setDownloadName] = useState("");
  const [downloadEmail, setDownloadEmail] = useState("");
  const [downloadPhone, setDownloadPhone] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  // Purchase modal state
  const [purchaseName, setPurchaseName] = useState("");
  const [purchaseEmail, setPurchaseEmail] = useState("");
  const [purchasePhone, setPurchasePhone] = useState("");
  const [isPurchaseSubmitting, setIsPurchaseSubmitting] = useState(false);

  const closeModal = () => {
    setSelectedBook(null);
    setIsSuccess(false);
    setDownloadName("");
    setDownloadEmail("");
    setDownloadPhone("");
  };

  const closePurchaseModal = () => {
    setPurchaseBook(null);
    setPurchaseName("");
    setPurchaseEmail("");
    setPurchasePhone("");
  };

  const onDownloadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedBook) return;
    setIsDownloading(true);

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
          fileUrl: selectedBook.fileUrl || null,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setDownloadName("");
        setDownloadPhone("");
      } else {
        const data = await response.json();
        alert(data.error || "Failed to process download request. Please try again.");
      }
    } catch (error) {
      console.error("Failed to submit download notification:", error);
      alert("Network error. Please check your connection and try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  const handlePurchase = (book: Book) => {
    setPurchaseBook(book);
  };

  const onPurchaseSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!purchaseBook) return;
    setIsPurchaseSubmitting(true);

    try {
      // Send lead email first
      const response = await fetch("/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: purchaseName,
          email: purchaseEmail,
          phone: purchasePhone,
          bookTitle: purchaseBook.title,
          fileUrl: null,
          isPurchase: true,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        alert(data.error || "Failed to send confirmation email. Please try again.");
        setIsPurchaseSubmitting(false);
        return;
      }

      // Email confirmed sent — now redirect to PayPal
      if (purchaseBook.paymentLink) {
        window.location.href = purchaseBook.paymentLink;
      } else {
        closePurchaseModal();
      }
    } catch {
      alert("Network error. Please check your connection and try again.");
      setIsPurchaseSubmitting(false);
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
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
  {/* Paid Books */}
  <div>
    {paidBooks.length === 0 ? (
      <div className="text-center py-12 border-2 border-dashed border-muted rounded-3xl">
        <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-charcoal">
          No Premium Books Available
        </h3>
        <p className="text-muted-foreground mt-2">
          Check back soon for new premium guides.
        </p>
      </div>
    ) : (
      <div className="grid grid-cols-1 gap-8">
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

  {/* Amazon Hard Copy */}
  <div>
    {amazonBooks && amazonBooks.length > 0 && (
      <div className="grid grid-cols-1 gap-8">
        {amazonBooks.map((book) => (
          <BookCardHardCopy
            key={book._id}
            book={book}
          />
        ))}
      </div>
    )}
  </div>
</div>
      </div>

      {/* Download Lead Capture Modal */}
      <AnimatePresence>
        {selectedBook && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-lg bg-white rounded-[32px] overflow-hidden border border-burgundy/10 shadow-2xl p-8 md:p-10 z-10"
            >
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 p-2 rounded-full bg-muted hover:bg-muted-foreground/10 text-charcoal/80 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {isSuccess ? (
                <div className="text-center py-6 space-y-6">
                  <div className="mx-auto w-16 h-16 bg-burgundy/5 rounded-full flex items-center justify-center text-burgundy border border-burgundy/10">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold font-poppins text-charcoal">eBook Sent Successfully!</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We have sent your copy of <br />
                      <strong className="text-burgundy font-semibold">&quot;{selectedBook.title}&quot;</strong> <br />
                      to <span className="underline decoration-burgundy decoration-2 text-charcoal font-medium">{downloadEmail}</span>.
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground/75 leading-relaxed pt-2 border-t border-muted/50">
                    Please check your inbox (and your spam/promotions folder) within a few minutes to access your eBook.
                  </p>
                  <Button
                    onClick={closeModal}
                    className="w-full h-12 bg-burgundy hover:bg-burgundy-light text-white rounded-xl font-bold mt-4"
                  >
                    Done
                  </Button>
                </div>
              ) : (
                <>
                  <Badge className="mb-4">Free eBook Download</Badge>
                  <h3 className="text-2xl md:text-3xl font-bold font-poppins text-charcoal mb-3 pr-8">
                    {selectedBook.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    Enter your details below to receive your complimentary copy securely in your email inbox.
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
                      disabled={isDownloading}
                      className="w-full h-14 text-base font-bold bg-burgundy hover:bg-burgundy-light text-white rounded-xl shadow-lg mt-6 flex items-center justify-center gap-2 disabled:opacity-75"
                    >
                      {isDownloading ? (
                        <>
                          Sending... <Loader2 className="w-5 h-5 animate-spin" />
                        </>
                      ) : (
                        <>
                          Send My eBook <Download className="w-5 h-5" />
                        </>
                      )}
                    </Button>
                    <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest font-bold">
                      Sent securely to your email address
                    </p>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Purchase Lead Capture Modal */}
      <AnimatePresence>
        {purchaseBook && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closePurchaseModal}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-lg bg-charcoal rounded-[32px] overflow-hidden border border-gold/20 shadow-2xl p-8 md:p-10 z-10"
            >
              <button
                onClick={closePurchaseModal}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />

              <Badge className="mb-4 bg-gold/20 text-gold border-gold/30 hover:bg-gold/30">
                Premium Purchase
              </Badge>
              <h3 className="text-2xl md:text-3xl font-bold font-poppins text-white mb-2 pr-8">
                {purchaseBook.title}
              </h3>
              <p className="text-sm text-white/60 mb-1">
                <span className="text-gold font-black text-lg">${purchaseBook.price || "49.99"}</span>
                <span className="text-white/40 text-xs ml-1">CAD</span>
              </p>
              <p className="text-sm text-white/50 mb-6 leading-relaxed">
                Enter your details below &mdash; you&apos;ll be securely redirected to PayPal to complete your purchase.
              </p>

              <form onSubmit={onPurchaseSubmit} className="space-y-4">
                <div>
                  <label htmlFor="purchaseName" className="block text-xs uppercase font-bold text-white/60 mb-1.5 tracking-wider">
                    Your Name
                  </label>
                  <Input
                    id="purchaseName"
                    required
                    value={purchaseName}
                    onChange={(e) => setPurchaseName(e.target.value)}
                    placeholder="Enter your name"
                    className="h-12 rounded-xl bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-gold focus:ring-1 focus:ring-gold"
                  />
                </div>
                <div>
                  <label htmlFor="purchaseEmail" className="block text-xs uppercase font-bold text-white/60 mb-1.5 tracking-wider">
                    Email Address
                  </label>
                  <Input
                    id="purchaseEmail"
                    type="email"
                    required
                    value={purchaseEmail}
                    onChange={(e) => setPurchaseEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="h-12 rounded-xl bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-gold focus:ring-1 focus:ring-gold"
                  />
                </div>
                <div>
                  <label htmlFor="purchasePhone" className="block text-xs uppercase font-bold text-white/60 mb-1.5 tracking-wider">
                    Phone Number
                  </label>
                  <Input
                    id="purchasePhone"
                    type="tel"
                    required
                    value={purchasePhone}
                    onChange={(e) => setPurchasePhone(e.target.value)}
                    placeholder="e.g. +1 (123) 456-7890"
                    className="h-12 rounded-xl bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-gold focus:ring-1 focus:ring-gold"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isPurchaseSubmitting}
                  className="w-full h-14 text-base font-bold bg-gold hover:bg-gold-light text-charcoal rounded-xl shadow-lg mt-6 flex items-center justify-center gap-2 disabled:opacity-75"
                >
                  {isPurchaseSubmitting ? (
                    <>
                      Redirecting... <Loader2 className="w-5 h-5 animate-spin" />
                    </>
                  ) : (
                    <>
                      Proceed to Checkout <ShoppingCart className="w-5 h-5" />
                    </>
                  )}
                </Button>
                <p className="text-[10px] text-center text-white/30 uppercase tracking-widest font-bold">
                  Secured by PayPal
                </p>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}